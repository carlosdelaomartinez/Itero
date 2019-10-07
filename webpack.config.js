const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }]
          }
        },
      },
      { test: /\.(jpe?g|png|gif|svg)$/, 
        loader: 'file-loader',
        options: {
          name: 'src/[path][name].[ext]',
          context: './src'
       }
      }
    ]
  }
}