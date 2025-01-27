const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'turbo',
  ],
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  plugins: ['prettier', 'unused-imports', 'only-warn'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  ignorePatterns: ['dist', 'node_modules', 'src/subgraph/graphql.ts', 'examples', 'schemas'],
  overrides: [
    {
      files: ['*.js?(x)', '*.cjs?(x)', '*.mjs?(x)', '*.ts?(x)'],
    },
  ],
}
