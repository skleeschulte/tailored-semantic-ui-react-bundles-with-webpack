/**
 * Webpack configuration
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = path.resolve(__dirname, 'src');

module.exports = {

    context: context,

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },

    module: {
        rules: [
            // Loader configuration for JavaScript files
            {
                test: /\.js$/i,
                exclude: /[/\\]node_modules[/\\]/,
                loader: 'babel-loader'
            },

            // Loader configurations for semantic-ui-less
            {
                // Load .less files from semantic-ui-less module folder
                test: /\.less$/i,
                include: /[/\\]node_modules[/\\]semantic-ui-less[/\\]/,
                use: ExtractTextPlugin.extract({
                    use: [
                        // Set importLoaders to 2, because there are two more loaders in the chain (postcss-loader
                        // and semantic-ui-less-module-loader), which shall be used when loading @import resources
                        // in CSS files:
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        {
                            loader: 'semantic-ui-less-module-loader',
                            options: {
                                siteFolder: path.resolve(context, 'semantic-ui-theme/site'),
                                themeConfigPath: path.resolve(context, 'semantic-ui-theme/theme.config'),
                            }
                        }
                    ]
                })
            },
            {
                // Load .png files from semantic-ui-less folder
                test: /\.png$/i,
                include: /[/\\]node_modules[/\\]semantic-ui-less[/\\]/,
                loader: 'file-loader',
                // Use publicPath ../, because this will be used in css files, and to reference an image from the images
                // folder in a css file in the styles folder the relative path is ../images/image-file.ext
                options: { name: 'images/[name].[hash].[ext]', publicPath: '../' }
            },

            // Loader configuration for font files
            {
                test: /\.(woff2?|[ot]tf|eot|svg)$/i,
                loader: 'file-loader',
                // Use publicPath ../, because this will be used in css files, and to reference a font from the fonts
                // folder in a css file in the styles folder the relative path is ../fonts/font-file.ext
                options: { name: 'fonts/[name].[hash].[ext]', publicPath: '../' }
            }
        ]
    },

    devtool: 'source-map',

    plugins: [
        // Define process.env.NODE_ENV variable in bundle. It is used e.g. by React (and other packages).
        new webpack.EnvironmentPlugin(['NODE_ENV']),

        // Extract imported CSS files to disk (except when using HMR or building for server).
        new ExtractTextPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),

        // Move everything from node_modules folder into separate vendor chunks (js and css).
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module){
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),

        // Move the webpack bootstrap logic into its own js file.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),

        // Compress JavaScript sources. This might also switch loaders into minimizing mode (which would e.g. enable
        // minification of CSS sources by css-loader). At least for css-loader this is currently not working, thus
        // the minimize option is set explicitly there.
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

        new HtmlWebpackPlugin({
            title: 'tailored-semantic-ui-react-bundles-with-webpack',
            template: path.resolve(__dirname, 'assets/index.ejs')
        })
    ]

};
