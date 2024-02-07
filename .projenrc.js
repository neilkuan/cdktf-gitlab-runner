const { cdktf } = require('projen');
const description = 'The CDK for Terraform Construct for Gitlab Runner on GCP';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdktfVersion: '^0.20',
  defaultReleaseBranch: 'main',
  name: 'cdktf-gitlab-runner',
  keywords: ['cdktf', 'gitlab', 'runner', 'cdk'],
  repositoryUrl: 'https://github.com/neilkuan/cdktf-gitlab-runner.git',
  description,
  githubOptions: {
    projenTokenSecret: 'AUTOMATION_GITHUB_TOKEN',
  },
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  release: true,
  autoDetectBin: false,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  releaseEveryCommit: true,
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdktf-gitlab-runner',
    module: 'cdktf_gitlab_runner',
  },
  deps: [
    '@cdktf/provider-google@^13',
    'constructs@^10.0.12',
  ],
  peerDeps: [
    '@cdktf/provider-google@^13',
  ],
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/',
    '.gen',
    '.vscode',
    'cdktf.out',
    'terraform*',
    '.terraform*',
    'cdktf.json',
  ],
  devDeps: [
    'ts-jest@29.1.2',
    'jsii-rosetta@5.0.x',
  ],
  minNodeVersion: '20.10.0',
  workflowNodeVersion: '20.10.0',
  typescriptVersion: '^5',
  jsiiVersion: '5.3.x',
});

project.synth();
