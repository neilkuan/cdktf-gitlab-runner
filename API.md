# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabRunnerAutoscaling <a name="GitlabRunnerAutoscaling" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling"></a>

#### Initializers <a name="Initializers" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer"></a>

```typescript
import { GitlabRunnerAutoscaling } from 'cdktf-gitlab-runner'

new GitlabRunnerAutoscaling(scope: Construct, id: string, props: GitlabRunnerAutoscalingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps">GitlabRunnerAutoscalingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps">GitlabRunnerAutoscalingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.createMetadataStartupScript">createMetadataStartupScript</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createMetadataStartupScript` <a name="createMetadataStartupScript" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.createMetadataStartupScript"></a>

```typescript
public createMetadataStartupScript(props: GitlabRunnerAutoscalingProps): string[]
```

###### `props`<sup>Required</sup> <a name="props" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.createMetadataStartupScript.parameter.props"></a>

- *Type:* <a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps">GitlabRunnerAutoscalingProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.isConstruct"></a>

```typescript
import { GitlabRunnerAutoscaling } from 'cdktf-gitlab-runner'

GitlabRunnerAutoscaling.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscaling.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-gitlab-runner.GitlabRunnerAutoscaling.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### DockerVolumes <a name="DockerVolumes" id="cdktf-gitlab-runner.DockerVolumes"></a>

Docker Volumes interface.

#### Initializer <a name="Initializer" id="cdktf-gitlab-runner.DockerVolumes.Initializer"></a>

```typescript
import { DockerVolumes } from 'cdktf-gitlab-runner'

const dockerVolumes: DockerVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gitlab-runner.DockerVolumes.property.containerPath">containerPath</a></code> | <code>string</code> | Job Runtime Container Path Host Path. |
| <code><a href="#cdktf-gitlab-runner.DockerVolumes.property.hostPath">hostPath</a></code> | <code>string</code> | EC2 Runner Host Path. |

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="cdktf-gitlab-runner.DockerVolumes.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

Job Runtime Container Path Host Path.

---

*Example*

```typescript
- /tmp/cahce
more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section
```


##### `hostPath`<sup>Required</sup> <a name="hostPath" id="cdktf-gitlab-runner.DockerVolumes.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

EC2 Runner Host Path.

---

*Example*

```typescript
- /tmp/cahce
more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section
```


### GitlabRunnerAutoscalingProps <a name="GitlabRunnerAutoscalingProps" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps"></a>

#### Initializer <a name="Initializer" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.Initializer"></a>

```typescript
import { GitlabRunnerAutoscalingProps } from 'cdktf-gitlab-runner'

const gitlabRunnerAutoscalingProps: GitlabRunnerAutoscalingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken">gitlabToken</a></code> | <code>string</code> | Gitlab token. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.provider">provider</a></code> | <code>@cdktf/provider-google.provider.GoogleProvider</code> | Google Cloud Provider. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.automaticRestart">automaticRestart</a></code> | <code>boolean</code> | If true, automatically restart instances on maintenance events. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.computeNetwork">computeNetwork</a></code> | <code>@cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork</code> | VPC for the Gitlab Runner . |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.concurrent">concurrent</a></code> | <code>number</code> | gitlab runner run task concurrent at the same time. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.defaultDiskSizeGb">defaultDiskSizeGb</a></code> | <code>number</code> | Gitlab Runner instance Disk size. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Desired capacity limit for autoscaling group. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.dockerVolumes">dockerVolumes</a></code> | <code><a href="#cdktf-gitlab-runner.DockerVolumes">DockerVolumes</a>[]</code> | add another Gitlab Container Runner Docker Volumes Path at job runner runtime. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.downloadGitlabRunnerBinaryUrl">downloadGitlabRunnerBinaryUrl</a></code> | <code>string</code> | The source URL used to install the gitlab-runner onto the VM host os. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl">gitlabUrl</a></code> | <code>string</code> | Gitlab Runner register url . |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.machineType">machineType</a></code> | <code>string</code> | Runner default EC2 instance type. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.networkTags">networkTags</a></code> | <code>string[]</code> | Firewall rules for the Gitlab Runner. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.preemptible">preemptible</a></code> | <code>boolean</code> | If true, create preemptible VM instances intended to reduce cost. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.serviceAccount">serviceAccount</a></code> | <code>@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount</code> | The Service Account to be used by the Gitlab Runner. |
| <code><a href="#cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.tags">tags</a></code> | <code>string[]</code> | tags for the runner. |

---

##### `gitlabToken`<sup>Required</sup> <a name="gitlabToken" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken"></a>

```typescript
public readonly gitlabToken: string;
```

- *Type:* string

Gitlab token.

---

*Example*

```typescript
new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN' });
```


##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.provider"></a>

```typescript
public readonly provider: GoogleProvider;
```

- *Type:* @cdktf/provider-google.provider.GoogleProvider

Google Cloud Provider.

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean;
```

- *Type:* boolean
- *Default:* false

If true, automatically restart instances on maintenance events.

See https://cloud.google.com/compute/docs/instances/live-migration#autorestart

---

##### `computeNetwork`<sup>Optional</sup> <a name="computeNetwork" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.computeNetwork"></a>

```typescript
public readonly computeNetwork: DataGoogleComputeNetwork;
```

- *Type:* @cdktf/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork
- *Default:* A new VPC will be created.

VPC for the Gitlab Runner .

---

*Example*

```typescript
const computeNetwork = new gcp.ComputeNetwork(this, 'Network', {
  name: 'cdktf-gitlabrunner-network',
});

new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', computeNetwork: computeNetwork });
```


##### `concurrent`<sup>Optional</sup> <a name="concurrent" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.concurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* number
- *Default:* 1

gitlab runner run task concurrent at the same time.

---

##### `defaultDiskSizeGb`<sup>Optional</sup> <a name="defaultDiskSizeGb" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.defaultDiskSizeGb"></a>

```typescript
public readonly defaultDiskSizeGb: number;
```

- *Type:* number
- *Default:* 60 GB.

Gitlab Runner instance Disk size.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number
- *Default:* minCapacity, and leave unchanged during deployment

Desired capacity limit for autoscaling group.

---

*Example*

```typescript
new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', desiredCapacity: 2 });
```


##### `dockerVolumes`<sup>Optional</sup> <a name="dockerVolumes" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.dockerVolumes"></a>

```typescript
public readonly dockerVolumes: DockerVolumes[];
```

- *Type:* <a href="#cdktf-gitlab-runner.DockerVolumes">DockerVolumes</a>[]
- *Default:* already mount "/var/run/docker.sock:/var/run/docker.sock"

add another Gitlab Container Runner Docker Volumes Path at job runner runtime.

more detail see https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section

---

*Example*

```typescript
dockerVolumes: [
  {
    hostPath: '/tmp/cache',
    containerPath: '/tmp/cache',
  },
],
```


##### `downloadGitlabRunnerBinaryUrl`<sup>Optional</sup> <a name="downloadGitlabRunnerBinaryUrl" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.downloadGitlabRunnerBinaryUrl"></a>

```typescript
public readonly downloadGitlabRunnerBinaryUrl: string;
```

- *Type:* string
- *Default:* "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"

The source URL used to install the gitlab-runner onto the VM host os.

Passed to curl via cloud-config runcmd.

---

##### `gitlabUrl`<sup>Optional</sup> <a name="gitlabUrl" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl"></a>

```typescript
public readonly gitlabUrl: string;
```

- *Type:* string
- *Default:* https://gitlab.com/ , The trailing slash is mandatory.

Gitlab Runner register url .

---

*Example*

```typescript
const runner = new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN',gitlabUrl: 'https://gitlab.com/'});
```


##### `machineType`<sup>Optional</sup> <a name="machineType" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string
- *Default:* 

Runner default EC2 instance type.

---

*Example*

```typescript
new GitlabRunnerAutoscaling(stack, 'runner', { gitlabToken: 'GITLAB_TOKEN', instanceType: 't3.small' });
```


##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

Firewall rules for the Gitlab Runner.

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.preemptible"></a>

```typescript
public readonly preemptible: boolean;
```

- *Type:* boolean

If true, create preemptible VM instances intended to reduce cost.

Note, the MIG will recreate pre-empted instnaces.
See https://cloud.google.com/compute/docs/instances/preemptible

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ComputeInstanceTemplateServiceAccount;
```

- *Type:* @cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount

The Service Account to be used by the Gitlab Runner.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktf-gitlab-runner.GitlabRunnerAutoscalingProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]
- *Default:* ['runner', 'gitlab', 'awscdk']

tags for the runner.

---



