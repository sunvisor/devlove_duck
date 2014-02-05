# フォームを作る

詳細パネルを表示している状態から、そのデータを編集できるようにしたいので、
まずはフォームを作りましょう。
次の手順でやってみましょう。

* データを編集するフォームビューを作成します。
* データをそのフォームにセットして表示します。
* 変更されたデータをストアに返して更新します。
* 更新されたストアのデータをサーバーに保存します。

## フォーム

フォームは、入力フィールドを配置するコンテナーです。
フィールドやそのデータを操作するための便利なメソッドが用意されています。

このサンプルプログラムのデータを編集できるようなフォームを定義してみましょう。

## やってみよう #10

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl09.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

まずは、フォームを定義します。

    Ext.define('ContactList.view.Edit', {
        extend: 'Ext.form.Panel',

        requires: [
            'Ext.form.FieldSet'
        ],

        alias: 'widget.contactedit',

        config: {
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    label: '氏名',
                    name: 'name'
                }, {
                    xtype: 'textfield',
                    label: 'ふりがな',
                    name: 'name_kana'
                }]
            }]
        }
    });

* 定義をしたら表示をさせたくなりますね。
  NavigationViewにボタンを用意して、それがタップされたら表示するようにしましょう。
* このボタンは後で、データの追加の時に使います。

### NavigationViewにボタンを追加

app/view/Navi.js の configブロックに次のようなコードブロックを追加します。

        navigationBar: {
            items: [{
                xtype: 'button',
                text: '追加',
                itemId: 'addButton',
                hidden: false,
                align: 'right'
            }]
        }

* これはNavigationViewのタイトルバーの設定をするnavigationBarプロパティに、子アイテムとしてボタンを追加しています。
* itemId コンフィグに addButton と設定しています。

### Naviコントローラーの作成

追加したボタンが押された時のリスナーを設定します。
Naviビューで発火するイベントですので、それ用のコントローラーを用意しましょう。

* Sencha Cmdでコントローラーを作成します。

        sencha generate controller Navi.js

* app/controller/Navi.jsが作成されます。
* コントローラーをapp.jsに登録します。

### app.jsにコントローラーを追加

        controllers: [
            'List',
            'Navi'  // 追加
        ],

### Naviコントローラーの設定

* app/controller/Navi.js を開きます。
* `navi` - `xtype`での指定
* `addButton` - `xtype`と`itemId`での指定

* `refs`を設定します。NavigetionViewと追加ボタンへの参照を定義します。

        refs: {
            navi: 'contactnavi',
            addButton: 'button#addButton'
        },

* `control`を定義します。追加ボタンのtapイベントにリスナーを設定します。

        control: {
            addButton: {
                tap: 'onTapAddButton'
            }
        }

* リスナー本体を書きます。ここではフォームを生成してNavigationViewに`push`しています。

        onTapAddButton: function() {
            var me = this,
                form = Ext.create('ContactList.view.Edit');

            me.getNavi().push(form);
        }

* ここで`ContactList.view.Edit`クラスを使っているので`requires`に追加します。

        requires: [
            'ContactList.view.Edit'
        ],

### フォームにフィールドを追加

* 全ての項目をフォームに追加します。
* メールアドレス／電話などはそれ用のフィールドにしましょう。
* 日付を入力できるフィールドもあります。誕生日の欄に使いましょう。
* リストから値を選択できるフィールドもあります。性別の欄に使いましょう。

    [WARN][Anonymous] [Ext.Loader] Synchronously loading 'Ext.field.DatePicker';
    consider adding 'Ext.field.DatePicker' explicitly as a require of the
    corresponding class

* コンソールを見て上のようなメッセージが表示されたら、`requires`に追加が必要です。
* 完成したコードは次のようになります。少し長いですが、難しいものではありません。

        Ext.define('ContactList.view.Edit', {
            extend: 'Ext.form.Panel',

            requires: [
                'Ext.form.FieldSet',
                'Ext.field.DatePicker',
                'Ext.field.Email'
            ],

            alias: 'widget.contactedit',

            config: {
                items: [{
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'textfield',
                        label: '姓',
                        name: 'last_name'
                    }, {
                        xtype: 'textfield',
                        label: '名',
                        name: 'first_name'
                    }, {
                        xtype: 'textfield',
                        label: 'セイ',
                        name: 'last_kana'
                    }, {
                        xtype: 'textfield',
                        label: 'メイ',
                        name: 'first_kana'
                    }]
                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'datepickerfield',
                        label: '誕生日',
                        dateFormat: 'Y-m-d',
                        name: 'birthday',
                        picker: {
                            yearFrom: 1920
                        }
                    }, {
                        xtype: 'selectfield',
                        label: '性別',
                        name: 'gender',
                        options: [{
                            text: '男', value: '男'
                        }, {
                            text: '女', value: '女'
                        }]
                    }]
                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'emailfield',
                        label: 'メール',
                        name: 'email'
                    }, {
                        xtype: 'textfield',
                        label: '携帯電話',
                        // 電話番号用のtouch独自コントロールはないので
                        // componentコンフィグにtype: 'tel' を指定
                        component: {
                            type: 'tel'
                        },
                        name: 'phone'
                    }]
                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'textfield',
                        label: '都道府県',
                        name: 'pref'
                    }, {
                        xtype: 'textfield',
                        label: '市区町村',
                        name: 'add1'
                    }, {
                        xtype: 'textfield',
                        label: '町名',
                        name: 'add2'
                    }, {
                        xtype: 'textfield',
                        label: '番地',
                        name: 'add3'
                    }, {
                        xtype: 'textfield',
                        label: '建物等',
                        name: 'add4'
                    }]
                }]
            }
        });
