const path = require('path');

module.exports = {
    entry: './src/js/app.js',

    output: {
        path: path.resolve(__dirname, 'public'),  // compiled files go here
        filename: 'app.bundler.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // serve dist files
        },
        port: 5501,
        open: true,
        hot: true,
        compress: true, // enable gzip compression
    },

    mode: 'development',
    devtool: 'inline-source-map'
};
