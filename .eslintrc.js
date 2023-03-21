module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "***/tsconfig.json",
  },
  globals: {
    JSX: true,
  },
  plugins: ["react", "@typescript-eslint", "jest/globals"],
  rules: {
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
  },
};
