# テーマの設定

* Sencha Touch では、テーマを変更して見た目を変えることができます。
* 標準でいくつかのテーマが用意されています。
* テーマを自分で作ったり、既存のテーマをカスタマイズすることができます。
* 今日は、既存のテーマを使う方法をご紹介します。

## 既存のテーマを使う

* ちがうテーマに切り替えるには、app.jsonファイルを変更します。

## やってみよう #14

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl13.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。


* app.json ファイルで使用するテーマを変更してみます。
* css配列で参照しているCSSファイルをapp.cssから、SDKフォルダの中のcupertino.cssに変えてみます。

        "css": [
            {
                // "path": "resources/css/app.css",
                "path": "../touch/resources/css/cupertino.css",
                "update": "delta"
            }
        ],

* 変更したら、リフレッシュして、app.jsonの変更をbootstrap.jsonに反映させます。

        $ sencha app refresh

* ブラウザで表示するとiOS7風のテーマに変わっています。

## デバイスによるテーマ切り替え

* Sencha Touchは複数のデバイスで動作します。
* それぞれのデバイスには、独自のテーマがあります。
* Sencha Touchではビルトインでそれぞれのテーマが用意されています。
* そしてプラットフォームを判定して、それに合ったテーマを動的に適用することができます。

## やってみよう #14-2

* 再度app.jsonを変更します。

        "css": [
            {
                "path": "resources/css/app.css",
                "platform": ["desktop","android"],
                "update": "delta"
            },
            {
                "path": "../touch/resources/css/cupertino.css",
                "platform": ["ios"],
                "theme": "cupertino",
                "update": "delta"
            }
        ],

* 変更したら、リフレッシュして表示してみます。

    $ sencha app refresh

* 元の状態に戻りました。
* 次にURLの最後に`?platform=ios`をつけて表示します。するとiOS7のテーマに切り替わります。

