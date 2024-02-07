import * as gcp from '@cdktf/provider-google';
import { TerraformStack, Testing } from 'cdktf';
import { GitlabRunnerAutoscaling } from '../src';

Testing.setupJest();
let app = Testing.app();
let stack = new TerraformStack(app, 'test');
describe('Unit testing using snapshots', () => {
  it('should match the snapshot', () => {
    expect(
      Testing.synthScope(() => {
        const local = 'asia-east1';
        const projectId = `${process.env.PROJECT_ID}`;
        const provider = new gcp.provider.GoogleProvider(stack, 'GoogleAuth', {
          region: local,
          zone: local+'-c',
          project: projectId,
        });
        new GitlabRunnerAutoscaling(stack, 'runner', {
          gitlabToken: `${process.env.GITLAB_TOKEN}` || 'mock',
          provider,
        });
      })).
      toMatchSnapshot();
  });
});