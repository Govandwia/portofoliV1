// ESLint configuration untuk CI/CD
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Relaxed rules untuk CI
    '@next/next/no-img-element': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'public/',
  ],
};
