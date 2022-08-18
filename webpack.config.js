// node.js 要搬移任何的檔案都要靠 path api 做
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // 進入點指向 './src/main.js'
  entry: './src/main.js',
  // 檔案編譯後的輸出位置，把 main.js 打包成 dist 資料夾裡面的 bundle.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // 針對 *.scss 副檔名的檔案，會用 mini-css-extract-plugin、css-loader 及 sass-loader 三個 loader 來編譯，編譯後的 scss 只會改變副檔名，檔名的部分不變 (main.css)
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}