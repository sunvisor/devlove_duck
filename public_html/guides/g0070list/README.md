# Listビューの作成

Listというコンポーネントは、その名の通り一覧を表示するためのコンポーネントです。

    @example miniphone preview
    Ext.define('Contact', {
        extend: 'Ext.data.Model',
        config: {
            fields: ['firstName', 'lastName']
        }
    });

    var store = Ext.create('Ext.data.Store', {
       model: 'Contact',
       sorters: 'lastName',

       grouper: {
           groupFn: function(record) {
               return record.get('lastName')[0];
           }
       },

       data: [
           { firstName: 'Tommy',   lastName: 'Maintz'  },
           { firstName: 'Rob',     lastName: 'Dougan'  },
           { firstName: 'Ed',      lastName: 'Spencer' },
           { firstName: 'Jamie',   lastName: 'Avins'   },
           { firstName: 'Aaron',   lastName: 'Conran'  },
           { firstName: 'Dave',    lastName: 'Kaneda'  },
           { firstName: 'Jacky',   lastName: 'Nguyen'  },
           { firstName: 'Abraham', lastName: 'Elias'   },
           { firstName: 'Jay',     lastName: 'Robinson'},
           { firstName: 'Nigel',   lastName: 'White'   },
           { firstName: 'Don',     lastName: 'Griffin' },
           { firstName: 'Nico',    lastName: 'Ferrero' },
           { firstName: 'Jason',   lastName: 'Johnston'}
       ]
    });

    Ext.create('Ext.List', {
       fullscreen: true,
       itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
       store: store,
       grouped: true
    });

## やってみよう #06

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl05.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### Listビューの作成

* app/view ディレクトリの下にList.jsファイルを作ります。
* List.jsファイルに、 `Ext.List` を継承してデータを表示するリストを作ります。

        Ext.define('ContactList.view.List', {
            extend: 'Ext.List',

            xtype: 'contactlist',

            requires: [
                'ContactList.store.Contacts'
            ],

            config: {
                title: '連絡先リスト',
                store: 'Contacts',
                itemTpl: '{last_name} {first_name}'
            }
        });

* Storeを使うので、 `requires` 配列にStoreのクラス名を入れています。
* `store` コンフィグにStoreの名前をセットするだけで、StoreとListをバインドできます。
* `itemTpl` コンフィグにはListに表示する内容のテンプレートを設定します。
  ここでは、`last_name` と `first_name` の二つのフィールドを表示しています。

### Mainビューの変更

* タブの最初の `items` にContactList.view.Listを表示させましょう。
* タブの次の `items` は、このアプリについての説明を書きます。

* app/view/Main.js をエディタで開きます。
* `requires` 配列にある `Ext.Video` の行を削除して、
  `'ContactList.view.List'`
  にします。
* configの中にある `items` 配列の一つ目の要素には、さきほど作ったListを表示させます。
    * `xtype: 'contactlist'`
    * `title: 'Contact'` - これはタブに表示されるタイトル
    * `iconCls: 'list'` - これはタブに表示するアイコン
* `items` 配列の二つ目の要素には、タイトルバーをつけるとともに、アプリケーションの紹介を記述します。
    * `title: 'About'`
    * `iconCls: 'info'`
    * `items` タイトルバーを表示させます。
    * `styleHtmlContent: true` 見た目を調整
    * html ボディの内容をHTMLで設定
* 出来上がったコードは次のようになります。

        Ext.define('ContactList.view.Main', {
            extend: 'Ext.tab.Panel',
            xtype: 'main',
            requires: [
                'Ext.TitleBar',
                'ContactList.view.List'
            ],
            config: {
                tabBarPosition: 'bottom',

                items: [
                    {
                        title: 'Contact',
                        iconCls: 'list',
                        xtype: 'contactlist'
                    }, {
                        title: 'About',
                        iconCls: 'info',

                        items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'DevLove関西'
                            }
                        ],

                        styleHtmlContent: true,

                        html: [
                            'このアプリは',
                            '<strong>DevLove関西</strong>',
                            'でのサンプルアプリです'
                        ].join("")
                    }
                ]
            }
        });

### Storeのロード

app.jsの `launch` メソッドの最後に1行追加して、Storeをロードします。

    Ext.getStore('Contacts').load();

表示してみましょう。

