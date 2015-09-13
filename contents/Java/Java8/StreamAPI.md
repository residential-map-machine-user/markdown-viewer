Java8 Streamについて
---
javaのstreamでできるようになったこと,pipeline機能が使えるようになった。
特徴としては,
+ Streamの中はラムダ式で記載する。
+ それぞれの処理を分割して記載できる
+ メソッドチェーンにて記載できる。

ということである。これによって得られる恩恵は今まではデータの取得と加工で複雑なコードになっていたのが、下手すれば１lineで作成できるようになったということ。


流れとしては<br>
source=>中間処理=>終端処理

サンプルのコードとしては次のようになる

    List<String> addrList = list.stream()
    .filter(persion -> person.getAge() >=20)
    .map(person -> person.getName())
    .collect(Collectors.toList());

ラムダ式はFunction型と互換性がある。従ってラムダ式で書いてあげればmapの場合はうまくいくようになっている。ちなみに実際に試してみたのは次のコード、問題はimportするときにjava.util.stream.Collectorsを明示しないとダメだった。

    import java.util.*;
    import java.util.stream.Collectors;
    class StreamPra{
        public static void main(String[] args){
            List<String> list = Arrays.asList("javascript", "java", "typescript");
            list.stream().map(s -> s.length() > 3).collect(Collectors.toList()).forEach(System.out::println);
        }
    }

あとはラムダ式の練習として次のような簡単なforEach文を書いた。forEach文はListとHashMapクラスに実装されている。

    import java.util.*;
    class Sample{
        public static void main(String[] args){
            List<String> list = Arrays.asList("C++", "java","C#","javascrip");
            list.forEach(System.out::println);
            list.forEach(s -> System.out.println(s));
            //中間処理の書き方
            System.out.println("///////////////////stream");
            list.stream().filter(s -> s.length() > 3).forEach(System.out::println);
        }
    }

新しくデータ処理をするために追加されたメソッドをあげる。コードはこんな感じになる。

    import java.util.*;

    class SWS{
        public static void main(String[] args){
            List<String> list = Arrays.asList("aaaa", "abgaa", "gggsd");
            long count = list.stream().filter(s -> s.startsWith("a")).count();
            System.out.println(count);
        }
    }
