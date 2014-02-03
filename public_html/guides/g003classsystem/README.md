# クラスシステムについて

* 本来はクラスという概念がないJavaScriptですが、Senchaのフレームワークでは、
  JavaScript上に独自のクラスシステムを構築しています。
* クラス定義は、`Ext.define`を使います。

        Ext.define('ContactList.view.Main', {
            extend: 'Ext.tab.Panel',
            xtype: 'main',
            requires: [
                'Ext.TitleBar',
                'Ext.Video'
            ],
            config: {
                tabBarPosition: 'bottom',
                :
                :
        });

* インスタンスの生成はExt.createを使います。

        Ext.create('ContactList.view.Main', {
            :
            :
        });

* ただしMVCの構造に沿って開発していると、主なクラスはフレームワークがインスタンス化してくれます。

