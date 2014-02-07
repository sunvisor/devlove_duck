# ソートとインデックスバー

現在表示されているデータは、順番がでたらめです。
これを五十音順にしてみましょう。

## やってみよう #07

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl06.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### Paging

* これまで表示されていたデータは25件。本当は300件のデータがサーバー上にあります。
* ListPagingプラグインを入れます。

        plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }]

* プラグインのクラスを `requires` 配列に追加します。

        requires: [
            'ContactList.store.Contacts',
            'Ext.plugin.ListPaging' // 追加
        ],

* 表示させ、最後までスクロールしてみるとLoad More...と表示され、新しいレコードが読み込まれるようになります。

### Storeのsorters

* 並ぶ順序がバラバラなので並び替えます。
* 並び替えをするには、ストアに `sorters` コンフィグを設定します。

        sorters: ['name_kana'],

* ローカルでソートしているので、まだ順序が正しくありません。

        remoteSort: true,

* 表示させて、正しい順序で動作することを確認しましょう。
* 正しい順序で並ぶのは、今回用意したサーバーが、ちゃんと処理をしているからです。
* Networkタブを見て、送信されているパラメーターを確認しましょう。

### グループ化

* 前のアーティクルの先頭の例のように、グループ化する方法をやってみましょう。
* ここでは、フリガナの頭文字でグループ化します。

* Modelにフィールドを追加します。

        { name: 'initial', type: 'string' }

* ストアに `groupers` コンフィグを設定します。

        grouper: {
            property: 'initial'
        }

* Listにgroupedコンフィグを設定します。

        grouped: true,

* フリガナの頭文字ごとにグループ分けされたのがわかります。

### disclose

* `onItemDisclosure` コンフィグを `true` にすると、リストにディスクロージャーが表示されます。
* ついでに行選択ができないようにしておきます。`disableSelection: true`
