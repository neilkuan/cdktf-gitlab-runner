# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### GitlabRunnerAutoscaling <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling" id="cdktfgitlabrunnergitlabrunnerautoscaling"></a>

#### Initializers <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer" id="cdktfgitlabrunnergitlabrunnerautoscalinginitializer"></a>

```typescript
import { GitlabRunnerAutoscaling } from 'cdktf-gitlab-runner'

new GitlabRunnerAutoscaling(scope: Construct, id: string, props: GitlabRunnerAutoscalingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfgitlabrunnergitlabrunnerautoscalingparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdktfgitlabrunnergitlabrunnerautoscalingparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdktfgitlabrunnergitlabrunnerautoscalingparameterprops)<span title="Required">*</span> | [`cdktf-gitlab-runner.GitlabRunnerAutoscalingProps`](#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.scope" id="cdktfgitlabrunnergitlabrunnerautoscalingparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.id" id="cdktfgitlabrunnergitlabrunnerautoscalingparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.props" id="cdktfgitlabrunnergitlabrunnerautoscalingparameterprops"></a>

- *Type:* [`cdktf-gitlab-runner.GitlabRunnerAutoscalingProps`](#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`createMetadataStartupScript`](#cdktfgitlabrunnergitlabrunnerautoscalingcreatemetadatastartupscript) | *No description.* |

---

##### `createMetadataStartupScript` <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.createMetadataStartupScript" id="cdktfgitlabrunnergitlabrunnerautoscalingcreatemetadatastartupscript"></a>

```typescript
public createMetadataStartupScript(props: GitlabRunnerAutoscalingProps)
```

###### `props`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscaling.parameter.props" id="cdktfgitlabrunnergitlabrunnerautoscalingparameterprops"></a>

- *Type:* [`cdktf-gitlab-runner.GitlabRunnerAutoscalingProps`](#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps)

---




## Structs <a name="Structs" id="structs"></a>

### DockerVolumes <a name="cdktf-gitlab-runner.DockerVolumes" id="cdktfgitlabrunnerdockervolumes"></a>

Docker Volumes interface.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DockerVolumes } from 'cdktf-gitlab-runner'

const dockerVolumes: DockerVolumes = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`containerPath`](#cdktfgitlabrunnerdockervolumespropertycontainerpath)<span title="Required">*</span> | `string` | Job Runtime Container Path Host Path. |
| [`hostPath`](#cdktfgitlabrunnerdockervolumespropertyhostpath)<span title="Required">*</span> | `string` | EC2 Runner Host Path. |

---

##### `containerPath`<sup>Required</sup> <a name="cdktf-gitlab-runner.DockerVolumes.property.containerPath" id="cdktfgitlabrunnerdockervolumespropertycontainerpath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* `string`

Job Runtime Container Path Host Path.

---

##### `hostPath`<sup>Required</sup> <a name="cdktf-gitlab-runner.DockerVolumes.property.hostPath" id="cdktfgitlabrunnerdockervolumespropertyhostpath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* `string`

EC2 Runner Host Path.

---

### GitlabRunnerAutoscalingProps <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps" id="cdktfgitlabrunnergitlabrunnerautoscalingprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingProps } from 'cdktf-gitlab-runner'

const gitlabRunnerAutoscalingProps: GitlabRunnerAutoscalingProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`gitlabToken`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertygitlabtoken)<span title="Required">*</span> | `string` | Gitlab token. |
| [`provider`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyprovider)<span title="Required">*</span> | [`@cdktf/provider-google.provider.GoogleProvider`](#@cdktf/provider-google.provider.GoogleProvider) | Google Cloud Provider. |
| [`automaticRestart`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyautomaticrestart) | `boolean` | If true, automatically restart instances on maintenance events. |
| [`computeNetwork`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertycomputenetwork) | [`@cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork`](#@cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork) | VPC for the Gitlab Runner . |
| [`concurrent`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyconcurrent) | `number` | gitlab runner run task concurrent at the same time. |
| [`defaultDiskSizeGb`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydefaultdisksizegb) | `number` | Gitlab Runner instance Disk size. |
| [`desiredCapacity`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydesiredcapacity) | `number` | Desired capacity limit for autoscaling group. |
| [`dockerVolumes`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydockervolumes) | [`cdktf-gitlab-runner.DockerVolumes`](#cdktf-gitlab-runner.DockerVolumes)[] | add another Gitlab Container Runner Docker Volumes Path at job runner runtime. |
| [`downloadGitlabRunnerBinaryUrl`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydownloadgitlabrunnerbinaryurl) | `string` | The source URL used to install the gitlab-runner onto the VM host os. |
| [`gitlabUrl`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertygitlaburl) | `string` | Gitlab Runner register url . |
| [`machineType`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertymachinetype) | `string` | Runner default EC2 instance type. |
| [`networkTags`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertynetworktags) | `string`[] | Firewall rules for the Gitlab Runner. |
| [`preemptible`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertypreemptible) | `boolean` | If true, create preemptible VM instances intended to reduce cost. |
| [`serviceAccount`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyserviceaccount) | [`@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount`](#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount) | The Service Account to be used by the Gitlab Runner. |
| [`tags`](#cdktfgitlabrunnergitlabrunnerautoscalingpropspropertytags) | `string`[] | tags for the runner. |

---

##### `gitlabToken`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertygitlabtoken"></a>

```typescript
public readonly gitlabToken: string;
```

- *Type:* `string`

Gitlab token.

---

##### `provider`<sup>Required</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.provider" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyprovider"></a>

```typescript
public readonly provider: GoogleProvider;
```

- *Type:* [`@cdktf/provider-google.provider.GoogleProvider`](#@cdktf/provider-google.provider.GoogleProvider)

Google Cloud Provider.

---

##### `automaticRestart`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.automaticRestart" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyautomaticrestart"></a>

```typescript
public readonly automaticRestart: boolean;
```

- *Type:* `boolean`
- *Default:* false

If true, automatically restart instances on maintenance events.

See https://cloud.google.com/compute/docs/instances/live-migration#autorestart

---

##### `computeNetwork`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.computeNetwork" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertycomputenetwork"></a>

```typescript
public readonly computeNetwork: DataGoogleComputeNetwork;
```

- *Type:* [`@cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork`](#@cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork)
- *Default:* A new VPC will be created.

VPC for the Gitlab Runner .

---

##### `concurrent`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.concurrent" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyconcurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* `number`
- *Default:* 1

gitlab runner run task concurrent at the same time.

---

##### `defaultDiskSizeGb`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.defaultDiskSizeGb" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydefaultdisksizegb"></a>

```typescript
public readonly defaultDiskSizeGb: number;
```

- *Type:* `number`
- *Default:* 60 GB.

Gitlab Runner instance Disk size.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.desiredCapacity" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydesiredcapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* `number`
- *Default:* minCapacity, and leave unchanged during deployment

Desired capacity limit for autoscaling group.

---

##### `dockerVolumes`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.dockerVolumes" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydockervolumes"></a>

```typescript
public readonly dockerVolumes: DockerVolumes[];
```

- *Type:* [`cdktf-gitlab-runner.DockerVolumes`](#cdktf-gitlab-runner.DockerVolumes)[]
- *Default:* already mount "/var/run/docker.sock:/var/run/docker.sock"

add another Gitlab Container Runner Docker Volumes Path at job runner runtime.

more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section

---

##### `downloadGitlabRunnerBinaryUrl`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.downloadGitlabRunnerBinaryUrl" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertydownloadgitlabrunnerbinaryurl"></a>

```typescript
public readonly downloadGitlabRunnerBinaryUrl: string;
```

- *Type:* `string`
- *Default:* "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"

The source URL used to install the gitlab-runner onto the VM host os.

Passed to curl via cloud-config runcmd.

---

##### `gitlabUrl`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertygitlaburl"></a>

```typescript
public readonly gitlabUrl: string;
```

- *Type:* `string`
- *Default:* https://gitlab.com/ , The trailing slash is mandatory.

Gitlab Runner register url .

---

##### `machineType`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.machineType" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertymachinetype"></a>

```typescript
public readonly machineType: string;
```

- *Type:* `string`
- *Default:* 

Runner default EC2 instance type.

---

##### `networkTags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.networkTags" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertynetworktags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* `string`[]

Firewall rules for the Gitlab Runner.

---

##### `preemptible`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.preemptible" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertypreemptible"></a>

```typescript
public readonly preemptible: boolean;
```

- *Type:* `boolean`

If true, create preemptible VM instances intended to reduce cost.

Note, the MIG will recreate pre-empted instnaces. See https://cloud.google.com/compute/docs/instances/preemptible

---

##### `serviceAccount`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.serviceAccount" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertyserviceaccount"></a>

```typescript
public readonly serviceAccount: ComputeInstanceTemplateServiceAccount;
```

- *Type:* [`@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount`](#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount)

The Service Account to be used by the Gitlab Runner.

---

##### `tags`<sup>Optional</sup> <a name="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.tags" id="cdktfgitlabrunnergitlabrunnerautoscalingpropspropertytags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]
- *Default:* ['runner', 'gitlab', 'awscdk']

tags for the runner.

---



