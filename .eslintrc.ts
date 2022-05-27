module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/object-property-newline': ['error'],
    'vue/new-line-between-multi-line-property': ['error'],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/multi-word-component-names': ['off'],
    'prettier/prettier': ['warn', { singleQuote: true }],
  },
};
