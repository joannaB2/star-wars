module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "prettier"],
  rules: {
    semi: 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "@typescript-eslint/semi": "off",
    "no-unexpected-multiline": "error",
    "@typescript-eslint/indent": ["error", 2],
  },
};
