/** @type {import("prettier").Config} */
/** @type {import("prettier-plugin-tailwindcss").PluginOptions} */

const config = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./styles/globals.css",
}

export default config;