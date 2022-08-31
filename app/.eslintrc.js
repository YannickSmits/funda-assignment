module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
    // "airbnb-base",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // "indent": "off",
    // "@typescript-eslint/indent": ["error", 2], // 2 spaces === 1 tab
    // "vue/attribute-hyphenation": "off",
    // "vue/require-default-prop": "off",
    // "vue/multi-word-component-names": "off",
    // "vue/no-v-html": "off",
    // "import/extensions": "off",
    // "no-param-reassign": [
    //   "error",
    //   {
    //     "props": true,
    //     "ignorePropertyModificationsFor": [
    //       "state"
    //     ]
    //   }
    // ],
    // "no-plusplus": [
    //   "error",
    //   { "allowForLoopAfterthoughts": true }
    // ],
    // "no-useless-constructor": "off",
    // "no-shadow":"off",
    // "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    // "linebreak-style": 0,
    // "no-multiple-empty-lines": "off",
    // "no-unsafe-optional-chaining": "off",
    // "no-promise-executor-return": "off",
    // "max-len": "off"
  }
}
