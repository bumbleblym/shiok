module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js',
      'test/index.js'
    ],

    tests: [
      'src/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    setup: function setup () {
        require('./test/index')
    }
  }
}
