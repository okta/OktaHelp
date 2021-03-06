module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    ecmaVersion: 2018,
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  overrides: [
    {
      files: ['src/*.js'],
      env: {
        node: true,
        commonjs: true,
        es6: true,
      },
      extends: ['eslint:recommended'],
      rules: {
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        semi: ['error', 'always'],
      },
    },
  ],
};
