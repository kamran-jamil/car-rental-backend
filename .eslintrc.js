module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/no-dynamic-require": 0,
    "global-require": 0,
    camelcase: 0,
    "prefer-const": 0,
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
  },
};
