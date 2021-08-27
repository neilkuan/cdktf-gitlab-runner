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
new IntegDefaultStack(app, 'cloudrun-cdktf');
app.synth();
