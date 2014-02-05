# サーバーに登録

* 追加、編集した結果をサーバーに保存したくなります。

Sencha Touch ではいくつかの方法でサーバーのデータを更新することができます。

* `Ext.Ajax.request()` メソッドでサーバーとAjax通信をする。
* `Formのsubmit()` メソッドでフォームの内容を送信する。
* StoreのapiコンフィグにCRUD(Create/Read/Update/Delete)のURLをセットして、Storeの更新情報をサーバーに送信する。

ここでは、2番目のFormの`submit()`メソッドを使ってサーバーにデータを送信しましょう。

## やってみよう #12

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl11.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

