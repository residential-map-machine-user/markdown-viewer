var json = {};
module.exports = json ={
    exportsArticle: function(contentsRoot, extName, callback){
        var fileUtil = require("./fileUtil");
        var path = require("path");
        //ここでdirnameにはそのコンテンツが置かれるpathを入れたい__dirname/contents/article
        fileUtil.fetchMarkdown(contentsRoot, function(err, files){
            if (err) throw err;
            //ここでやっているのはstreamAPiでマッチしたもののみをfileの配列に返す
            var modfiles = files.filter(function(file){
                return path.extname(file) === "." + extName;
            });
            var unitPath =[];
             modfiles.forEach(function(file){
                unitPath.push(file.replace(__dirname + "/contents", ""));
            });
            var array = [];
            var array2 = [];
            unitPath.forEach(function(file){
                //spliceは破壊的メソッドでその中身を削除している
                var buff  = file.split("/");
                buff.splice(0,1);
                console.log("file list "  + buff);
                //まずは先頭の要素を取得する
                if(array.length == 0 && !matchAsFile(buff[0])){
                    //要素が存在していたら比較をする
                    array.push(buff[0]);
                }else if(array.length > 0 && !matchAsFile(buff[0])){
                    var flag = false;
                    array.forEach(function(element){
                        if(element != buff[0] ){
                            flag = true;
                        }else{
                            flag = false;
                        }
                    });
                    if(flag === true){
                        array.push(buff[0]);
                    }
                }
                if(array2.length == 0 && !matchAsFile(buff[1])){
                    //要素が存在していたら比較をする
                    array2.push(buff[1]);
                }else if(array2.length > 0 && !matchAsFile(buff[1])){
                    var flag = false;
                    array2.forEach(function(element){
                        if(element != buff[1] ){
                            flag = true;
                        }else{
                            flag = false;
                        }
                    });
                    if(flag === true){
                        array2.push(buff[1]);
                    }
                }
                console.log(array);
                console.log(array2);

            });

            //forEachは同期的なメソッドらしい
            //データの加工を進める
            //ここからjsonオブジェクトを本格的に生成していくこととなる
            //まずはカテゴリ-を作成する。
            //分岐処理してカテゴリーなのかfileなのかを確認

            callback(null, modfiles);
        });
    }
}

function makeJsonObject(files){
    //いらないところはreplaceで削除する
    //"/"区切りで配列に格納する
    //jsonでディレクトリ階層に応じてjsonのobjectを作成する.
    //ここからは地道に比較して作成していく
    var unitPath =[];
     modfiles.forEach(function(file){
        unitPath.push(file.replace(__dirname, ""));
    });
    // var jsonObj = {
    //     category:[
    //         java:{
    //             contents:{
    //                 name:"",
    //                 path:""
    //
    //             }
    //             subcategory:{
    //                 contents:{
    //                     name:"",
    //                     path:""
    //                 }
    //                 path: ""
    //             }
    //         },
    //         javascript:{},
    //         rails:{}
    //     ]
    // };


    return jsonObj;
}
function extractArrayAsElement(){

}
function matchAsFile(target){
    var re = /\.md/;
    return re.test(target);
}
