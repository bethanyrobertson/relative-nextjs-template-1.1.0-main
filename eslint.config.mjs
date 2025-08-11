import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
  ),
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'jsx-a11y/alt-text': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];

export default eslintConfig;
