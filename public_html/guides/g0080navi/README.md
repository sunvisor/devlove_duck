## NavigationView

Sencha Touchには、スマートフォンらしいページ切り替えをするときにとても便利な、NavigationViewというコンポーネントがあります。
このハンズオンでも、NavigationViewを使って、選択された人物の詳細情報を表示させることにします。
まずは、パネルを表示させるところまでやります。

## やってみよう #08

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl06.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### Detailビューの作成

* 選択されたデータの内容を表示させるためのビューを作ります。
* ここでは、単にパネルだけのクラスを作ります。

        Ext.define('ContactList.view.Detail', {

            extend: 'Ext.Panel',

            xtype: 'contactdetail',

            config: {
                styleHtmlContent: true,
                html: 'Detail Panel'
            }

        });

### NavigationViewの作成

* `Ext.navigation.View` を継承したクラス、`ContactList.view.Navi` を作ります。
* NavigationViewを使って、このDetailビューを表示するようにします。

        Ext.define('ContactList.view.Navi', {
            extend: 'Ext.navigation.View',

            xtype: 'contactnavi',

            requires: [
                'ContactList.view.List'
            ],

            config: {
                items: [{
                    xtype: 'contactlist'
                }]
            }
        });

### Mainビューの変更

* `requires` 配列の `'ContactList.view.List'` を `'ContactList.view.Navi'` に変更します。
* itemsの一つ目の `xtype` を `contactlist` から `contactview` に変更します。
* 表示してみるとListが表示されている状態になっています。　

### コントローラー

Listコントローラーを作って、
このListで発火されたイベントを制御させ、
ディスクロージャーがタップされたらが表示されるようにします。

* Sencha Cmdでコントローラーを作成します。

        sencha generate controller List

* app/controller/List.js が作成されます。
* コントローラーをapp.jsに登録します。

        controllers: [
            'List'
        ],

### refs

* app/controller/List.js を開きます。
* `refs`に定義したコンポーネントには、 `getFoo()` というゲッター関数が作られます。
* `navi` - `xtype` での指定

        refs: {
            navi: 'contactnavi'
        },

### control

* `control` では、コントロールのイベントとコントローラーメソッドを紐つけます。
* `disclose` イベントに `onDesclose` というメソッドをリスナーとして割り当てます。

        control: {
            contactlist: {
                disclose: 'onDisclose'
            }
        }

### リスナー

Detailパネルのインスタンスを作って、ナビゲーションに追加します。

        onDisclose: function(list, record) {
            var me = this,
                detail = Ext.create('Contactlist.view.Detail');

            me.getNavi().push(detail);
        }

ここで、`Contactlist.view.Detail` クラスのインスタンスを作っているので、`requires` にそのクラスを追加します。

    requires: [
        'ContactList.view.Detail'
    ],


### 動作確認

* ブラウザで動作を確認します。
* ディスクロージャーをタップするとパネルが表示されます。
* パネルが表示された状態でBackボタンをタップすると元のリストに戻ります。
* この状態ではパネルの内容が空ですので、次にパネルにレコードを表示させます。

