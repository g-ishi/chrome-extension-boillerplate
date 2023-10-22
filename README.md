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
   1. webpack.config.js ファイルの作成

### memo

- react も devdependencies でインストールしてる。
  - たぶん最終的に１つの js ファイルにするだけだから、全部の node モジュールが devdependency って扱いな気がする。
  - dev-dependency にしても、コードから import されてるものは build アセットに含まれるから大丈夫。
