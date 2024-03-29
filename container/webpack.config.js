const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path');
const deps = require("./package.json").dependencies;


module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 1000,
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
            name: "container",
            remotes: {
                barchart: "barchart@http://localhost:1001/remoteEntry.js",
                linechart: "linechart@http://localhost:1002/remoteEntry.js",
                store : "store@http://localhost:1003/remoteEntry.js"
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