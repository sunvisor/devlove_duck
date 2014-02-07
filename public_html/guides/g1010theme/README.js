Ext.data.JsonP.g1010theme({"guide":"<h1 id='g1010theme-section-%E3%83%86%E3%83%BC%E3%83%9E%E3%81%AE%E8%A8%AD%E5%AE%9A'>テーマの設定</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/g1010theme-section-%E6%97%A2%E5%AD%98%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%E3%82%92%E4%BD%BF%E3%81%86'>既存のテーマを使う</a></li>\n<li><a href='#!/guide/g1010theme-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2314'>やってみよう #14</a></li>\n<li><a href='#!/guide/g1010theme-section-%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E3%83%86%E3%83%BC%E3%83%9E%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88'>デバイスによるテーマ切り替え</a></li>\n<li><a href='#!/guide/g1010theme-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2314-2'>やってみよう #14-2</a></li>\n</ol>\n</div>\n\n<ul>\n<li>Sencha Touch では、テーマを変更して見た目を変えることができます。</li>\n<li>標準でいくつかのテーマが用意されています。</li>\n<li>テーマを自分で作ったり、既存のテーマをカスタマイズすることができます。</li>\n<li>今日は、既存のテーマを使う方法をご紹介します。</li>\n</ul>\n\n\n<h2 id='g1010theme-section-%E6%97%A2%E5%AD%98%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%E3%82%92%E4%BD%BF%E3%81%86'>既存のテーマを使う</h2>\n\n<ul>\n<li>ちがうテーマに切り替えるには、app.jsonファイルを変更します。</li>\n</ul>\n\n\n<h2 id='g1010theme-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2314'>やってみよう #14</h2>\n\n<blockquote><p>※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。\n<a href=\"http://sencha.sunvisor.net/devlove/cl13.zip\">こちらからダウンロードして</a>\nドキュメントルートのdevloveディレクトリの下に解凍してください。</p></blockquote>\n\n<ul>\n<li>app.json ファイルで使用するテーマを変更してみます。</li>\n<li><p>css配列で参照しているCSSファイルをapp.cssから、SDKフォルダの中のcupertino.cssに変えてみます。</p>\n\n<pre><code>  \"css\": [\n      {\n          // \"path\": \"resources/css/app.css\",\n          \"path\": \"../touch/resources/css/cupertino.css\",\n          \"update\": \"delta\"\n      }\n  ],\n</code></pre></li>\n<li><p>変更したら、リフレッシュして、app.jsonの変更をbootstrap.jsonに反映させます。</p>\n\n<pre><code>  $ sencha app refresh\n</code></pre></li>\n<li><p>ブラウザで表示するとiOS7風のテーマに変わっています。</p></li>\n</ul>\n\n\n<h2 id='g1010theme-section-%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E3%83%86%E3%83%BC%E3%83%9E%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88'>デバイスによるテーマ切り替え</h2>\n\n<ul>\n<li>Sencha Touchは複数のデバイスで動作します。</li>\n<li>それぞれのデバイスには、独自のテーマがあります。</li>\n<li>Sencha Touchではビルトインでそれぞれのテーマが用意されています。</li>\n<li>そしてプラットフォームを判定して、それに合ったテーマを動的に適用することができます。</li>\n</ul>\n\n\n<h2 id='g1010theme-section-%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86-%2314-2'>やってみよう #14-2</h2>\n\n<ul>\n<li><p>再度app.jsonを変更します。</p>\n\n<pre><code>  \"css\": [\n      {\n          \"path\": \"resources/css/app.css\",\n          \"platform\": [\"desktop\",\"android\"],\n          \"update\": \"delta\"\n      },\n      {\n          \"path\": \"../touch/resources/css/cupertino.css\",\n          \"platform\": [\"ios\"],\n          \"theme\": \"cupertino\",\n          \"update\": \"delta\"\n      }\n  ],\n</code></pre></li>\n<li><p>変更したら、リフレッシュして表示してみます。</p>\n\n<p>  $ sencha app refresh</p></li>\n<li><p>元の状態に戻りました。</p></li>\n<li>次にURLの最後に<code>?platform=ios</code>をつけて表示します。するとiOS7のテーマに切り替わります。</li>\n</ul>\n\n","title":"テーマ"});