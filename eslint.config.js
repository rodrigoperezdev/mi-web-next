import eslintPluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  configPrettier,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
