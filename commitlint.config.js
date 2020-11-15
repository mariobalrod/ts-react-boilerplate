const { readdirSync } = require('fs');

const readSubDirs = (dir) => readdirSync(dir).filter((it) => !it.includes('.'));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'header-max-length': [0, 'always', 110],
    'scope-enum': [
      2,
      'always',
      [
        'ci',
        'commitlint',
        'package',
        ...readSubDirs('src'),
      ],
    ],
  },
};