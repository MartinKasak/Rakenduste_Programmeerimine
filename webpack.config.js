const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "none",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
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
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy:{
      "/api":"http://localhost:7171"
    }
  },
  module: {
    rules: [
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
    {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
            failOnError:true,
        },
    },
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};