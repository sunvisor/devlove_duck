# モデルを作る

MVCのモデルの役割は、SenchaフレームワークではModelとStoreが担います。

* Model: データの定義と1つのレコード
* Store: ローカルでの一時的なストレージ、Modelのコレクション
* Proxy: ModelやStoreにサーバーなどからのデータを取ってきてセットしたり、逆に送信したりしてくれます。


## やってみよう #04

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl03.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### Modelを作る

モデルを一つ作ってみましょう。

* まず、アプリケーションのディレクトリに移動します。

        $ cd ../cl

* 次のコマンドでモデルを作ります。

        $ sencha generate model Contact last_name,first_name,last_kana,first_kana,gender,phone,email

* last_name以降はフィールド名ですカンマ区切りですが、間に空白は入れないでください
* app/model/Contact.js をエディタで開いて中を見てみます。
* `type: 'auto'` となっているのを全て `string` に変更します。

        Ext.define('ContactList.model.Contact', {
            extend: 'Ext.data.Model',

            config: {
                fields: [
                    { name: 'last_name', type: 'string' },
                    { name: 'first_name', type: 'string' },
                    { name: 'last_kana', type: 'string' },
                    { name: 'first_kana', type: 'string' },
                    { name: 'gender', type: 'string' },
                    { name: 'phone', type: 'string' },
                    { name: 'email', type: 'string' }
                ]
            }
        });

### Storeを作る

モデルの集合体であるStoreを作ります。

* app/storeの下にContacts.jsを作ります。
* 次のコードを入力します。

        Ext.define('ContactList.store.Contacts', {
            extend: 'Ext.data.Store',
            requires: [
                'ContactList.model.Contact'
            ],

            config: {
                model: 'ContactList.model.Contact'
            }
        });

#### requiresについて

* `requires` 配列にはこのクラスに必要なクラス名をセットします。
* そうすると動的ローディングシステムがクラスファイルをロードしてくれます。
* 最終的に製品版をビルドするときにも、この情報が使われます。
  (こちらの方の意味が重要)
