import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/prop-types": "off", // Disable prop-types rule for all files
    },
  },
  tseslint.configs.recommended, // TypeScript ESLint rules
  pluginReact.configs.flat.recommended, // React plugin rules
]);
