module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],
  rules: {
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
