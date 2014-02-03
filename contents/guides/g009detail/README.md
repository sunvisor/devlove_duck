## Detailビュー

リストのディスクロージャーがタップされた時に、レコードの内容を表示するパネルを作ります。


### やってみよう #08

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl07.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。


    Ext.define('ContactList.view.Detail', {

        extend: 'Ext.Panel',

        xtype: 'contactdetail',

        config: {

            styleHtmlContent: true,
            html: 'Detail Panel'

        }

    });

### テンプレート

フォームへのレコードの設定

html: 'Detail Panel'の代わりに次のテンプレートをセットします。

            tpl: [
                '<table class="contactlist_detail">',
                    '<tr>',
                        '<th>氏名</th>',
                        '<td>{last_name} {first_name}</td>',
                    '</tr>',
                    '<tr>',
                        '<th>ふりがな</th>',
                        '<td>{last_kana} {first_kana}</td>',
                    '</tr>',
                    '<tr>',
                        '<th>誕生日</th>',
                        '<td>{birthday:date("Y年m月d日")}</td>',
                    '</tr>',
                    '<tr>',
                        '<th>性別</th>',
                        '<td>{gender}</td>',
                    '</tr>',
                    '<tr>',
                        '<th>携帯電話</th>',
                        '<td>{mobile_phone}</td>',
                    '</tr>',
                    '<tr>',
                        '<th>メール</th>',
                        '<td>{email}</td>',
                    '</tr>',
                '</table>'
            ].join('\n')

