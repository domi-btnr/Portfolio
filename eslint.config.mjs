import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended"),
  {
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "arrow-parens": ["error", "as-needed"],
      "comma-spacing": "error",
      "comma-style": "error",
      "eol-last": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "keyword-spacing": "error",
      "max-nested-callbacks": [
        "error",
        {
          max: 4,
        },
      ],
      "max-statements-per-line": [
        "error",
        {
          max: 2,
        },
      ],
      "no-console": "warn",
      "no-empty-function": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
      "no-trailing-spaces": "error",
      "no-var": "error",
      "no-whitespace-before-property": "error",
      "prefer-const": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": "error",
      yoda: "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    files: ["**/*.{ts,tsx,jsx,js}"],
    languageOptions: {
      ecmaVersion: 2025,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
      ...reactRefresh.configs.vite.rules,
    },
  },
];
