const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");
const json = require("@eslint/json");
const unusedImports = require("eslint-plugin-unused-imports");
const { defineConfig } = require("eslint/config");
const pluginI18next = require("eslint-plugin-i18next");

module.exports = defineConfig([
  {
    ignores: [
      "dist/**",
      "public/**",
      "node_modules/**",
      "i18n-dump/**",
      "**/*.json"
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
      }
    },
    plugins: {
      js,
      "unused-imports": unusedImports
    },
    rules: {
      ...js.configs.recommended.rules,
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ]
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended[0]
  },
  {
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      react: pluginReact,
      i18next: pluginI18next
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "i18next/no-literal-string": 2
    }
  },
  {
    files: ["**/*.json"],
    ...json.configs.recommended
  },
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]);
