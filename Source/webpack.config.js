var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: "./renderer.js",
	output: {
		filename: "./public/js/bundle.js"
	},
	target: "electron-main",
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("css-loader?url=false!sass-loader?sourceMap")
			},
			{ 
				test: /\.js$/, exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("./public/css/app.css", {
			allChunks: true
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}