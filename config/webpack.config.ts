import * as Path from 'path';
const pkgDir = require('pkg-dir');
const projectRoot = pkgDir.sync();

module.exports = {
    entry: {
        main: Path.join(projectRoot, "src"),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.json', '.tsx', '.js', '.jsx'],
        alias: {
            'power-assert': 'power-assert/build/power-assert',
        },
    },
    output: {
        path: Path.join(projectRoot, "build"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'webpack-espower-loader',
                    'awesome-typescript-loader',
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ],
    }
};