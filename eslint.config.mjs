import js from "@eslint/js";

export default [
  {
    ignores: [".astro/**", ".next/**", "dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        HTMLElement: "readonly",
        localStorage: "readonly",
        window: "readonly",
      },
    },
  },
];
