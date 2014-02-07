# 表示の調整

標準のメッセージやキャプションを変更することができます。
ここではその調整をやってみましょう。

## やってみよう #14

> ※ 直前のハンズオンがうまくいかなかった方のために、ここまでの結果を用意しています。
> [こちらからダウンロードして](http://sencha.sunvisor.net/devlove/cl13.zip)
> ドキュメントルートのdevloveディレクトリの下に解凍してください。

### NavigationViewのBackボタンのキャプションを変えたい。

* NavigationViewのコンフィグに次のものを追加

        defaultBackButtonText: '戻る',

### `selectfield` のボタンのキャプションを変えたい。

* `selectfield` のコンフィグに次を追加

        defaultPhonePickerConfig: {
            doneButton: {text: '完了'},
            cancelButton: {text: 'キャンセル'}
        }

### `datepickerfield` のボタンのキャプションを変えたい。

* `datepickerfield` の `picker` コンフィグに次を追加。

        doneButton: {text: '完了'},
        cancelButton: {text: 'キャンセル'},

### `datepickerfield` のスロットの順番を日本に合わせたい。

  `picker`コンフィグに次を追加。

        slotOrder: ['year', 'month', 'day']

### 月の表示を変える

Editパネルの初期化時に月の表記を変えてしまう。

        initialize: function() {

            Ext.Date.monthNames = [
                '1月', '2月', '3月', '4月', '5月', '6月', '7月',
                '8月', '9月', '10月', '11月', '12月'
            ];

            this.callParent(arguments);
        },




