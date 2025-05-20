const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");
const json = require("@eslint/json");
const unusedImports = require("eslint-plugin-unused-imports");
const pluginI18next = require("eslint-plugin-i18next");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  // 🧼 Игнорируем мусор
  {
    ignores: [
      "dist/**",
      "public/**",
      "node_modules/**",
      "i18n-dump/**"
    ]
  },

  // 🧠 Общие JS-настройки
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

  // 🧩 TypeScript-настройки
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      ...tseslint.configs.recommended[0].rules
    }
  },

  // ⚛️ React-настройки через extends
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
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "i18next/no-literal-string": "warn"
    },
    extends: ["plugin:react/recommended"]
  },

  // 📦 JSON
  {
    files: ["**/*.json"],
    ...json.configs.recommended
  },

  // 🧪 Тестовые файлы
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.jest
    }
  }
]);
