// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import jest from 'eslint-plugin-jest';

export default [
  // Configuration for TypeScript and React/Next.js files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        window: true,     // Browser global
        document: true,   // Browser global
        fetch: true,      // Browser global
        setTimeout: true, // Browser global
        console: true,    // Browser/Node global
        process: true,    // Node.js global
        globalThis: true, // Modern JS global
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...ts.configs['recommended-requiring-type-checking'].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/prop-types': 'off', // Disable prop-types (TypeScript handles this)
      'react/react-in-jsx-scope': 'off', // Disable React import requirement
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // Allow _-prefixed unused vars
      '@typescript-eslint/no-unsafe-assignment': 'warn', // Soften for now
      '@typescript-eslint/no-unsafe-member-access': 'warn', // Soften for now
      '@typescript-eslint/no-unsafe-call': 'warn', // Soften for now
      '@typescript-eslint/no-explicit-any': 'warn', // Soften for now
      'no-undef': 'error', // Enforce defined globals
      'no-console': ['warn', { allow: ['error', 'warn'] }], // Allow console.error/warn
      'react/no-unescaped-entities': ['error', { forbid: ['>', '"', "'", '}'] }], // Enforce escaping
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }], // Allow async event handlers
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Configuration for Jest test files
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js'],
    plugins: { jest },
    languageOptions: {
      globals: { jest: true },
    },
    rules: {
      ...jest.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars in tests
    },
  },
  // Configuration for JavaScript/TypeScript config files
  {
    files: ['**/*.config.js', '**/*.config.ts'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: true, // Node.js global for config files
        require: true,
        process: true,
        console: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-undef': 'error',
    },
  },
  // Ignore generated files
  {
    ignores: ['coverage/**', 'dist/**', 'build/**', '.next/**'],
  },
];