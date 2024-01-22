const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
    mode : "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer : {
        port:1003,
        static: {
            directory: path.join(__dirname, 'public'),
          },
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
    resolve: {
    extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "store",
            filename: "remoteEntry.js",
            exposes : {
                "./store" : "./src/store",
                "./counterSlice" : "./src/counterSlice",
                "./homeSlice" : "./src/homeSlice"
            },
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
            
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]

}