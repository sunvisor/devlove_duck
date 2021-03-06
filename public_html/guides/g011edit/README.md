# データの編集

作ったフォームを使ってデータの編集をしてみましょう。

* 編集ボタン、保存ボタンをNavigationViewのツールバーに追加します。
* 追加ボタン、編集ボタン、保存ボタンが状況に応じて表示されるようにコントロールします。
* Detailビューが表示されている時に、「編集」ボタンをタップするとデータを編集できるようにします。
* Editビューで保存ボタンをタップするとデータがStoreに保存されるようにします。

## やってみよう #11

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl10.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### 手順

* 編集／保存用のボタンをNaviビューに追加します。

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

#### app/controller/Detail.js

* コントローラーの作成

        sencha generate controller Detail

* refsの定義

        detail: 'contactdetail',
        editButton: 'button#editButton'

* controlの定義

        detail : {
            show: 'onShow',
            hide: 'onHide'
        }

* リスナーを書く

        onShow: function() {
            me.getEditButton().show();
        },

        onHide: function () {
            this.getEditButton().hide();
        }

#### app/controller/Edit.js

* コントローラーの作成

        sencha generate controller Edit

* refsの定義

        edit: 'contactedit',
        saveButton: 'button#saveButton'

* controlの定義

        edit : {
            show: 'onShow',
            hide: 'onHide'
        }

* リスナーを書く

        onShow: function() {
            this.getSaveButton().show();
        },

        onHide: function () {
            this.getSaveButton().hide();
        }

### 編集の実現

Detailビューが表示されている時に、「編集」ボタンをタップするとデータを編集できるようにします。
「編集」ボタンはNaviビューにあるので、Naviコントローラーにリスナーを設定する事にします。

* refsに追加

        editButton: 'button#editButton'

* controlに追加

        editButton: {
            tap: 'onTapEditButton'
        }

* リスナーを追加します。Editビューを表示するとともに、フォームにデータを設定します。

        onTapEditButton: function() {
            var me = this,
                record = me.getDetail().getRecord(),
                edit = Ext.create('ContactList.view.Edit');

            edit.setRecord(record);
            me.getNavi().push(edit);
        }

* レコードは、Detailビューの`getRecord()`メソッドで取得しています。
* そのデータを生成したEditビューの`setRecord()`メソッドで設定しています。
* これだけで、フォームにデータをロードすることができます。

* このリスナーで生成しているビューを`requires`に追加

        requires: [
            'ContactList.view.Edit'
        ]

* 実行してみましょう。Detailビューが表示されているときに、編集ボタンをタップすると、フォームにそのデータが表示されます。

### 保存処理

保存処理は、Editコントローラーに書いていきます。

* refsに追加

        navi: 'contactnavi',

* controlに追加

        saveButton: {
            tap: 'onSaveData'
        }

* リスナーを追加

        onSaveData: function() {
            var me = this,
                record = me.getEdit().getRecord(),
                data = me.getEdit().getValues(),
                store = Ext.getStore('Contacts');

            record.set(data);
            me.getNavi().pop();
        }

* 実行して、フォームの保存ボタンをタップして、実際にデータが一覧に保存されていることを確認します。
* ここでは、ローカルのStoreに保存されただけで、サーバー上のデータは変更されていません。

### データの追加

データの追加も実装しましょう。

* Listビューが表示されているときに、「新規」ボタンをタップするとデータを追加できるようにします。
* 追加ボタンでEditビューが追加されますが、保存ボタンをタップしたときに新規追加されるようにします。

#### リスナーを変更

やってみよう#10 で作った`onTapAddButton`リスナーを変更します。

    onTapAddButton: function() {
        var me = this,
            record = Ext.create('ContactList.model.Contact'),   // 追加 *1
            form = Ext.create('ContactList.view.Edit');

        form.setRecord(record);         // 追加 *2
        me.getNavi().push(form);
    },

* 新しいModelのインスタンスを生成(*1)して
* Formにセットしています(*2)

#### 保存処理の変更（更新時と追加時）

* `onTapSaveButton`リスナーの`record.set(data);`の直後に次のコードを追加します。

        if( record.phantom ) {
            store.add(record);
        }

* これはModelが新しいものだったら、Storeに追加するという処理です。
* `phantom` プロパティはModelのidが確定していない場合に`true`になります。
