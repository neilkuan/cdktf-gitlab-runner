import * as gcp from '@cdktf/provider-google';
import * as cdktf from 'cdktf';
import { Construct, ConstructOptions } from 'constructs';
import { DockerVolumes } from './gitlab-runner-interfaces';

export interface GitlabRunnerAutoscalingProps extends ConstructOptions{
  /**
   * Google Cloud Provider.
  */
  readonly provider: gcp.GoogleProvider;
  /**
   * Gitlab token.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN' });
   */
  readonly gitlabToken: string;

  /**
   * Image URL of Gitlab Runner.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', gitlabRunnerImage: 'gitlab/gitlab-runner:alpine' });
   *
   * @default public.ecr.aws/gitlab/gitlab-runner:alpine
   *
   */
  readonly gitlabRunnerImage?: string;

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
   * const newVpc = new Vpc(stack, 'NewVPC', {
   *   cidr: '10.1.0.0/16',
   *   maxAzs: 2,
   *   subnetConfiguration: [{
   *     cidrMask: 26,
   *     name: 'RunnerVPC',
   *     subnetType: SubnetType.PUBLIC,
   *   }],
   *   natGateways: 0,
   * });
   *
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', vpc: newVpc });
   *
   * @default - A new VPC will be created.
   *
   */
  readonly computeNetwork?: gcp.DataGoogleComputeNetwork;

  /**
   * Minimum capacity limit for autoscaling group.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', minCapacity: 2 });
   *
   * @default - minCapacity: 1
   *
   */
  readonly minCapacity?: number;

  /**
   * Maximum capacity limit for autoscaling group.
   *
   * @example
   * new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', maxCapacity: 4 });
   *
   * @default - desiredCapacity
   *
   */
  readonly maxCapacity?: number;

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
   * Gitlab Runner instance EBS size .
   *
   * @example
   * const runner = new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', ebsSize: 100});
   *
   * @default - ebsSize=60
   *
   */
  readonly ebsSize?: number;

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
   *
   */
  readonly serviceAccount?: gcp.ComputeInstanceTemplateServiceAccount;

  /**
   * Firewall rules for the Gitlab Runner.
   */
  readonly networkTags?: string[];
}

export class GitlabRunnerAutoscaling extends Construct {
  constructor(scope: Construct, id :string, props: GitlabRunnerAutoscalingProps) {
    super(scope, id, props);
    const defaultProps = {
      desiredCapacity: 1,
      machineType: 'e2-medium',
      tags: ['gitlab', 'cdktf', 'runner'],
      gitlabUrl: 'https://gitlab.com/',
      gitlabRunnerImage: 'public.ecr.aws/gitlab/gitlab-runner:alpine',
    };
    const runnerProps = { ...defaultProps, ...props };
    const network = runnerProps?.computeNetwork ?? new gcp.ComputeNetwork(this, 'Network', {
      name: 'cdktf-gitlabrunner-network',
    });
    const serviceAccount = new gcp.ServiceAccount(this, 'ServiceAccount', {
      accountId: 'gitlab-runner-sa',
      displayName: 'Gitlab Runner Servuce Account',
    });
    new gcp.ComputeFirewall(this, 'GitlabRunnerFirewallRule', {
      name: 'allow-ingress-from-iap',
      sourceRanges: ['35.235.240.0/20'],
      network: network.id,
      allow: [{
        protocol: 'tcp',
        ports: ['22'],
      },
      {
        protocol: 'tcp',
        ports: ['3389'],
      }],
      dependsOn: [network],
    });

    new gcp.ProjectIamBinding(this, 'ComputeIamBinding', {
      provider: runnerProps.provider,
      role: 'roles/compute.admin',
      members: [`serviceAccount:${serviceAccount.email}`],
    });

    new gcp.ProjectIamBinding(this, 'IapIamBinding', {
      provider: props.provider,
      role: 'roles/iap.admin',
      members: [`serviceAccount:${serviceAccount.email}`],
    });
    const networkTags = ['default-allow-ssh', 'allow-ingress-from-iap'];
    if (runnerProps.networkTags) {
      networkTags.push(...runnerProps.networkTags);
    }
    const compute_template = new gcp.ComputeInstanceTemplate(this, 'cdktf-gitlabrunner-instance-template', {
      machineType: runnerProps.machineType,
      disk: [
        {
          autoDelete: true,
          boot: true,
          diskSizeGb: props.defaultDiskSizeGb ?? 60,
          sourceImage: 'debian-cloud/debian-10',
        },
      ],
      serviceAccount: runnerProps.serviceAccount ? [runnerProps.serviceAccount] : [{ email: serviceAccount.email, scopes: ['cloud-platform'] }],
      canIpForward: true,
      description: 'cdktf-gitlabrunner-instance-template',
      metadataStartupScript: this.createMetadataStartupScript(runnerProps).join('\n'),
      name: 'cdktf-gitlabrunner-instance-template',
      metadata: {
        'shutdown-script': this.createShutdwonScript(),
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
    });

    new gcp.ComputeInstanceGroupManager(this, 'instance-group', {
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
      '#! /bin/bash',
      'apt-get update -y',
      'sleep 15 ',
      'apt-get remove docker docker-engine docker.io containerd runc -y',
      'sudo apt-get update -y',
      'sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y',
      'curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg',
      'echo \"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null',
      'sudo apt-get update -y',
      'sudo apt-get install docker-ce docker-ce-cli containerd.io -y',
      'systemctl start docker && chmod 777 /var/run/docker.sock',
      'systemctl restart docker && systemctl enable docker',
      `docker run -d -v /.gitlab-runner:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock \
      --name gitlab-runner-register ${props.gitlabRunnerImage} register --non-interactive --url ${props.gitlabUrl} --registration-token ${props.gitlabToken} \
      --docker-pull-policy if-not-present ${this.dockerVolumesList(props?.dockerVolumes)} \
      --executor docker --docker-image "alpine:latest" --description "A Runner on GCP GCE (${props.machineType})" \
      --tag-list "${props.tags?.join(',')}" --docker-privileged`,
      `sleep 2 && docker run --restart always -d -v /.gitlab-runner:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock --name gitlab-runner ${props.gitlabRunnerImage}`,
    ];
  }
  private createShutdwonScript(): string {
    return '#! /bin/bash \ndocker exec gitlab-runner gitlab-runner unregister --all-runners';
  }
}