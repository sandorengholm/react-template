const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = 'development') => ({
    mode: env,
    entry: './src/index.tsx',
    output: {
        filename:
            env === 'development' ? '[name].js' : '[name].[contenthash].js',
        chunkFilename:
            env === 'development' ? '[name].js' : '[name].[contenthash].js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { test: /\.tsx?$/, loader: 'babel-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        if (env === 'development') {
                            return '[path][name].[ext]';
                        }
                        return '[name].[contenthash].[ext]';
                    }
                }
            },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:
                env === 'development'
                    ? '[name].css'
                    : '[name].[contenthash].css',
            chunkFilename:
                env === 'development'
                    ? '[name].css'
                    : '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ]
});
