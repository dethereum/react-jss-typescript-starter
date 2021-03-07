module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: "./tsconfig.eslint.json",
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      // TEMP DISABLE
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-non-null-assertion":0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-extra-semi": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-inferrable-types": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/ban-types": 0,
      "no-var": 0,
      "no-undef":0,
      "no-prototype-builtins": 0,
      "no-unreachable": 0,
      "no-redeclare": 0,
      "prefer-const": 0,
    },
    overrides: [
      {
        files: [
          "server/**/*.js",
          "sitecore/**/*.js",
          "server.disconnectedproxy/**/*.js",
          "server.bundle/**/*.js",
          "scripts/**/*.js",
          "pipelines/**/*.js",
          "src/setupProxy.js",
          ".eslintrc.js",
          "plopfile.js",
          "jss-create.js"
        ],
        env: {
          node: true
        },
        rules: {
          "@typescript-eslint/no-var-requires": 0
        }
      }
    ]
  };