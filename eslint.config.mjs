import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettierRecommended,
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'reports/**', 'next-env.d.ts']),
]);
