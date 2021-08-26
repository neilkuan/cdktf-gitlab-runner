const { ConstructLibraryCdktf } = require('projen');
const project = new ConstructLibraryCdktf({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdktfVersion: '0.5.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-gitlab-runner',
  repositoryUrl: 'https://github.com/neilkuan/cdktf-gitlab-runner.git',

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();