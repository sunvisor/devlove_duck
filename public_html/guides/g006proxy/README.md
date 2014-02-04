# Proxyを設定する

今回のセミナーではサーバーサイドの実装はしません。
こちらの方で、皆さんが利用できるサーバーを用意してきましたので、それを使います。

モデルにプロキシ(Proxy)を設定すると、そのモデルがどのようにデータを取得するかを設定できます。

### Proxy/Reader/Writer

+ Proxy = データのありかを知っていて、そことやりとりをする
    + Server Proxy
        + Ajax Proxy
        + JSONP Proxy
    + Client Proxy
        + LocalStrage Proxy
        + SessionStrage Proxy
        + WebSQL Proxy

+ Reader/Writer = データの保存形式を知っていて、それとモデルの変換をする

    + Json Reader/Writer
    + XML Reader/Writer

+ Proxy/Reader/Writerは、クラス単独で使うことはなく、
  モデルやストアの`proxy`コンフィグに設定します。

        proxy: {
            type: 'ajax',
            url: 'data/mydata.php',
            reader: {
                type: 'json'
                rootProperty: 'data'
            }
        }

### データを試す

次のコードをコピーして、今作っているアプリを実行中のChromeデベロッパーツールのコンソールにペーストして実行してみましょう。
サーバーがどんなデータを返すのかを見ることができます。

    @example
    Ext.require('Ext.Ajax', function() {
        Ext.Ajax.request({
            url: 'http://sencha.sunvisor.net/persons.php',
            method: 'get',
            success: function(ret) {
                var obj = Ext.decode(ret.responseText);

                console.table(obj.data);
            }
        });
    });

本来は通信できない他のドメインのデータに、Ajaxで通信していますが、
サーバー側でXHR2でのクロスドメイン通信を可能にしているので、
普通に通信できます。

## やってみよう #05

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl04.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

それではモデルにプロキシを設定しましょう。

### モデルにプロキシを追加

モデルにプロキシを設定して、先ほどのサーバーからデータを取得するようにします。

    Ext.define('ContactList.model.Contact', {
        extend: 'Ext.data.Model',

        config: {

            fields: [
                { name: 'name', type: 'string' },
                { name: 'name_kana', type: 'string' },
                { name: 'gender', type: 'string' },
                { name: 'dob', type: 'date' },
                { name: 'mobile_phone', type: 'string' },
                { name: 'email', type: 'string' }
            ],

            // ここから
            proxy: {
                type: 'ajax',
                id: 'egg-contact-list'
            }
            // ここまで
        }
    });

### Model/Storeをapp.jsに定義

* 作成したModelとStoreをアプリケーションに読み込ませます。
* そのためには、app.jsファイルのコンフィグに次のものを追加します。

        models: [
            'Contact'
        ],

        stores: [
            'Contacts'
        ],

### コンソールで確認

* 実際にデータを取得できるかどうかを試しましょう。
* 次のコードをChromeデベロッパーツールのコンソールにコピペして実行してみましょう。

        @example
        store = Ext.getStore('Contacts');
        store.load(function() {
            store.each(function(rec) { console.log(rec.get('last_name')) })
        });

* 25名分のデータがコンソールに表示されます。
* ページパラメータの既定値が、limit=25だからです。
