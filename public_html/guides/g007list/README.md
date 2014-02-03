## Listビューの作成

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

### やってみよう #06

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl05.zip)
> ドキュメントルートのeggディレクトリの最多に解凍してください。

ドキュメントルートのeggディレクトリの最多に解凍してください。
* app/view ディレクトリの下にList.jsファイルを作ります。
* List.jsファイルに、Ext.Listを拡張してデータを表示するリストを作ります。

        Ext.define('ContactList.view.List', {
            extend: 'Ext.List',

            alias: 'widget.contactlist',

            requires: [
                'ContactList.store.Contacts'
            ],

            config: {
                title: '連絡先リスト',
                store: 'Contacts',
                itemTpl: '{name}'
            }
        });


### Mainビューの変更

* タブの最初のitemsにContactList.view.Listを表示させます。
* タブの次のitemsは、このアプリについての説明を書きます。

        Ext.define('ContactList.view.Main', {
            extend: 'Ext.tab.Panel',

            alias: 'widget.main',

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

                        styleHtmlContent: true,
                        scrollable: true,

                        items: {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: 'Inovation Egg'
                        },

                        html: [
                            'このアプリは、Inovation Egg での Sencha Touch ハンズオン サンプルプログラムです。'
                        ].join("")
                    }
                ]
            }
        });

* 表示してみましょう。


### やってみよう #07

※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
[こちらからダウンロードして](http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl07.zip)
ドキュメントルートのeggディレクトリの下に解凍してください。

### storeのsorters

* 並び替えをするには、ストアに`sorters`コンフィグを設定します。

        sorters: ['name_kana'],

### indexBar

* indexBarを表示させるには、Listに`indexBar`コンフィグを設定します。

        indexBar: true

* さらにストアに`groupers`コンフィグを設定します。

        grouper: {
            groupFn: function (record) {
                return record.get('name_kana')[0];
            }
        }

* 英字しか表示されないので、日本語の文字を表示させます。

        indexBar: {
            letters: [
                'あ','か','さ','た','な','は','ま','や','ら','わ'
            ]
        }

### disclose

* `onItemDisclosure` コンフィグを `true` にすると、リストにディスクロージャーが表示されます。
* ついでに行選択ができないようにしておきます。`disableSelection: true`


