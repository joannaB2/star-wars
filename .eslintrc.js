module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:prettier/recommended"],
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
  plugins: ["react", "prettier", "no-relative-import-paths", "import-path"],
  rules: {
    semi: 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "@typescript-eslint/semi": "off",
    "no-unexpected-multiline": "error",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": 2,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "@typescript-eslint/strict-boolean-expressions": "off",
    "import-path/parent-depth": ["warn", 2],
    "import-path/forbidden": ["error", ["/index$"]],
    "no-relative-import-paths/no-relative-import-paths": ["warn", { allowSameFolder: true }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
