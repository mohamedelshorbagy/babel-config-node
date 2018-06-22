const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');



module.exports = {
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new NodemonWebpackPlugin()
    ]

}






