const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  devServer: {
    //https://webpack.js.org/configuration/stats/
    stats: {
      all: undefined,

      assets: false,
      modules: false,
      warnings: true,
      moduleTrace: false,
      errors: true,
      errorDetails: true,
    },
  },

  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),

    new CopyWebpackPlugin([
      {
        from: './src/images/',
        to: 'images/',
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: './node_modules/reveal.js/plugin/',
        to: 'plugin/',
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: './node_modules/reveal.js/',
        to: 'reveal.js/',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // loader: "style!css"
      },
      {
        test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject',
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff2',
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
}
