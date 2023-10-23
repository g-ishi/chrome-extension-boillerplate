// webpack.config.jsファイルはnodejsで記述する
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // modeによって動作が変わるらしい。
  mode: 'development',

  // これがない状態でdevelopmentでビルドするとエラーになるので、以下を入れる
  // デバック用にビルド結果と元のファイルとの対応関係を生成するオプション
  devtool: 'cheap-module-source-map',

  // バンドルを始めて依存関係を見ていくときの最初のファイル
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
  },
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
  // moduleで処理されなかったファイルはpluginsで処理される
  plugins: [
    // manifest.jsonファイルはそのままdistにコピーする
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/manifest.json'),
          to: path.resolve('dist'),
        },
      ],
    }),
    // popup.htmlファイルを生成して、popup chunkをscriptタグとして挿入する。
    // chunkはoutputのfilenameを指定している。今回は作成されたpopup.jsファイルを使用している
    new HtmlPlugin({
      title: 'Boilerplate Extension',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  resolve: {
    // モジュールをimportするときに解決する拡張子
    // これにより、拡張子を含まないファイルをimportするときに、Webpackは上記の拡張子を持つファイルを順に検索します。
    extensions: ['.tsx', '.ts', '.js'],
  },
  // buildしたファイルの出力先
  output: {
    // [name] は、entryで定義したキーの名前をファイル名に使用するwebpackの記法
    // 今回はpopup.jsファイルが作成される。
    filename: '[name].js',
    // distへの絶対パスを指定
    path: path.resolve('dist'),
  },
};
