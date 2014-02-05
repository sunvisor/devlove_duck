## Detailコントローラー

次に`Detail`ビューの制御をするコントローラーを作成します。

* Sencha Cmdでコントローラーを作成します。

        sencha generate controller Detail

* app.jsに追加します。

        controllers: [
            'List',
            'Detail'
        ],

### refs

        refs: {
            navi: 'contactnavi',
            detail: 'contactdetail',
            editButton: 'button#editButton'
        },

### control

        control: {
            detail : {
                show: 'onShow',
                hide: 'onHide'
            },
            editButton: {
                tap: 'onEditData'
            }
        },

### launch

* 起動時に実行。今回はいらない

### ハンドラー

* `onShow`とonHideでは、ボタンの表示を制御します。

        onShow: function() {
            this.getEditButton().show();
        },

        onHide: function () {
            this.getEditButton().hide();
        },

* onEditDataではEditパネルを作り、DetailパネルのレコードセットしてNavigationViewにプッシュします。

        onEditData: function() {
            var me = this,
                record = me.getDetail().getRecord(),
                edit = Ext.widget('contactedit');

            edit.setRecord(record);
            me.getNavi().push(edit);
        }

* 表示してみましょう。Detailパネルが表示されると編集ボタンが登場し、編集ボタンをタップすると、フォームが表示されます。

* Listコントローラーを変更して新規追加の処理も書きましょう

        onAddData: function() {
            var me = this,
                record = Ext.create('ContactList.model.Contact'),
                edit = Ext.widget('contactedit');

            edit.setRecord(record);
            me.getNavi().push(edit);
        }

* 空のレコードをセットして、Editパネルをプッシュしています。


