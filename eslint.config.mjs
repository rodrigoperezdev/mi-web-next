import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  configPrettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: { "@typescript-eslint": tseslint, react: eslintPluginReact },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
