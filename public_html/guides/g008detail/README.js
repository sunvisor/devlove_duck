Ext.data.JsonP.g008detail({"guide":"<h2 id='g008detail-section-detail%E3%83%93%E3%83%A5%E3%83%BC'>Detailビュー</h2>\n\n<h3 id='g008detail-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2308'>やってみよう #08</h3>\n\n<p>※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。\n<a href=\"http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl08.zip\">こちらからダウンロードして</a>\nドキュメントルートのeggディレクトリの下に解凍してください。</p>\n\n<p>リストのディスクロージャーがタップされた時に、レコードの内容を表示するパネルを作ります。</p>\n\n<pre><code>Ext.define('ContactList.view.Detail', {\n\n    extend: 'Ext.Panel',\n\n    alias: 'widget.contactdetail',\n\n    config: {\n\n        styleHtmlContent: true,\n        html: 'Detail Panel'\n\n    }\n\n});\n</code></pre>\n\n<h3 id='g008detail-section-%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88'>テンプレート</h3>\n\n<p>フォームへのレコードの設定</p>\n\n<p>html: 'Detail Panel'の代わりに次のテンプレートをセットします。</p>\n\n<pre><code>        tpl: [\n            '&lt;table class=\"contactlist_detail\"&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;氏名&lt;/th&gt;',\n                    '&lt;td&gt;{name}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;ふりがな&lt;/th&gt;',\n                    '&lt;td&gt;{name_kana}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;誕生日&lt;/th&gt;',\n                    '&lt;td&gt;{dob:date(\"Y年m月d日\")}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;性別&lt;/th&gt;',\n                    '&lt;td&gt;{gender}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;携帯電話&lt;/th&gt;',\n                    '&lt;td&gt;{mobile_phone}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n                '&lt;tr&gt;',\n                    '&lt;th&gt;メール&lt;/th&gt;',\n                    '&lt;td&gt;{email}&lt;/td&gt;',\n                '&lt;/tr&gt;',\n            '&lt;/table&gt;'\n        ].join('\\n')\n</code></pre>\n","title":"Detailビューの作成"});