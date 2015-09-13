VirtualMachineを作成してnodejsを入れるまでの流れ
---
vagrantをvirtualboxのinstallはdmgでinstallできるので割愛する.
vagrantでvritual machineを作成したいディレクトリに移動する。
移動したら,

    vagrant init

これでvagrantの設定file Vagrantfileができるのでその設定を変更していく。
もしくはcommandから引数を渡してあげて設定もできる。

    vagrant init hashicorp/precise32

これはどの仮想管渠をinstallするか、vagrantでいうboxを指定している。atlasというところが多くのboxを持っている。
上記のように書くと
### ubuntu 32bit 12.04がinstallされる　

centosの場合は

    //https://atlas.hashicorp.com/puphpet/boxes/centos65-x64
    vagrant init puphpet/centos65-x64
    vagrant up --provider virtualbox

によって追加される。

nodejsの環境構築
---
まずはリポジトリを追加する。
仕組みとしてはyumのepelつまりはExtra Packages for Enterprise LinuxでFedoraやubuntuのような
最新の環境で開発を行いたいときに追加するrepositoryを既存のrepositoryに追加する。

    yum install epel-release


次にepelのrepositoryから必要なものをinstallする

    yum install nodejs npm --enablerepo=epel

そして最後にnodejsはcとC++でも開発されているためもちろんnpmでもcやc＋＋を使うものもあるので
c++を入れておく

    yum install gcc gcc-c++


これで
    node -v
を実行するとnodeのversionと

    npm -v

でnpmのバージョンが表示される.
