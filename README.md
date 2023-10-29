# react / typescript で chrome extension を開発するテンプレート

## 概要

typescript コンパイラ(tsc)で、typescript コードを javascript コードに変換する。

変換した javascript コードを chrome extension が認識できる形に変換するのを webpack で行う。

(import/export されているモジュールを１つの JS ファイルにまとめる。)

## 構築手順メモ

1. typescript のインストール
   1. tsconfig.json ファイルの作成
2. react のインストール
3. webpack と webpack-cli のインストール
   1. webpack.config.js ファイルの作成と設定追加
      1. typescript と react をバンドルできるように設定
         1. 作業内容は[こちらのコミット](https://github.com/g-ishi/chrome-extension-boillerplate/commit/1e7ea347417c6333db4300b7848e5ce00c4b2271)を参照
      2. manifest.json や static ファイルがバンドルに含まれるように設定
         1. 作業内容は[こちらのコミット](https://github.com/g-ishi/chrome-extension-boillerplate/commit/2b2fb6f65c8cb3e1af1bd570a91ee58ac9a03c4b)を参照
      3. css をバンドルできるように設定
         1. 作業内容は[こちらのコミット](https://github.com/g-ishi/chrome-extension-boillerplate/commit/b79e385627167f4a5be731ef9a3425b913d698c1)を参照

### memo

- react も devdependencies でインストールしてる。
  - たぶん最終的に１つの js ファイルにするだけだから、全部の node モジュールが devdependency って扱いな気がする。
  - dev-dependency にしても、コードから import されてるものは build アセットに含まれるから大丈夫。
