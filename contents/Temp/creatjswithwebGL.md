creatJSでwebGLを使う
---
EaselJSはwwbglに対応しているの適したものであれば


spriteStageはwebglを使用したstage.
高いフレームレートを維持したままobjectを生成できる。
spriteStageの制約
shape text などの従来のstageクラスで使えたことができ無くなっている。
stageとspriteStageを共存させることができる。
もしくは他のライブラリを使用するという選択肢がある。
pixi.jsなどがそれに当てはまる。

直感てきなapiで実装できる。


足りない機能を自分で実装する.
---
足りない機能
+ 色を変えたい(カラーフィルたー)
+ 加算合成をしたい

マスク機能を実装することでステンシルバッファを使って実装している。
