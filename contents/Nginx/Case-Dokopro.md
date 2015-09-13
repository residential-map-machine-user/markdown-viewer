NginxでWebSocketをつなげるまで
---
環境はmicrosoft azure ubuntu14.04,nginx 1.4.6
動作までに実行したコマンド。

ubuntuにnginxをinstallする
---
    # (1) nginxサイトが配布するPGPキーを追加
    curl http://nginx.org/keys/nginx_signing.key | sudo apt-key add -

    # (2) リポジトリを一覧に追加
    sudo sh -c "echo 'deb http://nginx.org/packages/ubuntu/ trusty nginx' >>         /etc/apt/sources.list"
    sudo sh -c "echo 'deb-src http://nginx.org/packages/ubuntu/ trusty nginx' >>     /etc/apt/sources.list"

    # (3) アップデート後、nginxをインストール
    sudo apt-get update
    sudo apt-get install nginx

外部のソースから撮ってきてinstallする際には<br>
wget -O - http://nginx.org/keys/nginx_signing.key | sudo apt-key add -
によってパッケージの正当性を示すものをOSに記録する、
リポジトリに外部からしゅとくしてきたパッケージを追加する。
リポジトリに追加したらupdateによってリポジトリを更新して、その後install が可能になる。


nginxにプロキシパスを設定する。
---

nginxの設定ファイルは/etc/nginx以下に存在している。設定ファイルはnginx.confがメインになっている。編集するのはconf.d以下のファイルになる。conf.dいかの*.confのファイルは全て読み込まれるので容易に個別の設定を行える。実際にsocket.ioと連携させた際の設定ファイルは次のようになる。

    server {
        listen 80;
        server_name socket-server-s.cloudapp.net;
        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
        }

    }

まずは仮想サーバーを立てているのと一緒なのでserverの中にそのプロパティを埋めていく。listenとserver_nameはクライアントから送られてくるものと同一にする。
次に送られてきた時にproxyを設定する。</br>
websocketはまだweb標準ではないのでupgradeなどの定型文を書き、proxy_pathを設定する。

これで接続は問題なくできた。

    sudo service nginx restart

serverをリスタートして接続できた。
