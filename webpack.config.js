const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
  // モードの設定（development, production, none から選択）
  mode: "development",
  // エントリーポイントの設定
  entry: "./src/index.js",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "bundle.js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.resolve(__dirname, "dist"),
  },
  // ローダーの設定
  module: {
    rules: [
      // JavaScript ファイルの処理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
