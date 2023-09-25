const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'development',
  
  entry: './src/index.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'images/[contenthash:6][ext]'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        },
        generator: {
          filename: 'images/[contenthash:6][ext][query]'
        }
      },

      {
        test: /\.svg$/,
        type: 'asset/inline'
      },

      {
        test: /\.txt/,
        type: 'asset/source'
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.string$/,
        use: 'raw-loader'
      },

      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  },

  devServer: {
    static: './dist/index.html'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
}