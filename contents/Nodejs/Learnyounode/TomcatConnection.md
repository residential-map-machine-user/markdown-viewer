TomcatでNginxと連携させるとき
---
apacheとの連携は今まではajpで接続していたけれどプロトコルはhttpで接続して大丈夫。ただしそうする場合はtomcat側の設定もhttpで記述しておかなければいけない

        <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
        />

具体的には上のコードになる。そうしてproxy_passにnginx側でhttpで通してやればいい。
