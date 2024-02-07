import * as gcp from '@cdktf/provider-google';
import * as cdktf from 'cdktf';
import { Construct } from 'constructs';
import { DockerVolumes } from './gitlab-runner-interfaces';

export interface GitlabRunnerAutoscalingProps {
  /**
   * Google Cloud Provider.
  */
  readonly provider: gcp.provider.GoogleProvider;
  /**
   * Gitlab token.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN' });
   */
  readonly gitlabToken: string;

  /**
   * Runner default EC2 instance type.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', instanceType: 't3.small' });
   *
   * @default -
   *
   */
  readonly machineType?: string;

  /**
   * VPC for the Gitlab Runner .
   *
   * @example
   * const computeNetwork = new gcp.ComputeNetwork(this, 'Network', {
   *   name: 'cdktf-gitlabrunner-network',
   * });
   *
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', computeNetwork: computeNetwork });
   *
   * @default - A new VPC will be created.
   *
   */
  readonly computeNetwork?: gcp.dataGoogleComputeNetwork.DataGoogleComputeNetwork;

  /**
   * Desired capacity limit for autoscaling group.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', desiredCapacity: 2 });
   *
   * @default - minCapacity, and leave unchanged during deployment
   *
   */
  readonly desiredCapacity?: number;

  /**
   * tags for the runner
   *
   * @default - ['runner', 'gitlab', 'awscdk']
   */
  readonly tags?: string[];

  /**
   * Gitlab Runner register url .
   *
   * @example
   * const runner = new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN',gitlabUrl: 'https://gitlab.com/'});
   *
   * @default - https://gitlab.com/ , The trailing slash is mandatory.
   *
   */
  readonly gitlabUrl?: string;

  /**
   * add another Gitlab Container Runner Docker Volumes Path at job runner runtime.
   *
   * more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section
   *
   * @default - already mount "/var/run/docker.sock:/var/run/docker.sock"
   *
   * @example
   * dockerVolumes: [
   *   {
   *     hostPath: '/tmp/cache',
   *     containerPath: '/tmp/cache',
   *   },
   * ],
   */
  readonly dockerVolumes?: DockerVolumes[];


  /**
   * Gitlab Runner instance Disk size.
   *
   * @default - 60 GB.
  */
  readonly defaultDiskSizeGb? : number;

  /**
   * The Service Account to be used by the Gitlab Runner.
   */
  readonly serviceAccount?: gcp.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount;

  /**
   * Firewall rules for the Gitlab Runner.
   */
  readonly networkTags?: string[];

  /**
   * If true, create preemptible VM instances intended to reduce cost.
   * Note, the MIG will recreate pre-empted instnaces.
   * See https://cloud.google.com/compute/docs/instances/preemptible
   *
   * @deafult - true
   */
  readonly preemptible?: boolean;

  /**
   *
   * If true, automatically restart instances on maintenance events.
   * See https://cloud.google.com/compute/docs/instances/live-migration#autorestart
   *
   * @default - false
   */
  readonly automaticRestart?: boolean;

  /**
   * gitlab runner run task concurrent at the same time.
   *
   * @default - 1
   */
  readonly concurrent?: number;

  /**
   * The source URL used to install the gitlab-runner onto the VM host os.
   * Passed to curl via cloud-config runcmd.
   *
   * @default - "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
   */
  readonly downloadGitlabRunnerBinaryUrl?: string;
}

export class GitlabRunnerAutoscaling extends Construct {
  constructor(scope: Construct, id :string, props: GitlabRunnerAutoscalingProps) {
    super(scope, id);
    const defaultProps = {
      desiredCapacity: 1,
      machineType: 'e2-medium',
      tags: ['gitlab', 'cdktf', 'runner'],
      gitlabUrl: 'https://gitlab.com/',
      gitlabRunnerImage: 'public.ecr.aws/gitlab/gitlab-runner:alpine',
      preemptible: true,
      automaticRestart: false,
      concurrent: 1,
      downloadGitlabRunnerBinaryUrl: 'https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64',
    };
    const runnerProps = { ...defaultProps, ...props };
    const network = runnerProps?.computeNetwork ?? new gcp.computeNetwork.ComputeNetwork(this, 'Network', {
      name: 'cdktf-gitlabrunner-network',
    });
    const serviceAccount = new gcp.serviceAccount.ServiceAccount(this, 'ServiceAccount', {
      accountId: 'gitlab-runner-sa',
      displayName: 'Gitlab Runner Servuce Account',
    });
    new gcp.computeFirewall.ComputeFirewall(this, 'GitlabRunnerFirewallRule', {
      priority: 900,
      name: 'allow-ingress-from-iap',
      sourceRanges: ['35.235.240.0/20'],
      network: network.id,
      allow: [{
        protocol: 'tcp',
        ports: ['22'],
      }],
      targetTags: ['runner-iap'],
      dependsOn: [network],
    });

    new gcp.projectIamBinding.ProjectIamBinding(this, 'ComputeIamBinding', {
      provider: runnerProps.provider,
      role: 'roles/compute.admin',
      members: [`serviceAccount:${serviceAccount.email}`],
      project: `${
        runnerProps.provider.project
      }`,
    });

    const networkTags = ['runner-iap'];
    if (runnerProps.networkTags) {
      networkTags.push(...runnerProps.networkTags);
    }
    const compute_template = new gcp.computeInstanceTemplate.ComputeInstanceTemplate(this, 'cdktf-gitlabrunner-instance-template', {
      machineType: runnerProps.machineType,
      disk: [
        {
          autoDelete: true,
          boot: true,
          diskSizeGb: props.defaultDiskSizeGb ?? 60,
          sourceImage: 'cos-cloud/cos-stable',
        },
      ],
      serviceAccount: runnerProps.serviceAccount ? runnerProps.serviceAccount : { email: serviceAccount.email, scopes: ['cloud-platform'] },
      canIpForward: true,
      description: 'cdktf-gitlabrunner-instance-template',
      name: 'cdktf-gitlabrunner-instance-template',
      metadata: {
        'user-data': this.createMetadataStartupScript(runnerProps).join('\n'),
        'shutdown-script': this.createShutdwonScript().join('\n'),
      },
      provider: runnerProps.provider,
      networkInterface: [
        {
          network: network.id,
          accessConfig: [{}],
        },
      ],
      tags: networkTags,
      lifecycle: {
        createBeforeDestroy: true,
      },
      scheduling:
        {
          preemptible: runnerProps.preemptible,
          automaticRestart: runnerProps.automaticRestart,
        },
    });

    new gcp.computeInstanceGroupManager.ComputeInstanceGroupManager(this, 'instance-group', {
      provider: runnerProps.provider,
      name: 'cdktf-gitlabrunner-instance-group',
      baseInstanceName: 'scaling-gitlab-runner',
      version: [{
        instanceTemplate: compute_template.id,
      }],
      lifecycle: {
        createBeforeDestroy: true,
      },
      targetSize: runnerProps.desiredCapacity,
      dependsOn: [compute_template, serviceAccount],
    });

    new cdktf.TerraformOutput(this, 'ComputeNetworkName', {
      value: network.name,
    });


  }
  private dockerVolumesList(dockerVolume: DockerVolumes[] | undefined): string {
    let tempString: string = '--docker-volumes "/var/run/docker.sock:/var/run/docker.sock"';
    if (dockerVolume) {
      let tempList: string[] = [];
      dockerVolume.forEach(e => {
        tempList.push(`"${e.hostPath}:${e.containerPath}"`);
      });
      tempList.forEach(e => {
        tempString = `${tempString} --docker-volumes ${e}`;
      });
    }
    return tempString;
  }
  /**
   * @param props
   * @returns Array.
   */
  public createMetadataStartupScript(props: GitlabRunnerAutoscalingProps): string[] {
    return [
      `Content-Type: multipart/mixed; boundary="MIMEBOUNDARY"
MIME-Version: 1.0

--MIMEBOUNDARY
Content-Disposition: attachment; filename="init.cfg"
Content-Transfer-Encoding: 7bit
Content-Type: text/cloud-config
Mime-Version: 1.0

`, `# cloud-config
users:
  - name: gitlab-runner
    shell: /bin/bash
    uid: 2000
    groups:
      - docker

write_files:
  - path: /etc/gitlab-runner/config.toml
    owner: root:root
    permissions: '0644'
    content: |
      # Prometheus metrics at /metrics, also used for health checks.
      listen_address = ":9252"
      concurrent = ${props.concurrent}
  - path: /var/lib/cloud/bin/firewall
    permissions: 0755
    owner: root
    content: |
      #! /bin/bash
      iptables -w -A INPUT -p tcp --dport 9252 -j ACCEPT
  - path: /etc/systemd/system/gitlab-runner-register.service
    permissions: 0644
    owner: root
    content: |
      [Unit]
      Description=GitLab Runner Registration/Unregistration
      ConditionFileIsExecutable=/var/lib/google/bin/gitlab-runner
      After=syslog.target network-online.target
      [Service]
      Type=oneshot
      RemainAfterExit=yes
      ExecStart=/var/lib/google/bin/gitlab-runner register --non-interactive --url "${props.gitlabUrl}" --executor "docker" --registration-token ${props.gitlabToken} --docker-image alpine:latest --tag-list "${props.tags?.join(',')}" --locked="false" --access-level="not_protected" ${this.dockerVolumesList(props?.dockerVolumes)} --description "A Runner on GCP GCE (${props.machineType})" --docker-privileged
      ExecStop=/var/lib/google/bin/gitlab-runner "unregister" "--config" "/etc/gitlab-runner/config.toml" "--all-runners"
      [Install]
      WantedBy=multi-user.target
  - path: /etc/systemd/system/gitlab-runner.service
    permissions: 0644
    owner: root
    content: |
      [Unit]
      Description=GitLab Runner
      ConditionFileIsExecutable=/var/lib/google/bin/gitlab-runner
      After=gitlab-runner-register.service syslog.target network-online.target
      Requires=gitlab-runner-register.service
      [Service]
      StartLimitInterval=5
      StartLimitBurst=10
      ExecStart=/var/lib/google/bin/gitlab-runner "run" "--working-directory" "/home/gitlab-runner" "--config" "/etc/gitlab-runner/config.toml" "--service" "gitlab-runner" "--syslog" "--user" "gitlab-runner"
      Restart=always
      RestartSec=120
      [Install]
      WantedBy=multi-user.target
  - path: /etc/systemd/system/firewall.service
    permissions: 0644
    owner: root
    content: |
      [Unit]
      Description=Host firewall configuration
      ConditionFileIsExecutable=/var/lib/cloud/bin/firewall
      After=network-online.target
      [Service]
      ExecStart=/var/lib/cloud/bin/firewall
      Type=oneshot
      [Install]
      WantedBy=multi-user.target

runcmd:
  - mkdir /var/lib/google/tmp
  - mkdir /var/lib/google/bin
  - curl -L --output /var/lib/google/tmp/gitlab-runner ${props.downloadGitlabRunnerBinaryUrl}
  - install -o 0 -g 0 -m 0755 /var/lib/google/tmp/gitlab-runner /var/lib/google/bin/gitlab-runner
  - systemctl daemon-reload
  - systemctl start firewall.service
  - systemctl start gitlab-runner-register.service
  - systemctl start gitlab-runner.service
  - chmod +x /var/run/docker.sock

--MIMEBOUNDARY--
`,
    ];
  }
  private createShutdwonScript(): string[] {
    return ['#!/bin/bash', '/var/lib/google/bin/gitlab-runner unregister --all-runners'];
  }
}