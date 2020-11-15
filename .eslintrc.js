module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "prettier"],
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          "d.ts",
          "spec.ts",
          "spec.tsx",
        ],
      },
      "babel-module": {},
      typescript: {},
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      "spec.ts",
      "spec.tsx",
      "d.ts",
    ],
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        "spec.ts",
        "spec.tsx",
        "d.ts",
      ],
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-underscore-dangle": 0,
    "no-await-in-loop": 0,
    "no-restricted-syntax": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/no-danger": 0,
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/stories.*", "**/.storybook/**/*.*"],
        peerDependencies: true,
      },
    ],
  },
};