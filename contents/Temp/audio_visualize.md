音のビジュアライズはどうやるのか?
---
フーリエ変換を使うことによって実現する。
波形を周波数で分割してくれる方式。

フーリエ変換を簡単に実装させてくれるライブラリに該当するのが
createJSのSoundJsというライブラリ。

再生方式は
+ HTMlAudioPlugin
+ WebAudioPlugin
+ Flash

といった選択肢がある
WebAudioPluginの場合は
解析はcreateJsを使っている。６４分割している。

createjs.Sound.on("fileload", function(){})


WebAudioPluginでフーリエ変換を行う。

はまったところは
サウンドループ時に途切れてしまう。mp3ではよくないwavに変換する都いい
soundjs-Next.min.jsもしくはver0.5を使うことでchromeのみぎがわから音が聞こえない問題が解消される。
