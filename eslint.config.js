module.exports = {
  languageOptions: {
    globals: {
      process: 'readonly',
      console: 'readonly',
      module: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
    },
  },
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    
  },
};