# サーバーに登録

* 追加、編集した結果をサーバーに保存したくなります。

Sencha Touch ではいくつかの方法でサーバーのデータを更新することができます。

* `Ext.Ajax.request()` メソッドでサーバーとAjax通信をする。
* `Formのsubmit()` メソッドでフォームの内容を送信する。
* StoreのapiコンフィグにCRUD(Create/Read/Update/Delete)のURLをセットして、Storeの更新情報をサーバーに送信する。

### Ext.Ajax.request()

サーバーにAjaxリクエストを送信します。

    Ext.Ajax.request({
        url: 'ajax_demo/sample.json',
        method: 'POST',
        success: function(response, opts) {
            var obj = Ext.decode(response.responseText);
            console.dir(obj);
        },
        failure: function(response, opts) {
            console.log('server-side failure with status code ' + response.status);
        }
    });

### Formのsubmit()

    form.submit({
        url: 'url/to/submit/to',
        method: 'POST',
        success: function() {
            alert('form submitted successfully!');
        }
    });

### Storeのsync()

プロキシのコンフィグで、`url` の代わりに `api` を指定します。

    proxy: {
        type: 'ajax'
        api: {
            create: 'ajax/create.php',
            read:   'ajax/read.php',
            update: 'ajax/update.php',
            destroy:'ajax/delete.php'
        }
    }

Storeに変更を書けた後で、sync() メソッドを呼び出します。

    store.add(rec);
    store.sync();

こうすると、Storeに対する変更が、C/R/U/D の4つのリクエストにまとめられてサーバーに送信されます。

ここでは、2番目のFormの`submit()`メソッドを使ってサーバーにデータを送信しましょう。

## やってみよう #12

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl11.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

やってみよう #13 での onTapSaveButton イベントリスナーでは、ローカルのStoreに更新をかけただけでしたが、ここでは、そのデータをサーバーに送信してみましょう。

* 送信先のURlは、

        http://sencha.sunvisor.net/saveperson.php

* メソッドはPOST
* フォームにはidフィールドがないので、paramsコンフィグでidを渡してやります
* 送信中の待機メッセージを指定できます
* 通信が成功したときには、`success`関数が呼ばれます
  その中でStoreの更新をしましょう
* 失敗した時には`failure`関数が呼ばれます
  メッセージを表示しましょう

`onTapSaveButton` イベントリスナーは次のようになります。

    onTapSaveButton: function() {
        var me = this,
            edit = me.getEdit(),
            record = edit.getRecord(),
            data = edit.getValues(),
            store = Ext.getStore('Contacts');

        edit.submit({
            url: '../../saveperson.php',
            method: 'post',
            params: {
                id: record.get('id')
            },
            waitMsg: {
                xtype: 'loadmask',
                message: '送信中です'
            },

            success: function(form, ret) {
                if( record.phantom ) {
                    store.add(record);
                    store.load();
                }
                record.set(ret.data);
                me.getNavi().pop();
            },
            failure: function(form, ret) {
                Ext.Msg.alert('エラーが発生しました', ret.error);
                me.getNavi().pop();
            }
        });
    }
