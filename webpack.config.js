const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|ttf|m4a)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
        type: 'javascript/auto'
      },
      {
        test: /\.json$/,
        type: 'asset/source'
      }
    ]
  },

  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000,
    liveReload: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'fortresses',
      template: path.resolve(__dirname, 'src/template.html'),
      filename: 'index.html'
    })
  ]
}
