const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'build/', '*.min.js'],
  },
];

module.exports = eslintConfig;
