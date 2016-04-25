module.exports = {
  extends: [
    'google',
    'plugin:react/recommended'
  ],
  env: {
    node: true,
    mocha: true,
    browser: true
  },
  globals: {
    expect: true
  },
  plugins: [
    "react"
  ],
  rules: {
    'no-unused-expressions': 0
  }
};
