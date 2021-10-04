const { ConstructLibraryCdktf } = require('projen');
const description = 'The CDK for Terraform Construct for Gitlab Runner on GCP';
const project = new ConstructLibraryCdktf({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdktfVersion: '0.6.3',
  defaultReleaseBranch: 'main',
  name: 'cdktf-gitlab-runner',
  keywords: ['cdktf', 'gitlab', 'runner'],
  repositoryUrl: 'https://github.com/neilkuan/cdktf-gitlab-runner.git',
  description,
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
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  releaseEveryCommit: true,
  releaseToNpm: true,
  python: {
    distName: 'cdktf-gitlab-runner',
    module: 'cdktf_gitlab_runner',
  },
  deps: [
    '@cdktf/provider-google',
  ],
  peerDeps: [
    '@cdktf/provider-google',
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
});
project.synth();
