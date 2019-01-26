const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        hot: true,
        open: true,
        watchContentBase: true
    },
    plugins: [
        new CleanWebpackPlugin(["public"]),
        new webpack.HotModuleReplacementPlugin()
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    module : {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.s?css$/,
                exclude:/node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}