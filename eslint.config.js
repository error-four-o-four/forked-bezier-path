// @ts-check
import { fileURLToPath } from 'node:url';

import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint';
import globals from 'globals';

import { includeIgnoreFile } from '@eslint/compat';

export default tseslint.config(
  includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
    },
  },
  {
    files: [ '**/*.config.js' ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  prettierConfig
);
