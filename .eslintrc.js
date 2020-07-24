module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
    "prettier/standard",
    "prettier/babel",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "react",
    "sort-imports-es6-autofix",
    "jsx-a11y",
    "react",
    "react-hooks",
    "promise"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": 0,
    "indent": 0,
    "consistent-return": 0,
    "no-underscore-dangle": 0,
    "no-tabs": 0,
    "dot-notation": 0,
    "default-case": 0,
    "class-methods-use-this": 0,
    "space-before-blocks": 1,
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "promise/prefer-await-to-then": "error"
  },
};
