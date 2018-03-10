'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_VERSION = require('./package.json').version;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		app: path.resolve(__dirname, './client'),
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new CleanObsoleteChunks(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				APP_VERSION: JSON.stringify(APP_VERSION),
			},
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,
			},
		}),
		new CopyWebpackPlugin([{ from: './client/assets/', to: '.' }]),
		new HtmlWebpackPlugin({
			title: 'Jeff Wesson',
			template: './client/theme/index.html',
		}),
		new ExtractTextPlugin({
			filename: 'main.css',
			disable: false,
			allChunks: true,
		}),
		isProd
			? new webpack.LoaderOptionsPlugin({
					minimize: true,
				})
			: null,
		isProd ? new webpack.optimize.UglifyJsPlugin() : null,
	].filter(Boolean),

	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
						'postcss-loader',
						'resolve-url-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								includePaths: [path.resolve(__dirname, './client')],
							},
						},
					],
				}),
			},
			{
				test: /\.(png|jpg|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10240&publicPath=assets/',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /Product\/categories\.js$/,
				loader: 'babel-loader',
			},
		],
	},

	resolve: {
		alias: {
			'~': path.resolve(__dirname, './client'),
		},
		extensions: ['.js', '.jsx'],
	},
};