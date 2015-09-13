fsモジュールの使い方
===
fsモジュールの仕様
---
fsモジュールはシェルスクリプトのファイルとディレクトリの読み込み機能を提供してくれる.<br>
戻り値の方はBuffer型つまりはバイナリで返してくる。文字列の変換にはtoStringを使う。
##fs.readefile(path : String) : Buffer
非同期IOの使い方で指定したpathのファイルの中身を文字列として取得する方法.

    var fs = require("fs");
    var filePath = process.argv[2];
    var buf = fs.readFile(filePath,fucntion(err, data){
        if(err){
            throw err;
        }
        //最終行を考慮して行数カウント
        var lineCount = data.toString().split('\n').length - 1;
        console.log(lineCount);
    });
    var content = buf.toString();
    console.log(content);
これでコマンドラインで指定したファイルの中身を表示できる.

fs.readdir(path : String) : list<String>
----
非同期IOで指定したディレクトリのファイル名を取得してくる。

    var fs = require('fs);
    var path  = require('path');
    var dirPath =  process.argv[2];
    var extName = process.argv[3];
    fs.readdir(dirPath, extName, fucntion(err ,list){
        if(err){
            throw err;
        }
        //forEachも非同期でイベントとして引数にfileを受け取る
        //path.extnameは.より後の文字列をstringで返してくれる
        list.forEach(fucntion(file){
            if(path.extname(file) === "." + extName){
                console.log(file);
            }
        });
    });
