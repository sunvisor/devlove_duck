Ext.data.JsonP.g005model({"guide":"<h1 id='g005model-section-%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E4%BD%9C%E3%82%8B'>モデルを作る</h1>\n\n<p>MVCのモデルは、SenchaフレームカークではModelとStoreが担います。</p>\n\n<ul>\n<li>Model: データの定義と1つのレコード</li>\n<li>Store: ローカルでの一時的なストレージ、Modelのコレクション</li>\n<li>Proxy: ModelやStoreにサーバーなどからのデータを取ってきてセットしたり、逆に送信したりしてくれます。</li>\n</ul>\n\n\n<h2 id='g005model-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2304'>やってみよう #04</h2>\n\n<blockquote><p>※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。\n<a href=\"http://sencha.sunvisor.net/devlove/cl03.zip\">こちらからダウンロードして</a>\nドキュメントルートのdevloveディレクトリの下に解凍してください。</p></blockquote>\n\n<h3 id='g005model-section-model%E3%82%92%E4%BD%9C%E3%82%8B'>Modelを作る</h3>\n\n<p>モデルを一つ作ってみましょう。</p>\n\n<ul>\n<li><p>まず、アプリケーションのディレクトリに移動します。</p>\n\n<pre><code>  $ cd ../cl\n</code></pre></li>\n<li><p>次のコマンドでモデルを作ります。</p>\n\n<pre><code>  $ sencha generate model Contact last_name,first_name,last_kana,first_kana,gender,phone,email\n</code></pre></li>\n<li><p>last_name以降はフィールド名ですカンマ区切りですが、間に空白は入れないでください</p></li>\n<li>app/model/Contact.js をエディタで開いて中を見てみます。</li>\n<li><p>type: 'auto' となっているのを全て string に変更します。</p>\n\n<pre><code>  Ext.define('ContactList.model.Contact', {\n      extend: 'Ext.data.Model',\n\n      config: {\n          fields: [\n              { name: 'last_name', type: 'string' },\n              { name: 'first_name', type: 'string' },\n              { name: 'last_kana', type: 'string' },\n              { name: 'first_kana', type: 'string' },\n              { name: 'gender', type: 'string' },\n              { name: 'phone', type: 'string' },\n              { name: 'email', type: 'string' }\n          ]\n      }\n  });\n</code></pre></li>\n</ul>\n\n\n<h3 id='g005model-section-store%E3%82%92%E4%BD%9C%E3%82%8B'>Storeを作る</h3>\n\n<p>モデルの集合体であるStoreを作ります。</p>\n\n<ul>\n<li>app/storeの下にContacts.jsを作ります。</li>\n<li><p>次のコードを入力します。</p>\n\n<pre><code>  Ext.define('ContactList.store.Contacts', {\n      extend: 'Ext.data.Store',\n      requires: [\n          'ContactList.model.Contact'\n      ],\n\n      config: {\n          model: 'ContactList.model.Contact'\n      }\n  });\n</code></pre></li>\n</ul>\n\n","title":"モデルを作る"});