const path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputDir = 'static';

module.exports = {
    entry: {
        javascript: "./assets/javascript/index.js",
        inline_styles: "./assets/styles/inline.scss",
        main_styles: "./assets/styles/main.scss",
    },
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, outputDir)
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(outputDir),
        new ManifestPlugin({
            fileName: path.resolve(__dirname, "data", "manifest.json")
        },
    )],
};
