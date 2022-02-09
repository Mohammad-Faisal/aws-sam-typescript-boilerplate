/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const AwsSamPlugin = require('aws-sam-webpack-plugin');
const awsSamPlugin = new AwsSamPlugin();

module.exports = {
    entry: () => awsSamPlugin.entry(),
    output: {
        filename: (chunkData) => awsSamPlugin.filename(chunkData),
        libraryTarget: 'commonjs2',
        path: path.resolve('.')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    externals: process.env.NODE_ENV === 'development' ? [] : ['aws-sdk'],
    mode: process.env.NODE_ENV || 'production',
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    },
    plugins: [awsSamPlugin]
};
