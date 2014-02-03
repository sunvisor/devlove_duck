## 表示の調整

### やってみよう #12

※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
[こちらからダウンロードして](http://preview.xenophy.com/xenophy/senchaug/egg/misc/cl12.zip)
ドキュメントルートのeggディレクトリの下に解凍してください。

* NavigationViewのBackボタンのキャプションを変えたい。

        defaultBackButtonText: '戻る',

* `selectfield`のボタンのキャプションを変えたい。

        defaultPhonePickerConfig: {
            doneButton: {text: '完了'},
            cancelButton: {text: 'キャンセル'}
        }

* `datepickerfield`のボタンのキャプションを変えたい。
  `picker`コンフィグに次を追加。

        doneButton: {text: '完了'},
        cancelButton: {text: 'キャンセル'},

* `datepickerfield`のスロットを日本に合わせたい。
  `picker`コンフィグに次を追加。

        slotOrder: ['year', 'month', 'day']

* 月の表示を変える
  Editパネルの初期化時に月の表記を変えてしまう。

        initialize: function() {

            Ext.Date.monthNames = [
                '1月', '2月', '3月', '4月', '5月', '6月', '7月',
                '8月', '9月', '10月', '11月', '12月'
            ];

            this.callParent(arguments);
        },


