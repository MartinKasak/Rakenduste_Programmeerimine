const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: "public"
      }
    ])
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};