Ext.data.JsonP.g007list({"guide":"<h2 id='g007list-section-list%E3%83%93%E3%83%A5%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90'>Listビューの作成</h2>\n\n<p>Listというコンポーネントは、その名の通り一覧を表示するためのコンポーネントです。</p>\n\n<pre class='inline-example miniphone preview'><code>Ext.define('Contact', {\n    extend: 'Ext.data.Model',\n    config: {\n        fields: ['firstName', 'lastName']\n    }\n});\n\nvar store = Ext.create('Ext.data.Store', {\n   model: 'Contact',\n   sorters: 'lastName',\n\n   grouper: {\n       groupFn: function(record) {\n           return record.get('lastName')[0];\n       }\n   },\n\n   data: [\n       { firstName: 'Tommy',   lastName: 'Maintz'  },\n       { firstName: 'Rob',     lastName: 'Dougan'  },\n       { firstName: 'Ed',      lastName: 'Spencer' },\n       { firstName: 'Jamie',   lastName: 'Avins'   },\n       { firstName: 'Aaron',   lastName: 'Conran'  },\n       { firstName: 'Dave',    lastName: 'Kaneda'  },\n       { firstName: 'Jacky',   lastName: 'Nguyen'  },\n       { firstName: 'Abraham', lastName: 'Elias'   },\n       { firstName: 'Jay',     lastName: 'Robinson'},\n       { firstName: 'Nigel',   lastName: 'White'   },\n       { firstName: 'Don',     lastName: 'Griffin' },\n       { firstName: 'Nico',    lastName: 'Ferrero' },\n       { firstName: 'Jason',   lastName: 'Johnston'}\n   ]\n});\n\nExt.create('Ext.List', {\n   fullscreen: true,\n   itemTpl: '&lt;div class=\"contact\"&gt;{firstName} &lt;strong&gt;{lastName}&lt;/strong&gt;&lt;/div&gt;',\n   store: store,\n   grouped: true\n});\n</code></pre>\n\n<h3 id='g007list-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2306'>やってみよう #06</h3>\n\n<blockquote><p>※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。\n<a href=\"http://sencha.sunvisor.net/devlove/cl05.zip\">こちらからダウンロードして</a>\nドキュメントルートのeggディレクトリの最多に解凍してください。</p></blockquote>\n\n<p>ドキュメントルートのeggディレクトリの最多に解凍してください。\n* app/view ディレクトリの下にList.jsファイルを作ります。\n* List.jsファイルに、Ext.Listを拡張してデータを表示するリストを作ります。</p>\n\n<pre><code>    Ext.define('ContactList.view.List', {\n        extend: 'Ext.List',\n\n        alias: 'widget.contactlist',\n\n        requires: [\n            'ContactList.store.Contacts'\n        ],\n\n        config: {\n            title: '連絡先リスト',\n            store: 'Contacts',\n            itemTpl: '{name}'\n        }\n    });\n</code></pre>\n\n<h3 id='g007list-section-main%E3%83%93%E3%83%A5%E3%83%BC%E3%81%AE%E5%A4%89%E6%9B%B4'>Mainビューの変更</h3>\n\n<ul>\n<li>タブの最初のitemsにContactList.view.Listを表示させます。</li>\n<li><p>タブの次のitemsは、このアプリについての説明を書きます。</p>\n\n<pre><code>  Ext.define('ContactList.view.Main', {\n      extend: 'Ext.tab.Panel',\n\n      alias: 'widget.main',\n\n      requires: [\n          'Ext.TitleBar',\n          'ContactList.view.List'\n      ],\n\n      config: {\n          tabBarPosition: 'bottom',\n\n          items: [\n              {\n                  title: 'Contact',\n                  iconCls: 'list',\n                  xtype: 'contactlist'\n              }, {\n                  title: 'About',\n                  iconCls: 'info',\n\n                  styleHtmlContent: true,\n                  scrollable: true,\n\n                  items: {\n                      docked: 'top',\n                      xtype: 'titlebar',\n                      title: 'Inovation Egg'\n                  },\n\n                  html: [\n                      'このアプリは、Inovation Egg での Sencha Touch ハンズオン サンプルプログラムです。'\n                  ].join(\"\")\n              }\n          ]\n      }\n  });\n</code></pre></li>\n<li><p>表示してみましょう。</p></li>\n</ul>\n\n\n<h3 id='g007list-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2307'>やってみよう #07</h3>\n\n<p>※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。\n<a href=\"http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl07.zip\">こちらからダウンロードして</a>\nドキュメントルートのeggディレクトリの下に解凍してください。</p>\n\n<h3 id='g007list-section-store%E3%81%AEsorters'>storeのsorters</h3>\n\n<ul>\n<li><p>並び替えをするには、ストアに<code>sorters</code>コンフィグを設定します。</p>\n\n<pre><code>  sorters: ['name_kana'],\n</code></pre></li>\n</ul>\n\n\n<h3 id='g007list-section-indexbar'>indexBar</h3>\n\n<ul>\n<li><p>indexBarを表示させるには、Listに<code>indexBar</code>コンフィグを設定します。</p>\n\n<pre><code>  indexBar: true\n</code></pre></li>\n<li><p>さらにストアに<code>groupers</code>コンフィグを設定します。</p>\n\n<pre><code>  grouper: {\n      groupFn: function (record) {\n          return record.get('name_kana')[0];\n      }\n  }\n</code></pre></li>\n<li><p>英字しか表示されないので、日本語の文字を表示させます。</p>\n\n<pre><code>  indexBar: {\n      letters: [\n          'あ','か','さ','た','な','は','ま','や','ら','わ'\n      ]\n  }\n</code></pre></li>\n</ul>\n\n\n<h3 id='g007list-section-disclose'>disclose</h3>\n\n<ul>\n<li><code>onItemDisclosure</code> コンフィグを <code>true</code> にすると、リストにディスクロージャーが表示されます。</li>\n<li>ついでに行選択ができないようにしておきます。<code>disableSelection: true</code></li>\n</ul>\n\n","title":"Listビューの作成"});