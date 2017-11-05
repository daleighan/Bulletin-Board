const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const webpackConfig = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/compiled'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: []
};

webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { 
  presets: ['es2015', 'react'], 
  plugins: ["transform-class-properties"] ,
  },
});

webpackConfig.module.loaders.push({
  test: /\.(jpg|png|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 25000,
  }
});

webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
  })
);

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production')
  })
);

webpackConfig.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

webpackConfig.plugins.push(
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
);




module.exports = webpackConfig;