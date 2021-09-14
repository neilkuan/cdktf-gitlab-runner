# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GitlabRunnerAutoscaling <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling"></a>

#### Initializers <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer"></a>

```typescript
import { GitlabRunnerAutoscaling } from 'cdktf-gitlab-runner'

new GitlabRunnerAutoscaling(scope: Construct, id: string, props: GitlabRunnerAutoscalingProps)
```

##### `scope`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.props"></a>

- *Type:* [`cdktf-gitlab-runner.GitlabRunnerAutoscalingProps`](#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps)

---

#### Methods <a name="Methods"></a>

##### `createMetadataStartupScript` <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.createMetadataStartupScript"></a>

```typescript
public createMetadataStartupScript(props: GitlabRunnerAutoscalingProps)
```

###### `props`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.props"></a>

- *Type:* [`cdktf-gitlab-runner.GitlabRunnerAutoscalingProps`](#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps)

---




## Structs <a name="Structs"></a>

### DockerVolumes <a name="cdktf-gitlab-runner.DockerVolumes"></a>

Docker Volumes interface.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DockerVolumes } from 'cdktf-gitlab-runner'

const dockerVolumes: DockerVolumes = { ... }
```

##### `containerPath`<sup>Required</sup> <a name="cdktf-gitlab-runner.DockerVolumes.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* `string`

Job Runtime Container Path Host Path.

---

##### `hostPath`<sup>Required</sup> <a name="cdktf-gitlab-runner.DockerVolumes.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* `string`

EC2 Runner Host Path.

---

### GitlabRunnerAutoscalingProps <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GitlabRunnerAutoscalingProps } from 'cdktf-gitlab-runner'

const gitlabRunnerAutoscalingProps: GitlabRunnerAutoscalingProps = { ... }
```

##### `nodeFactory`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.nodeFactory"></a>

```typescript
public readonly nodeFactory: INodeFactory;
```

- *Type:* [`constructs.INodeFactory`](#constructs.INodeFactory)
- *Default:* the default `Node` is associated

A factory for attaching `Node`s to the construct.

---

##### `gitlabToken`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken"></a>

```typescript
public readonly gitlabToken: string;
```

- *Type:* `string`

Gitlab token.

---

##### `provider`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.provider"></a>

```typescript
public readonly provider: GoogleProvider;
```

- *Type:* [`@cdktf/provider-google.GoogleProvider`](#@cdktf/provider-google.GoogleProvider)

Google Cloud Provider.

---

##### `automaticRestart`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean;
```

- *Type:* `boolean`
- *Default:* false

If true, automatically restart instances on maintenance events.

See https://cloud.google.com/compute/docs/instances/live-migration#autorestart

---

##### `computeNetwork`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.computeNetwork"></a>

```typescript
public readonly computeNetwork: DataGoogleComputeNetwork;
```

- *Type:* [`@cdktf/provider-google.DataGoogleComputeNetwork`](#@cdktf/provider-google.DataGoogleComputeNetwork)
- *Default:* A new VPC will be created.

VPC for the Gitlab Runner .

---

##### `concurrent`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.concurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* `number`
- *Default:* 1

gitlab runner run task concurrent at the same time.

---

##### `defaultDiskSizeGb`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.defaultDiskSizeGb"></a>

```typescript
public readonly defaultDiskSizeGb: number;
```

- *Type:* `number`
- *Default:* 60 GB.

Gitlab Runner instance Disk size.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* `number`
- *Default:* minCapacity, and leave unchanged during deployment

Desired capacity limit for autoscaling group.

---

##### `dockerVolumes`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.dockerVolumes"></a>

```typescript
public readonly dockerVolumes: DockerVolumes[];
```

- *Type:* [`cdktf-gitlab-runner.DockerVolumes`](#cdktf-gitlab-runner.DockerVolumes)[]
- *Default:* already mount "/var/run/docker.sock:/var/run/docker.sock"

add another Gitlab Container Runner Docker Volumes Path at job runner runtime.

more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section

---

##### `downloadGitlabRunnerBinaryUrl`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.downloadGitlabRunnerBinaryUrl"></a>

```typescript
public readonly downloadGitlabRunnerBinaryUrl: string;
```

- *Type:* `string`
- *Default:* "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"

The source URL used to install the gitlab-runner onto the VM host os.

Passed to curl via cloud-config runcmd.

---

##### `gitlabUrl`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl"></a>

```typescript
public readonly gitlabUrl: string;
```

- *Type:* `string`
- *Default:* https://gitlab.com/ , The trailing slash is mandatory.

Gitlab Runner register url .

---

##### `machineType`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* `string`
- *Default:* 

Runner default EC2 instance type.

---

##### `networkTags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* `string`[]

Firewall rules for the Gitlab Runner.

---

##### `preemptible`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.preemptible"></a>

```typescript
public readonly preemptible: boolean;
```

- *Type:* `boolean`

If true, create preemptible VM instances intended to reduce cost.

Note, the MIG will recreate pre-empted instnaces.
See https://cloud.google.com/compute/docs/instances/preemptible

---

##### `serviceAccount`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ComputeInstanceTemplateServiceAccount;
```

- *Type:* [`@cdktf/provider-google.ComputeInstanceTemplateServiceAccount`](#@cdktf/provider-google.ComputeInstanceTemplateServiceAccount)

The Service Account to be used by the Gitlab Runner.

---

##### `tags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]
- *Default:* ['runner', 'gitlab', 'awscdk']

tags for the runner.

---



