soccket.ioの使い方について
---
一般的にwebの技術は双方向の通史人弱くなっている。接続時間を長くすればCPUに負荷をかけることになる。
これを改善したものとしてWebScoketプロトコルというものがある。
sockect.ioはwebsocketを利用したパッケージである。</br>
簡単な使い方はこんな感じになる。

Socket.ioのインストール
---

    npm install socket.io

シンプルなhttpのserverサイドのコード
---
serverでは次のようにコードを書く

    var http = require('http');
    var server = http.createServer();
    var socket = require('soket.io');
    var io = socket.listen(server);

    //httpのイベントハンドラー
    server.on("request", function(request, response){
        //何かしらの処理
    });
    io.listen(8080);

    io.sockets.on('connection', function(socket){
        socket.on("", function(){
           //イベントハンドラ
        });
        socket.emit("", function(){
           //イベントを発生させる
        });
    });


socket.ioはlistenできるオブジェクトを持っておいて、ioオブジェクトとしてりすんする。
ちなみにwebサーバーを必要としない場合はまた違ったコードになる。
実際には次にようになる。

    var io = require("socket.io")(80);
    io.on('connection', function(socket){
        io.emit("this" ,{will:"be reciived by everyone!");

        socket.on('private message', function(from, msg){
            console.log("I received message from" + from + "message" + message);
        });
        socket.on("disconnect", function(){
            io.emit("user disconnected");
        });
    });

つまりこれはport80番で通信をするけれど、resposeを返さないてことを意味している、
require("socket.io")(80)でhttpサーバを作っているけれどrequesっとresponseを介さない。
