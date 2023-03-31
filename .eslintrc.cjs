module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        // this setting is required to use rules that require type information
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      parserOptions: {
        // this setting is required to use rules that require type information
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
};
