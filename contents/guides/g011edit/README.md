## Editビュー

### やってみよう #10

※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
[こちらからダウンロードして](http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl10.zip)
ドキュメントルートのeggディレクトリの下に解凍してください。

Detailビューから「編集」ボタンが押された時、あるいはListビューから「新規」ボタンが押された時に表示するEditビューを作成します。

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

* フォームは`Ext.form.Panel`を継承して作ります。
* `items`配列に入力フィールドを定義します。
* `fieldset`は複数のフィールドをグループにまとめます。
* `textfield`はテキストを入力できるフィールドです。



                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'datepickerfield',
                        label: '誕生日',
                        dateFormat: 'Y-m-d',
                        name: 'dob',
                        picker: {
                            yearFrom: 1940
                        }
                    }, {
                        xtype: 'selectfield',
                        label: '性別',
                        name: 'gender',
                        options: [{
                            text: '男', value: '男'
                        }, {
                            text: '女', value: '女'
                        }],
                        defaultPhonePickerConfig: {
                            doneButton: {text: '完了'},
                            cancelButton: {text: 'キャンセル'}
                        }
                    }]

* `datepickerfield`は日付を入力できるフィールドです。
* `selectfield`は候補の中から選択できるフィールドです。

                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'emailfield',
                        label: 'メール',
                        name: 'email'
                    }, {
                        xtype: 'textfield',
                        label: '携帯電話',
                        component: {
                            type: 'tel'
                        },
                        name: 'mobile_phone'
                    }]

* `emailfield`は、メールアドレスを入力するフィールドです。
* 電話番号入力をする時には、電話番号用のtouch独自コントロールはないので
  `component`コンフィグに`type: 'tel'`を指定してやります。
* ビューができたら、NavigationViewの`requires`配列にこのビューも追加します。

        requires: [
            'ContactList.view.List',
            'ContactList.view.Detail',
            'ContactList.view.Edit'
        ],


