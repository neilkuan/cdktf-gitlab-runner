# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GitlabRunnerAutoscaling <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling"></a>

#### Initializer <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer"></a>

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

- *Type:* `string`

Job Runtime Container Path Host Path.

---

##### `hostPath`<sup>Required</sup> <a name="cdktf-gitlab-runner.DockerVolumes.property.hostPath"></a>

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

- *Type:* [`constructs.INodeFactory`](#constructs.INodeFactory)
- *Default:* the default `Node` is associated

A factory for attaching `Node`s to the construct.

---

##### `gitlabToken`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken"></a>

- *Type:* `string`

Gitlab token.

---

##### `provider`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.provider"></a>

- *Type:* [`@cdktf/provider-google.GoogleProvider`](#@cdktf/provider-google.GoogleProvider)

Google Cloud Provider.

---

##### `computeNetwork`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.computeNetwork"></a>

- *Type:* [`@cdktf/provider-google.DataGoogleComputeNetwork`](#@cdktf/provider-google.DataGoogleComputeNetwork)
- *Default:* A new VPC will be created.

VPC for the Gitlab Runner .

---

##### `defaultDiskSizeGb`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.defaultDiskSizeGb"></a>

- *Type:* `number`
- *Default:* 60 GB.

Gitlab Runner instance Disk size.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.desiredCapacity"></a>

- *Type:* `number`
- *Default:* minCapacity, and leave unchanged during deployment

Desired capacity limit for autoscaling group.

---

##### `dockerVolumes`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.dockerVolumes"></a>

- *Type:* [`cdktf-gitlab-runner.DockerVolumes`](#cdktf-gitlab-runner.DockerVolumes)[]
- *Default:* already mount "/var/run/docker.sock:/var/run/docker.sock"

add another Gitlab Container Runner Docker Volumes Path at job runner runtime.

more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section

---

##### `ebsSize`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.ebsSize"></a>

- *Type:* `number`
- *Default:* ebsSize=60

Gitlab Runner instance EBS size .

---

##### `gitlabRunnerImage`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabRunnerImage"></a>

- *Type:* `string`
- *Default:* public.ecr.aws/gitlab/gitlab-runner:alpine

Image URL of Gitlab Runner.

---

##### `gitlabUrl`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl"></a>

- *Type:* `string`
- *Default:* https://gitlab.com/ , The trailing slash is mandatory.

Gitlab Runner register url .

---

##### `machineType`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.machineType"></a>

- *Type:* `string`
- *Default:* 

Runner default EC2 instance type.

---

##### `maxCapacity`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.maxCapacity"></a>

- *Type:* `number`
- *Default:* desiredCapacity

Maximum capacity limit for autoscaling group.

---

##### `minCapacity`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.minCapacity"></a>

- *Type:* `number`
- *Default:* minCapacity: 1

Minimum capacity limit for autoscaling group.

---

##### `networkTags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.networkTags"></a>

- *Type:* `string`[]

Firewall rules for the Gitlab Runner.

---

##### `serviceAccount`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.serviceAccount"></a>

- *Type:* [`@cdktf/provider-google.ComputeInstanceTemplateServiceAccount`](#@cdktf/provider-google.ComputeInstanceTemplateServiceAccount)

---

##### `tags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.tags"></a>

- *Type:* `string`[]
- *Default:* ['runner', 'gitlab', 'awscdk']

tags for the runner.

---



