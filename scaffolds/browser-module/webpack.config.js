const srcFiles = [
  /src/
]

module.exports = {

  /**
   * You can read this like:
   *   make this: out of this
   */
  entry: {
    './build/module.js': './src/index.js'
  },

  output: {
    filename: '[name]',
    library: 'YOUR NAME HERE',
  },

  /**
   * Source maps
   */
  devtool: 'cheap-module-eval-source-map',

  module: {
    loaders: [

      /**
       * Run the babel loader on all your src .js files.
       */
      { test: /\.js$/, include: srcFiles, loaders: ['babel'] }

    ]
  }

}
