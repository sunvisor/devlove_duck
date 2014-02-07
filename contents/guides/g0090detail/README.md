## Detailビュー

リストのディスクロージャーがタップされた時に表示されるDetailパネルに、選択されたレコードの内容を表示させます。

パネルにレコードの内容を表示させるためにテンプレートを使います。
Listを作ったときに `itemTpl` を使いましたが、それと同じようにフィールドを表示させるプレースホルダを `{foo}` のように指定することができます。


### やってみよう #09

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl08.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### Modelにフィールドを追加

サーバーから取得している連絡先リストのデータは、実はより多くの情報を持っています。
それらの情報も取得するようにModelの定義を変更し、`fields` に追加します。

        fields: [
            { name: 'last_name', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'last_kana', type: 'string' },
            { name: 'first_kana', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'initial', type: 'string' },
            // ここから追加
            { name: 'pref', type: 'string'},
            { name: 'add1', type: 'string'},
            { name: 'add2', type: 'string'},
            { name: 'add3', type: 'string'},
            { name: 'add4', type: 'string'},
            { name: 'birthday', type: 'date'}
        ],

### テンプレート

フォームへのレコードの設定

`html: 'Detail Panel'` の代わりに次のテンプレートをセットします。

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
                '<th>電話</th>',
                '<td>{phone}</td>',
            '</tr>',
            '<tr>',
                '<th>メール</th>',
                '<td>{email}</td>',
            '</tr>',
            '<tr>',
                '<th>住所</th>',
                '<td>{pref}{add1}{add2}</td>',
            '</tr>',
            '<tr>',
                '<th>住所2</th>',
                '<td>{add3}{add4}</td>',
            '</tr>',
        '</table>'
    ].join('\n')

### パネルへのデータのセット

パネルに設定されたテンプレートにデータを適用させるには、`setData()` メソッドを使います。
コントローラーの `onDisclose` イベントリスナーを変更します。

    onDisclose: function(list, record) {
        var me = this,
        detail = Ext.create('ContactList.view.Detail');

        // パネルにデータをセット
        detail.setRecord(record);
        me.getNavi().push(detail);
    }

* ブラウザで表示してみて、ディスクロージャーをタップしてみます。
* データが表示されたパネルが表示されることを確認してください。
* このようにわずか1行でデータをパネルに反映することができました。
