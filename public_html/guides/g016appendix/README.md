## テーマの設定

### 既存のテーマを使う

* app.json ファイルで使用するテーマを変更してみます。
* css配列で参照しているCSSファイルをapp.cssから、SDKフォルダの中のcupertino.cssに変えてみます。

        "css": [
            {
                "path": "../touch/resources/css/cupertino.css",
                "theme": "default",
                "update": "delta"
            }
        ],

* 変更したら、一旦ビルドします。

        $ sencha build app

* ブラウザで表示するとiOS7風のテーマに変わっています。

### デバイスによるテーマ切り替え

* Sencha Touchは複数のデバイスで動作します。
* それぞれのデバイスには、独自のテーマがあります。
* Sencha Touchではビルトインでそれぞれのテーマが用意されています。
* そしてプラットフォームを判定して、それに合ったテーマを動的に適用することができます。
* app.jsonを変更します。

        "css": [
            {
                "path": "../touch/resources/css/sencha-touch.css",
                "platform": ["chrome","safari"],
                "theme": "default",
                "update": "delta"
            },
            {
                "path": "../touch/resources/css/cupertino.css",
                "platform": ["ios"],
                "theme": "cupertino",
                "update": "delta"
            }
        ],

* 変更したら、ビルドして表示してみます。

    $ sencha build app

* 元の状態に戻りました。
* 次にURLの最後に`?platform=ios`をつけて表示します。するとiOS7のテーマに切り替わります。
