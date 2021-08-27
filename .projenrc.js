const { ConstructLibraryCdktf, DependenciesUpgradeMechanism } = require('projen');
description = 'Construct a CDK tf';
const project = new ConstructLibraryCdktf({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdktfVersion: '0.5.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-gitlab-runner',
  keywords: ['cdktf', 'gitlab', 'runner'],
  repositoryUrl: 'https://github.com/neilkuan/cdktf-gitlab-runner.git',
  deps: [
    '@cdktf/provider-google',
  ],
  description,
  catalog: {
    twitter: 'neil_kuan',
    announce: false,
  },
  release: true,
  autoDetectBin: false,
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  }),
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
  peerDeps: [
    '@cdktf/provider-google',
  ],
  minNodeVersion: '12.13.0',
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
  ],
});
project.synth();