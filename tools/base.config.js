const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'vender': ['react', 'react-dom'],
    'app': path.resolve(__dirname, "..", "src", "App.tsx"),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  output: {
    filname: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    extensions: ['.js','.ts','.tsx'],
    alias: {
      'components': path.resolve(__dirname, '..', 'src', 'components'),
      'containers': path.resolve(__dirname, '..', 'src', 'containers'),
      'assets': path.resolve(__dirname, '..', 'src', 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader', 
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
}