[![NPM version](https://badge.fury.io/js/cdktf-gitlab-runner.svg)](https://badge.fury.io/js/cdktf-gitlab-runner)
[![PyPI version](https://badge.fury.io/py/cdktf-gitlab-runner.svg)](https://badge.fury.io/py/cdktf-gitlab-runner)
![Release](https://github.com/neilkuan/cdktf-gitlab-runner/workflows/release/badge.svg)

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
![npm](https://img.shields.io/npm/dt/cdktf-gitlab-runner?label=npm&color=orange)
![PyPI](https://img.shields.io/pypi/dm/cdktf-gitlab-runner?label=pypi&color=blue)


# Welcome to `cdktf-gitlab-runner`
Use CDK fot Terraform to create gitlab runner, and use [gitlab runner](https://gitlab.com/gitlab-org/gitlab-runner) to help you execute your Gitlab Pipeline Job.
> GitLab Runner is the open source project that is used to run your CI/CD jobs and send the results back to GitLab. [(source repo)](https://gitlab.com/gitlab-org/gitlab-runner)

### Install `cdktf-gitlab-runner`
```bash
yarn add cdktf-gitlab-runner
or
nom i cdktf-gitlab-runner
```

### Example
```ts
import * as gcp from '@cdktf/provider-google';
import * as cdktf from 'cdktf';
import { Construct } from 'constructs';
import { GitlabRunnerAutoscaling } from './index';


export class IntegDefaultStack extends cdktf.TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const local = 'asia-east1';
    const projectId = `${process.env.PROJECT_ID}`;
    const provider = new gcp.GoogleProvider(this, 'GoogleAuth', {
      region: local,
      zone: local+'-c',
      project: projectId,
    });
    new GitlabRunnerAutoscaling(this, 'GitlabRunnerAutoscaling', {
      gitlabToken: `${process.env.GITLAB_TOKEN}`,
      provider,
    });
  }
}


const app = new cdktf.App();
new IntegDefaultStack(app, 'gitlab-runner');
app.synth();
```