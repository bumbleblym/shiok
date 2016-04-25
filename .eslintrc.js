module.exports = {
  extends: 'google',
  env: {
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  rules: {
    'no-unused-expressions': 'off'
  }
};
