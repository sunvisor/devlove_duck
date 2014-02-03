## NavigationView

* NavigationViewを使って、Detailビューを表示するようにします。
* Ext.navigation.Viewを継承したクラス、ContactList.view.Naviを作ります。
* ヘッダーにボタンを3つ追加します。追加・編集・保存
* ボタンの表示は追加以外は非表示にします
* Requiresには配置する予定のビュークラス2つをセットします。

        Ext.define('ContactList.view.Navi', {
            extend: 'Ext.navigation.View',

            alias: 'widget.contactnavi',

            requires: [
                'ContactList.view.List',
                'ContactList.view.Detail'
            ],

            config: {
                navigationBar: {
                    items: [{
                        xtype: 'button',
                        text: '追加',
                        itemId: 'addButton',
                        hidden: false,
                        align: 'right'
                    }, {
                        xtype: 'button',
                        text: '編集',
                        itemId: 'editButton',
                        hidden: true,
                        align: 'right'
                    }, {
                        xtype: 'button',
                        text: '保存',
                        itemId: 'saveButton',
                        hidden: true,
                        align: 'right'
                    }]
                },

                items: [{
                    xtype: 'contactlist'
                }]
            }
        });

### Mainビューの変更

* requires配列の`'ContactList.view.List'`を`'ContactList.view.Navi'`に変更します。
* itemsの一つ目の`xtype`を`contactlist`から`contactview`に変更します。
* 表示してみるとcontactlistが表示されている状態になっています。　


