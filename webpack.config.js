// webpack.config.jsファイルはnodejsで記述する
const path = require('path');

module.exports = {
  // modeによって動作が変わるらしい。
  mode: 'development',
  // バンドルを始めて依存関係を見ていくときの最初のファイル
  entry: './src/test.tsx',
  // バンドルするときの追加ルールを定義する
  module: {
    rules: [
      // tsxファイルはts-loaderを利用する
      // ts-loaderはnpmでインストールしておく必要がある
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // モジュールをimportするときに解決する拡張子
    // これにより、拡張子を含まないファイルをimportするときに、Webpackは上記の拡張子を持つファイルを順に検索します。
    extensions: ['.tsx', '.ts', '.js'],
  },
  // buildしたファイルの出力先
  output: {
    filename: 'index.js',
    // distへの絶対パスを指定
    path: path.resolve(__dirname, 'dist'),
  },
};
