const path = require('path');
const { gzip } = require('zlib');
module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'src'), 
        filename: 'app.bundler.js',
    },
    module: {
        rules: [ // Updated 'loaders' to 'rules' (modern Webpack syntax)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // Updated preset name
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'), 
        },
        port: 5501,
        open: true,
        hot: true, 
        gzip: true, 
    },
    mode: 'development',
    devtool: 'inline-source-map'
};