gulpのタスクとは
---
gulpはタスクに必要なmoduleをinstallしてrequireしてpipeして渡す。
pipeして渡すというのはnode.jsはstream apiを持つのでデータにフィルターをかけて出力するということになる。<br>
例えばsassをタスクとして追加する際には次にようになる

まずはinstallする   

    npm install node-sass --save-dev

そして実際のコードは次のようになる.

    var sass = require("node-sass");
    gulp.task("sass", function(){
        gulp.src("./sass/**.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css/"));
    });

これが最も簡単なtaskの書き方になる。<br>


やっていることとしては
gulp.src(path:String)でソースコードを文字列で読み込んでくる。それをパスから内容を取得してくる。そのstreamをsass()に渡してあげるこれは、moduleの特徴の一つでexportしている関数が一つし叶い時は自動で気にその関数に引数としてデータが与えられる。

従ってモジュールもある一定の規則が守られているためにpipeをつなげることができる。つなげることができないタイプのpipeとしてはmoduleの仕様上変換したものがコメントなどからドキュメントを返し、destをgulp.destで指定しなければいけない場合hそこで一つのtask都するしかない.

ちなみに連続してpipeする際ににはこんな感じがいいと思う

    var plumber = require("gulp-plumber");
    var browser = require("browzer-sync");

    gulp.task("sass", function(){
        gulp.src("sass/**.scss").pipe(plumber())pipe(sass()).pipe(gulp.des()"css/").pipe(browzer.reload({stream: true}));
    });

これでtaskを実行した時にbrowzerのreloadが行われる。そしてエラーが出ても落ちない。
