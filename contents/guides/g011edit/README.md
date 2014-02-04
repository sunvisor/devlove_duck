# データの編集

作ったフォームを使ってデータの編集をしてみましょう。

* Detailビューが表示されている時に、「編集」ボタンをタップするとデータを編集できるようにします。


## やってみよう #11

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl10.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### 手順

* 編集／保存用のボタンをNaviビューに追加します。
* 追加ボタン、編集ボタン、保存ボタンが状況に応じて表示されるようにコントロールします。

### 編集用ボタンの追加

* 次の二つのオブジェクトをnavigationBarのitemsに追加します。

        {
            xtype: 'button',
            text: '編集',
            itemId: 'editButton',
            hidden: true,
            align: 'right'
        }
        {
            xtype: 'button',
            text: '保存',
            itemId: 'saveButton',
            hidden: true,
            align: 'right'
        }

* この二つのボタンは初期状態で「非表示」にしています。

### ボタン表示のコントロール

* Listビューが表示されたとき
    * 追加ボタンを表示

* Detailビューが表示されたとき
    * 編集ボタンを表示

* Editビューが表示されたとき
    * 保存ボタンを表示

* それぞれのビューのshow/hideイベントにリスナーをセットしてコントロールします。

#### app/controller/List.js

* refsにボタンを取得する定義をセット

        addButton: 'button#addButton'

* show/hideイベントリスナーをセット

        control: {
            contactlist: {
                disclose: 'onDisclose',
                show: 'onShow',  // 追加
                hide: 'onHide'   // 追加
            }
        }

* リスナーを書く

        onShow: function() {
            this.getAddButton().show();
        },

        onHide: function () {
            this.getAddButton().hide();
        }

#### app/controller/Edit.js


