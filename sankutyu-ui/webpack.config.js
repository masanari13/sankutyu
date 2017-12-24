// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  //エントリーポイントの設定
  //エントリーポイントとはモジュール間の依存関係の解析を開始する地点のこと。
  //各モジュールを読み込んでメインの処理をするJavaScriptファイルだと認識しておけば良い。
  entry: './src/webpack/app.js' ,
  //出力の設定。
  //出力するファイル名や出力先のパスを指定する。
  //OSによってパスが異なることを防ぐために、出力先のパスの指定にはpath.join()を利用する。
  output: {
    //出力の設定
    filename: 'bundle.js'
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  }
};
