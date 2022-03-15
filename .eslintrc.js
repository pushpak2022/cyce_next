module.exports = {
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: ["react", "prettier", "import"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf"
      }
    ],
    "no-console": ["off"],
    "comma-dangle": ["error", "never"],
    semi: ["error", "never"],
    indent: ["error", 2],
    "max-len": 0,
    "no-undef": 1,
    "import/first": 2,
    "react/no-unescaped-entities": 0
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  env: {
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: "17.0.1"
    }
  }
}
