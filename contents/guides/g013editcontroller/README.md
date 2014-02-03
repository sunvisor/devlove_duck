## Editコントローラー

### やってみよう #11

※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
[こちらからダウンロードして](http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl11.zip)
ドキュメントルートのeggディレクトリの下に解凍してください。

ここまででEditパネルが表示できましたが、変更結果を保存させたいと思います。
Editビューの制御をするEditコントローラーを作成します。

* Sencha Cmdでコントローラーを作成します。

        sencha generate controller Edit

* app.jsに追加します。

        controllers: [
            'List',
            'Detail',
            'Edit'
        ],

### refs

        refs: {
            navi: 'contactnavi',
            edit: 'contactedit',
            saveButton: 'button#saveButton'
        },

### control

        control: {
            edit: {
                show: 'onShow',
                hide: 'onHide'
            },
            saveButton: {
                tap: 'onSaveData'
            }
        }

### ハンドラー

* `onShow`と`onHide`では、ボタンの表示を制御します。

        onShow: function() {
            this.getSaveButton().show();
        },

        onHide: function () {
            this.getSaveButton().hide();
        },

* `onSaveData`では入力／訂正されたデータを保存します。

        onSaveData: function() {
            var me = this, 
                record = me.getEdit().getRecord(),
                data = me.getEdit().getValues(),
                store = Ext.getStore('Contacts');
            
            record.set(data);
            if( record.phantom ) {
                store.add(record);
            }
            Ext.getStore('Contacts').sync();
            me.getNavi().pop();
        }

* モデルの`phantom`というプロパティを見ると、そのモデルが新規か訂正かを判断できます。
* 新規の場合にはストアの`add`メソッドで追加しています。
* ストアのsyncメソッドを呼ぶと、ストアに対して施された変更を実際のデータソースに反映します。



