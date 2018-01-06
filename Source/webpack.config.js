var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var PROD = (process.env.NODE_ENV === "production")

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
	plugins: PROD ? [ //production mode
		new ExtractTextPlugin("./public/css/app.css", {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin(),
		// new webpack.DefinePlugin({
		// 	"process.env": {
		// 		NODE_ENV: JSON.stringify("production")
		// 	}
		// }),
		
	] : [ //dev mode
		new ExtractTextPlugin("./public/css/app.css", {
			allChunks: true
		}),
	]
}