import js from '@eslint/js';
import globals from 'globals';
import parserTs from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginI18next from 'eslint-plugin-i18next';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginJson from '@eslint/json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'i18n-dump/**',
      'public/**',
      '**/package.json',         // ← glob с **
      '**/package-lock.json',
      '.eslintrc.js',
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.node.json'
    ]
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: globals.browser
    },
    plugins: {
      js,
      'unused-imports': pluginUnusedImports
    },
    rules: {
      ...js.configs.recommended.rules,
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      }
    },
    plugins: {
      '@typescript-eslint': pluginTs
    },
    rules: {
      ...pluginTs.configs.recommended.rules
    }
  },

  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: pluginReact,
      i18next: pluginI18next
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'i18next/no-literal-string': 'warn'
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    }
  },

  {
    files: ['**/*.json'],
    ...pluginJson.configs.recommended
  },

  {
    files: ['**/*.test.{js,ts,jsx,tsx}', '**/*.spec.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]);
