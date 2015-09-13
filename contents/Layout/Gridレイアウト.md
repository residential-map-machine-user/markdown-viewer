グリッドレイアウト
===
グリッドレイアウトは企業サイトECサイト、ポートフォリオなどでよく使われるデザイン方法
ページをグリッドで構成してグリッド相当で考える。
グリッドレイアウト例
----
ページの幅が960pxであり、12等分グリッドで考えると一つあたりのグリッドは80pxに当たる。
そのページを２カラムでデザインするとしたときメニューが2グリッド相当。メインコンテンツが10グリッド相当。
これで後は詳細をデザインするだけで足りる。
    .container {
      width: 955px;
      margin: 0 auto; }

    .grid1,.grid2,.grid3,.grid4,.grid5,.grid6,.grid7,.grid8,.grid9,.grid10,.grid11,.grid12,.grid13,.grid14,.grid15 {
      float: left;
      display: inline;
      margin-left: 5px; }

    .grid1 {
      width: 55px; }

    .grid2 {
      width: 115px; }

    .grid3 {
      width: 175px; }

    .grid4 {
      width: 235px; }

    .grid5 {
      width: 295px; }

    .grid6 {
      width: 355px; }

    .grid7 {
      width: 415px; }

    .grid8 {
      width: 475px; }

    .grid9 {
      width: 535px; }

    .grid10 {
      width: 595px; }

    .grid11 {
      width: 655px; }

    .grid12 {
      width: 715px; }

    .grid13 {
      width: 775px; }

    .grid14 {
      width: 835px; }

    .grid15 {
      width: 895px; }

    .first {
      margin-left: 0;
      clear: left; }

これでクラスに付け加えてやることで簡単にグリッドレイアウトによるデザインができる。
