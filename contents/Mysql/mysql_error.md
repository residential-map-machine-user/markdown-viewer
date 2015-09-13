mysqlでエラーが出て若干はまった
---

## The server quit without updating PID file
いままで正常に動いていたし、特に何かをしたという記憶もないのだけれど
データベースに接続させて開発を進めようとしたら接続できなくなっていた。

mysqlのinstallはbrewで行っていた。
そしてでたエラーはpidがupdateされていないとかなんとか。
考えられる要因は3つすでにpocess mysqlが起動していること。
もう一つは権限がおかしくなっていること、ファイルが壊れた。

一つ目のプロセスがすでに起動しているかもということに対しては

    ps -ef | grep mysql

で確認してやる.もしこの時点で起動しているものがあったとしたら

    sudo kill -9 pid

で起動中のprocessをkillしてやる。

これで

    mysql.server start

によって起動が確認できたら完了。

mysqlの起動に関係するファイルの権限を確認しに行く.
---

これはいつものls -laを使って確認するだけ。
brewの場合は次のようにして移動して行う。

    ls -laF /usr/local/var/mysql
    sudo chown -R mysql /usr/local/var/mysql/

chown に-Rオプションをつけてやるとディレクトリの中身を再帰的に所有者変更を行ってやることができる。


    mysql.server start

これで起動が確認できた。
