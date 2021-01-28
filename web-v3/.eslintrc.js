module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    // 'max-len': ['error', { 'code': 160 }],
    // 'quote-props': 'off',
    // 'no-param-reassign': 'off',
    // 'no-shadow':'off',
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    // 'object-shorthand': 'off',
    // 'no-unneeded-ternary': 'off',
    // 'no-var': 'off',
    // 'vars-on-top': 'off',
    // 'consistent-return': 'off',
    // 'array-callback-return': 'off',
    // 'prefer-destructuring': 'off',
    // 'func-names': 'off',
    // 'import/no-cycle': 'off',
    // 'arrow-parens': 'off',
    // 'no-mixed-operators': 'off',
    // 'prefer-object-spread': 'off',
    // 'no-self-assign': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-multiple-empty-lines': 'off',
    // 'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
