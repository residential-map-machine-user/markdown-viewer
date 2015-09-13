callback関数の書き方
===
自分でmoduleを作成するときに必要な知識。nodeはイベントドリブンで動作しているのでcallback関数の定義は必須のもの。
####コールバック関数はrequestにたいしてのリアクションを関数として定義したもの。特に非同期処理の際にはいつ結果が帰ってくるのかがわからないため帰ってきたことを教えてくれるものになっている。

callback関数
---
実際にcallback関数を作成してみる。ここで注意するポイントはerrが発生したらすぐ投げるということ！

    var fs = require('fs');
    var path = require('path');
    module.exports = function searchFile(dirPath, extName, callback){
        fs.readdir(dirPath, function(err, list){
            //error があったらすぐ戻り値を返す
            if(err){
                return callback(err, list);
            }
            //リストのフィルターは条件がtrueだったときのみのエレメントを新しいlistに入れて返す

            list.filter(functoin(file){
                return path.extname(file) == "." + extName;
            });
            return callback(null, list);
        });
    }
ちなみにfilterのわかりやすい導入例のコードを示しておく

    function isBigEnough(value) {
        return value >= 10;
    }
    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered is [12, 130, 44]
