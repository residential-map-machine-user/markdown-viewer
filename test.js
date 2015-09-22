
//今から作成するのディレクトリ構成をタグ付けしてdatabaseに保存するプログラム
var fs = require('fs');
var path = require('path');
var rootdir = __dirname + "/contents";
var dbUtil = require('./js/database.js');
var dtUtil = require('./js/dataUtil.js');
var marked = require('marked');
//ここで覚えておきたいのはbooleanで返す場合にはエラーの処理はいらない
//理由: true or false で帰ってくるのにerrは発生しないはず
searchDir(rootdir);
//ここで持っておきたいのはgenreとcategoryとtitleとcontents
function searchDir(dirPath) {
    if (fs.existsSync(dirPath)) {
        var dirs = [];
        var buff = dirPath;
        var attributes = [];
        var index = 6;
        if(!matchAsFile(dirPath)){
            dirs = fs.readdirSync(dirPath);
        }
        dirs.forEach(function(dir) {
            index = 6;
            if(!matchAsSecretDir(dirPath + "/" + dir)){
                //初期化
                if (attributes[0] != setPathElement(dirPath, index)) {
                    attributes = [];
                }
                attributes = [];
                //Pathの6番目を取得
                if (attributes.length == 0 && setPathElement(dirPath + "/" + dir, index) && setPathElement(dirPath + "/" + dir, index) != ".DS_Store") {
                    attributes.push(setPathElement(dirPath + "/" + dir, index));
                }
                //Pathの7番目を取得
                if (attributes.length == 1) {
                    index = 7;
                    if(setPathElement(dirPath + "/" + dir, index) != null){
                        attributes.push(setPathElement(dirPath + "/" + dir, index));
                    }
                }
                //Pathの8番目を取得
                if (attributes.length == 2) {
                    index = 8;
                    if(setPathElement(dirPath + "/" + dir, index) != null){
                        attributes.push(setPathElement(dirPath + "/" + dir, index));
                    }
                }

                var fileFlag = false;
                console.log(dirPath + "/" + dir);
                //要素が存在する
                if(attributes.length > 0){
                    //拡張子チェック
                    for(var i = 0; i < attributes.length; i++){
                        //ここで重要なのはファイルに含まれるときのみにdatabaseに登録されるようにすること
                        console.log(i + ":" + attributes[i]);
                        if(matchAsFile(attributes[i])){
                            fileFlag = true;
                        }
                        console.log(fileFlag);
                    }
                }
                insertDatabase(attributes, fileFlag);
                console.log("________________________________________");
                searchDir(dirPath + "/" + dir);
            }
        });
    }
}

//指定した一のpathをセットする
function setPathElement(filePath, index) {
    var buff = filePath.split(path.sep);
    if (buff.length > index) {
        return buff[index];
    } else {
        return null;
    }
}

//拡張子のチェック
function matchAsFile(target) {
    var re = /\./;
    return re.test(target);
}

//隠しディレクトリチェック
function matchAsSecretDir(target){
    var re = /\.DS_Store/;
    return re.test(target);
}

//配列の要素に応じてデータベースに保存
function insertDatabase(attributes, fileFlag){
    if (!fileFlag) {
        return;
    }
    var title = "";
    var genre = "";
    var category = "";
    var contents = "";
    var appendPath = "";
    if(attributes.length == 1){
        console.log("attribtuets length :1");
        title = attributes[0];
        appendPath = attributes[0];
        contents = fs.readFileSync(rootdir + "/" + appendPath).toString();
    }else if(attributes.length == 2){
        console.log("attribtuets length :2");
        title = attributes[1];
        category = attributes[0];
        appendPath = attributes[0] + "/" + attributes[1];
        contents = fs.readFileSync(rootdir + "/" + appendPath).toString();
    }else if(attributes.length == 3){
        console.log("attribtuets length :3");
        title = attributes[2];
        genre = attributes[1];
        category = attributes[0];
        appendPath = attributes[0] + "/" +  attributes[1] + "/" + attributes[2];
        console.log(rootdir + "/" + appendPath);
        contents = fs.readFileSync(rootdir + "/" + appendPath).toString();
    }
    console.log(marked(contents));
    console.log(dtUtil.getLocalTime());
    var created_dt =dtUtil.getLocalTime();
    dbUtil.insertCodeInfo(category,genre,title,marked(contents),created_dt['time']);
    var buff = dbUtil.selectCodeInfo();
    console.log("buff" + buff);
}
