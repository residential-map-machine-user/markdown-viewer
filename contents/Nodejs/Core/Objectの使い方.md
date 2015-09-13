{ "a": b}みたいなオブジェクトの扱いについて
===
オブジェクトが戻り値として帰ってくる時は
obj.aでアクセスすることでbがvalueとして帰ってくる

例えばhttp://localhost:8080?aho=aho で送られてきたrequestの処理について

    var http = require("http");
    var url = require("url");
    var server = http.createServer();
    server.listen(8080, "localhost");
    server.on('request', function(request, response){

      var urlElements = url.parse(request.url, false);
      response.write("query:" + urlElements.query);
      response.end();
    })

    server.listen(8080, "localhost");

これで画面にはaho=ahoという結果が帰ってくるはず

書き方としてはもう一つある


    response.write("query:" + urlElements["query"] );
同じ結果が帰ってくる！このとき注意するのは文字列として入れてあげること!
