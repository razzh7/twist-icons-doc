module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': false
    }],
    'react/no-unescaped-entities': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'import/no-relative-packages': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'import/extensions': 'off',
    'import/prefer-default-export': ['off', { 'target': 'any' }],
    'implicit-arrow-linebreak': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'prefer-const': [
      'warn',
      {
        'destructuring': 'all'
      }
    ],
    'no-underscore-dangle': 'off',
    'no-trailing-spaces': 'error'
  },
}
