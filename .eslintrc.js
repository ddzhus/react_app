module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb/base',
    'airbnb/rules/react',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/default-param-last': 'off',
  },
};
