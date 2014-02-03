## Listコントローラーの作成

Listコントローラーを作って、
このListで発火されたイベントを制御させ、
ディスクロージャーがタップされたら詳細フォームが表示されるようにします。

### やってみよう #09

※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
[こちらからダウンロードして](http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl09.zip)
ドキュメントルートのeggディレクトリの下に解凍してください。

* Sencha Cmdでコントローラーを作成します。

        sencha generate controller List

* コントローラーをapp.jsに登録します。

        controllers: [
            'List'
        ],


### Sencha Cmdで作成

    sencha generate controller List

### refs

* `refs`に定義したコンポーネントには、`getFoo()`というゲッター関数が作られます。
* `navi` - `xtype`での指定
* `addButton` - `xtype`と`itemId`での指定

        refs: {
            navi: 'contactnavi',
            addButton: 'button#addButton'
        },

### control

* `control`では、コントロールのイベントとコントローラーメソッドを紐つけます。
* `disclose`    - `onDesclose`
* `show` - `onShow`
* `hide` - `onHide`

        control: {
            contactlist: {
                disclose: 'onDisclose',
                show: 'onShow',
                hide: 'onHide'
            },
            addButton: {
                tap: 'onAddData'
            }
        }

### launch

* 起動時に実行。今回はいらない

### ハンドラー

* NavigationViewに表示をするときには、スタックのようにpush/popして表示を切り替えます。
* `onDesclose`では、Detailパネルを生成してNavigationViewにプッシュします。

        onDisclose: function(list, record) {
            var me = this,
                detail = Ext.widget('contactdetail');

            detail.setRecord(record);
            me.getNavi().push(detail);
        },

* `onShow`とonHideでは、ボタンの表示を制御します。

        onShow: function() {
            this.getAddButton().show();
        },

        onHide: function () {
            this.getAddButton().hide();
        },

* `onAddData`はいまのところ空にしておきましょう。

        onAddData: function() {
        
        }

* ブラウザで表示し、ディスクロージャーとタップするとDetailパネルが表示されます。
* Backボタンを押すと元のリストに戻ります。





