Masonryライブラリを使ったグリッドデザインについて
===
Masonryを使うことで指定した領域にたいして、敷き詰めるようにアイテムを表示することができる。
どのアイテムを対象にするかを一括で指定できる。
指定するのはアイテムの親となるエレメントとアイテム一つ一つ（クラスでの一括指定）
親クラスの指定
---
    var $container = $(".photo_tile");
    $container.addClass("loading");
    var msnry = new Masonry($container[0],{
        itemSelector: '.photo_tile li',
        transitionDuration: "0.2s",
        gutter:0
    });

このコードにはcss側で読み込み中の時に表示するgifを置いてある。

    Masonry(親エレメント:Element, {Option});
    //オプションについて
    {
        再配置するElement : ".****",
        表示にかける時間  : "**s",
        gutter:"隙間"
    }
imagesLoadedについて
---
これもjavascriptライブラリの一つ。指定するのは子供にimgをもつエレメントに対して指定する。


    $container.imagesLoaded(function(){
        msnry.layout();
      }).progress(function(instance, image){
        var result = image.isLoaded ? 'loaded':'broken';
      if(result == "broken"){
        image.img.src = "images/no-image.jpg";
      }
    });

https://plugins.jquery.com/imagesloaded/

imagesLoaded画像が読み込まれた瞬間に動くイベント
ここでレイアウトメソッドで描画する。このほかにも読み込まれるタイミングごとにイベントが用意されている。always,done,failなどである。これは単にイベントをバインドしているだけで**実際に動作するわけではない**

Masonryのイベントとしてレイアウトが完成したタイミングでの処理
---
    msnry.on("layoutComplete", function(){
        if($container.hasClass("loading")){
        $container.removeClass("loading");
        }
    });
loadingクラスを追加してことによって画像を取り外す。


リサイズした時に必ずloadを行う
----
つぎの記述をすることでリサイズするたびに呼ばれる処理を描く

    window.binf('resize', function(){
        //処理
        $container.addClass("loading");
    });
