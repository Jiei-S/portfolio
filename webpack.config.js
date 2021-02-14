const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "docs/js/"),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react"
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { moveElemsAttrsToGroup: false },
                ],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ]
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "docs"),
    port: 3000,
  },
  target: ["web", "es5"],
};