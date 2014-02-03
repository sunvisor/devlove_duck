# ワークスペースの作成

* ワークスペースとは、Sencha 数のプロジェクトを開発する時の、もとになる一つの環境です。
  このコマンドで、もとになる環境が用意されます。
* `sencha generate workspace` コマンドでワークスペースを作成します。
* senchaコマンドは、実行するときのカレントディレクトリが重要な意味を持ちます。
* `generate workspace` をする時には、本来はSencha Touchのsdkのディレクトリをカレントディレクトリにして実行します。
* カレントディレクトリを移動する代わりに、-sdk オプションでsdkのディレクトリを指定することもできます。

## やってみよう #02

    $ sencha -sdk /path/to/touch-2.3.0 generate workspace .

* 実行したら作成されたディレクトリを見てみましょう。
* packagesとtouchというディレクトリができています。
* また、.sencha という隠しディレクトリもできています。
    * **packages**:  ワークスペースで共通で使うパッケージを入れるところ
    * **touch**: Sencha Touch SDK のコピー 
    * **.sencha**: Sencha Cmdが使う各種設定（ワークスペースで共通のもの）

