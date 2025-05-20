import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";
import pluginI18next from "eslint-plugin-i18next";

export default defineConfig([
  // 🧼 Игнорируем мусор
  {
    ignores: [
      "dist/**",
      "public/**",
      "node_modules/**",
      "i18n-dump/**",
      "**/*.json"
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

      // 🔥 удаляет неиспользуемые импорты
      "unused-imports/no-unused-imports": "error",

      // ⚠️ отключаем оригинальные, оставляем расширенные
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // 💡 кастомная версия: игнорируем переменные и аргументы с "_"
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

  // 🧩 TypeScript-настройки (без дублирования правил)
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended[0]
  },

  // ⚛️ React-настройки
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

  // 📦 JSON
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
