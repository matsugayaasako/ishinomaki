var originalDictionary = Object.create(dictionary);
var antonymDictionary = Object.create(dictionary);
for (var word in dictionary) {
	if (Array.isArray(dictionary[word])) {
		originalDictionary[word] = dictionary[word].slice();
	}
}
dictionary = antonymDictionary;
maxWordLength = Math.max(maxWordLength, 12);

amendDictionary({
'ちいさな,':'おおきな',
'おおきな,':'ちいさな',
'おおく':'すこし',
'おとひめぎみ':'おおひめぎみ',
'おおひめぎみ':'おとひめぎみ',
'こまか%':'おおまか',
'おおまか%':'こまか',
'おおよそ,':'ちょうど',
'おかs':'まもr-',
'おとうさん':'おかあさん',
'おかあさん':'おとうさん',
'ただいま':'おかえり',
'おかえり':'ただいま',
'おかえりなさい':'ただいま',
'おかしC':'つまらなc-',
'ひょっとこ':'おかめ',
'おかめ':'ひょっとこ',
'おこわ':'おかゆ',
'おかゆ':'おこわ',
'とうふ':'おから',
'おさまr':'おきl-',
'おきl':'おさまr-',
'むかえl':'おくr-',
'おくr':'むかえl-',
'だんなさま':'おくさま',
'おくさま':'だんなさま',
'だんなさん':'おくさん',
'おくさん':'だんなさん',
'わせ':'おくて',
'おくて':'わせ',
'ふりがな':'おくりがな',
'おくりがな':'ふりがな',
'おさめl':'おこs-',
'たおs':'おこ',
'おこs':'たお',
'おこr':'わらw-',
'おこなw':'やめl-',
'ねだr':'おご',
'へりくだr':'おご',
'おごr':'ねだ',
'にせ':'おごじょ',
'おごじょ':'にせ',
'ひっぱr':'おさえl-',
'おさえl':'ひっぱr-',
'ひきよせl':'おしのけ',
'おしのけl':'ひきよせ',
'ひとりごと':'おしゃべり',
'無口%':'おしゃべり',
'おしゃべり':'沈黙',
'おしゃべり%':'無口',
'おば':'おばちゃん',
'おじ':'おっちゃん',
'祖父':'おじいちゃん',
'祖母':'おばあちゃん',
'おじいさん':'おじいちゃん',
'おばあさん':'おばあちゃん',
'おばさん':'おばちゃん',
'おじさん':'おじちゃん',
'おぼっちゃま':'おじょうさま',
'おじょうさま':'おぼっちゃま',
'おぼっちゃん':'おじょうさん',
'おじょうさん':'おぼっちゃん',
'ぼうや':'おじょうちゃん',
'おばん':'おじん',
'おじん':'おばん',
'はからい':'おせっかい',
'おせっかい':'はからい',
'おそまつさまでした':'ごちそうさまでした',
'かならず,':'おそらく',
'まぎれもなく,':'おそらく',
'おそらく,':'まぎれもなく',
'ふぞろい':'おそろい',
'おそろい':'ふぞろい',
'よろこばしC':'おそろし',
'おそろしC':'やさし',
'麗しC':'おぞまし',
'おぞましC':'麗し',
'おたがいに,':'一方的に',
'かえる':'~おたまじゃくし',
'蛙':'おたまじゃくし',
'おたまじゃくし':'かえる',
'からかw':'おだてl-',
'おだてl':'からかw-',
'はしゃg':'おちこm-',
'おちこm':'はしゃg-',
'おちこぼれ':'エリート',
'とまどw':'おちつk-',
'おっとう':'おっかあ',
'おっかあ':'おっとう',
'おっきc':'ちっちゃ',
'ちっちゃな,':'おっきな',
'おっきな,':'ちっちゃな',
'ほざk':'おっしゃr-',
'おっしゃr':'ほざk-',
'おひさま':'おつきさま',
'おつきさま':'おひさま',
'ほっぺた':'おでこ',
'おでこ':'ほっぺた',
'すぐれl':'おとr-',
'まさr':'おと',
'おとr':'すぐれl-',
'おんな':'おとこ',
'おとこ':'おんな',
'ひろいもの':'おとしもの',
'おとしもの':'ひろいもの',
'おととし':'再来年',
'こども':'おとな',
'おとな':'こども',
'さわがしC':'おとなし',
'おとなしC':'さわがし',
'さかr':'おとろえl-',
'おむね':'おなか',
'おなか':'おむね',
'ちがc':',~おなじC-',
'ちがw':'おなじC-',
'おなじC':'ちがw-',
'おねえさん':'おにいさん',
'おにいさん':'おねえさん',
'おねえちゃん':'おにいちゃん',
'おにいちゃん':'おねえちゃん',
'かくれんぼ':'おにごっこ',
'おにごっこ':'かくれんぼ',
'わし':'おぬし',
'おぬし':'わし',
'めのこ':'おのこ',
'おのこ':'めのこ',
'おやすみ':'おはよう',
'おはよう':'おやすみ',
'おひとよし':'ゲス',
'およんなr':'おひんな',
'おひんなr':'およんな',
'おやじ':'おふくろ',
'おふくろ':'おやじ',
'ごはん':'おふろ',
'おふろ':'ごはん',
'おべっか':'説教',
'おべんちゃら':'説教',
'わすれl':'おぼえ',
'おぼえl':'わすれ',
'およg':'おぼれl-',
'おぼれl':'およg-',
'おれ':'おまえ',
'おまえ':'おれ',
'おめぇ':'オラ',
'オラ':'おめえ',
'おめえ':'オラ',
'かるc':'おも',
'おもc':'かる',
'おもいだs':'わすれl-',
'おもしろc':'つまらな',
'おもなしC':'おもだたし',
'おもだたしC':'おもなし',
'玩具':'おもちゃ',
'おもてぶせ':'おもておこし',
'おもておこし':'おもてぶせ',
'おもろなc':'おもろ',
'おもろc':'おもろな',
'ちかw':',~おもわせぶr-',
'おもわせぶr':'ちかw-',
'鯛焼':'たいやきゅん',
'鯛焼き':'たいやきゅん',
'おやき':'おやきゅん',
'ちょうど,':'およそ',
'およそ,':'ちょうど',
'または,':'および',
'および,':'または',
'のr':'おりl-',
'のぼr':'おりl-',
'おりl':'のr-',
'きさま':'ご主人様',
'つm':'おろs-',
'のせl':'おろs-',
'かしこc':'おろか%<ね>-',
'はじまr':'おわ',
'おわr':'はじま',
'はじまり':'おわり',
'はじめ':'おわり',
'おわり':'はじめ',
'おんなじ,':'ちがう',
'だっこ':'おんぶ',
'だっこ@':'おんぶ',
'おんぶ':'だっこ',
'おんぶ@':'だっこ',
'儂':'私',
'お主':'ご主人様',
'ゲス':'お人好し',
'下衆':'お人好し',
'お人好し':'ゲス',
'オレ':'お前',
'俺':'あたし',
'お前':'あなた',
'お答え':'お呼び',
'お呼び':'お答え',
'お絵かき@':'お喋り',
'一人言':'お喋り',
'独り言':'お喋り',
'お喋り@':'お絵かき',
'お喋り':'独り言',
'たこ焼き':'お好み焼き',
'お好み焼き':'たこ焼き',
'娘':'お嬢ちゃん',
'お父さん':'父たん',
'お母さん':'母たん',
'ご馳走':'お粗末',
'御馳走':'お粗末',
'お粗末':'御馳走',
'親父':'父たん',
'お袋':'母たん',
'ジュース':'お酒',
'お酒':'ジュース',
'ご飯':'お風呂',
'お風呂':'ご飯',
'ぬすm':'かw-',
'はm':'か',
'やぶれl':'かt-',
'よm':'かk-',
'かm':'なめl-',
'かt':'やぶれl-',
'かk':'よm-',
'とうさん':'とうたん',
'かあさん':'かあたん',
'がっこう':'かいしゃ',
'かいしゃ':'がっこう',
'でかけl':'かえr-',
'かえr':'でかけl-',
'におい':'かおり',
'かおり':'におい',
'つまさき':'かかと',
'つま先':'かかと',
'かかと':'つまさき',
'さけl':'かかわr-',
'かかわr':'さけl-',
'かがm':'のびl-',
'かげr':'かがやk-',
'かがやk':'かげr-',
'ともしび':'かがりび',
'かがりび':'ともしび',
'くすぐr':'かきむし',
'かきむしr':'くすぐ',
'かたわら,':'かぎり',
'かぎり,':'かたわら',
'せいいっぱい,':'かぎりなく',
'かぎりなく,':'せいいっぱい',
'さらs':'かく',
'ばれl':'かくs-',
'くさc':'かぐわしC-',
'かぐわしC':'くさc-',
'かけがえなc':'とるにたりな',
'とるにたらなc':'かけがえのな',
'とるにたりなc':'かけがえのな',
'かけがえのなc':'とるにたりな',
'たちどまr':'かけだs-',
'かけだs':'たちどまr-',
'かけぬけl':'たちどまr-',
'かたまり':'かけら',
'かけら':'かたまり',
'みらい':'かこ',
'かこ':'~みらい',
'傷口':'きずきゅん',
'かさぶた':'かさぶたん',
'かざr':'やつs-',
'かしら':'手下',
'なめl':'かじr-',
'かじr':'なめl-',
'汗ばm':'かじか',
'かじかm':'汗ば',
'さだか%':'かすか',
'激烈%':'かすか',
'熾烈%':'かすか',
'鮮烈%':'かすか',
'かすか%':'さだか',
'きり':'かすみ',
'かすみ':'きり',
'もろc':'かた',
'やわらかc':'かた',
'かたc':'やわらか',
'しなやか%':'かたくな',
'かたくな%':'しなやか',
'なめくじ':'かたつむり',
'かたつむり':'なめくじ',
'ちらかr':'かたづk-',
'かたづk':'ちらかr-',
'ちらかs':'かたづけl-',
'かたづけl':'ちらかs-',
'とろけl':'かたまr-',
'かたまr':'とろけl-',
'ほぐs':'かためl-',
'かためl':'ほぐs-',
'すなば':'かだん',
'かだん':'すなば',
'ぷよぷよ%':'ぷよたん',
'かちかち%':'かちたん',
'はぐるま':'かっしゃ',
'かっしゃ':'はぐるま',
'やまわろ':'かっぱ',
'かっぱ':'やまわろ',
'もしくは,':'かつ',
'かつ,':'もしくは',
'まな':'かな',
'かなw':'やぶれl-',
'こなた':'かなた',
'かなた':'こなた',
'かならずしも,':'ぜんぜん',
'すこし,':'かなり',
'すこしだけ,':'かなり',
'少し,':'かなり',
'少しだけ,':'かなり',
'かなり,':'すこし',
'やがて,':'かねて',
'かねて,':',~やがて',
'わが,':'かの',
'我が,':'かの',
'かの,':',~我が',
'このも':'かのも',
'かのも':'このも',
'ふろしき':'かばん',
'かばん':'ふろしき',
'かぶr':'ぬg-',
'はg':'かぶせl-',
'かぶせl':'はg-',
'よろい':'よろいたん',
'かぶと':'かぶたん',
'さしがさ':'かぶりがさ',
'かぶりがさ':'さしがさ',
'ほっとk':'かまw-',
'かまw':'ほっとk-',
'ほとけさま':'ほとけたま',
'かみさま':'かみたま',
'かむろみ':'かむろき',
'かむろき':'かむろみ',
'ギャリック砲':'かめはめ波',
'かめはめ波':'ギャリック砲',
'すいようび':'かようび',
'かようび':'すいようび',
'にあがr':'_から,おりl-',
'にのr':'_から,おりl-',
'にのぼr':'_から,おりl-',
'からおりl':'_に,のr-',
'にあげl':'_から,おろs-',
'にのせl':'_から,おろs-',
'からおろs':'_に,のせl-',
'じめじめ&':'からから',
'びしょびしょ':'からから',
'びしょびしょ,':'からから',
'からから&':'じめじめ',
'からから':'からぽん',
'からから,':'からぽん',
'にいw':'_から,~きk-',
'からきk':'_に,いw-',
'からさr':'_に,よ',
'にすわr':'_から,たt-',
'からたt':'_に,すわr-',
'こころ':'からだ',
'ごころ':'からだ',
'にいれl':'_から,だs-',
'からだ':'こころ',
'からだs':'_に,いれl-',
'にあつまr':'_から,ち',
'からちr':'_に,あつま',
'からっぽ%':'満タン',
'にはいr':'_から,でl-',
'からでl':'_に,はいr-',
'をおw':'_から,にげl-',
'からにげl':'_を,おw-',
'にはr':'_から,はがs-',
'からはがs':'_に,はr-',
'でおわr':'_から,はじま',
'におわr':'_から,はじま',
'からはじまr':'_で,おわ',
'でおえl':'_から,はじめ',
'におえl':'_から,はじめ',
'からはじめl':'_で,おえ',
'につけl':'_から,はずs-',
'からはずs':'_に,つけl-',
'にあたr':'_から,はずれl-',
'からはずれl':'_に,あたr-',
'につk':'_から,はなれl-',
'からはなれl':'_に,つk-',
'にたs':'_から,ひk-',
'からひk':'_に,たs-',
'にすてl':'_から,ひろw-',
'からひろw':'_に,すてl-',
'ほどけl':'からまr-',
'からまr':'ほどけl-',
'からめl':'ほどk-',
'にくれl':'_から,もらw-',
'からもらw':'_に,くれl-',
'さだめ':'かりそめ',
'かりそめ':'さだめ',
'しげr':'かれl-',
'かれl':'しげr-',
'ひらめ':'かれい',
'かれい':'ひらめ',
'きわめて,':'かろうじて',
'かろうじて,':'きわめて',
'ぬれl':'かわk-',
'かわk':'ぬれl-',
'こわc':'かわい',
'にくc':'かわい',
'にくたらしC':'かわいらし',
'ぬらs':'かわか',
});

/*
'':'',
*/