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
	'こうした,': 'こうした,',
	'ああした,': 'ああした,',
	'こいつ': 'こいぼん',
	'あいつ': 'あいぴょん',
	'あきらか%': 'はっきり%',
	'あいまい%': 'ふんわり%',
	'したたか%': 'たくましい%',
	'強か%': 'つよつよな%',
	'あえか%': 'あえかちゃん%',
	'あかね': 'あかねたん',
	'あおい': 'あおいくん',
	'もみじ': 'もみじちゃん',
	'あおば': 'あおばぴょん',
	'あおむk': 'あおむk',
	'うつむ': 'うつむたん',
	'うつむき': 'うつむきくん',
	'あおむき': 'あおむきちゃん',
	'うつぶせ': 'うつぶせぴょん',
	'うつぶせl': 'うつぶせl',
	'うつむけ': 'うつむけたん',
	'うつむけl': 'うつむけl',
	'あおむけ': 'あおむけちゃん',
	'あおむけl': 'あおむけl',
	'たそがれ': 'たそがれくん',
	'あかつき': 'あかつきちゃん',
	'ひそか%': 'こっそり%',
	'あからさま%': 'あからさま%',
	'あかり': 'あかりたん',
	'くらc': 'くらc',
	'あかるc': 'あかるc',
	'あがr': 'あがりくんr',
	'おりl-': 'おりl-',
	'はる': 'はるぴょん',
	'あき': 'あきちゃん',
	'がんばr': 'がんばたん',
	'あきらめl': 'あきらめくんl',
	'しゃっくり': 'しゃっくりぴょん',
	'あくび': 'あくびちゃん',
	'てんし': 'てんしたん',
	'あくま': 'あくまくん',
	'しめl': 'しめl',
	'あけl': 'あけl',
	'とじこめl': 'とじこめぴょんl',
	'あけはなt': 'あけはなt',
	'おろs': 'おろs',
	'くだs': 'くだs',
	'さげl': 'さげl',
	'あげl': 'あげたん',
	'あこがれl': 'あこがれちゃんl',
	'理解@<する>-': '理解@<する>-',
	'ふかc': 'ふかc',
	'あさc': 'あさc',
	'ゆうぎり': 'ゆうぎりたん',
	'あさぎり': 'あさぎりちゃん',
	'ゆうげ': 'ゆうげくん',
	'あさげ': 'あさげぴょん',
	'おととい': 'おとといちゃん',
	'あさって': 'あさってくん',
	'あざけr': 'あざけr',
	'あざむk': 'あざむk',
	'あざやか%': 'あざやか%',
	'よさま': 'よさまちゃん',
	'あしざま': 'あしざまたん',
	'きのう': 'きのうぴょん',
	'きのう,': 'きのうちゃん,',
	'あした': 'あしたくん',
	'あした,': 'あしたちゃん,',
	'扱w': '扱w',
	'あしらw': 'あしらw',
	'きょう,': 'きょうたん,',
	'あす': 'あすちゃん',
	'あす,': 'あすたん,',
	'いんどら': 'いんどらくん',
	'あすら': 'あすらちゃん',
	'だいず': 'だいずぴょん',
	'あずき': 'あずきたん',
	'あせr': 'あせr',
	'おちつk-': 'おちつk-',
	'あせばm': 'あせばm',
	'かじか': 'かじかちゃん',
	'じらs': 'じらs',
	'あせらs': 'あせらs',
	'じら': 'じら',
	'あぜみち': 'あぜみちちゃん',
	'水路': '水路たん',

	'あぜ道': 'あぜ道ちゃん',
	'はたらk': 'はたらくん',
	'まなb': 'まなちゃん',
	'あそb': 'あそぶん',
	'ここ': 'ここだよ',
	'どこか': 'どこかにゃ',
	'あそこ': 'あそこだよ',
	'はずれl': 'はずれん',
	'よけl': 'よけてね',
	'あたr': 'あたるよ',
	'うばw': 'うばうん',
	'あたえl': 'あたえてね',
	'あんた': 'あんたちゃん',
	'あたし': 'あたしだよ',
	'ひややか%': 'ひややか%',
	'あたたかc': 'あたたかん',
	'あたたか%': 'あたたか%',
	'ひえl': 'ひえっち',
	'あたたまr': 'あたたまるん',
	'ふるc': 'ふるるん',
	'あたらしC': 'あたらしん',
	'はずれ': 'はずれだよ',
	'あたり': 'あたりだよ',
	'あたりまえ%': 'あたりまえ%',
	'こちら': 'こちらだよ',
	'そちら': 'そちらだね',
	'あちら': 'あちらだよ',
	'こってり&': 'こってりちゃん&',
	'こってり@': 'こってりちゃん@',
	'あっさり&': 'あっさりちゃん&',
	'あっさり@': 'あっさりちゃん@',
	'あったかc': 'あったかん',
	'あったか,': 'あったかよ,',
	'こっち': 'こっちだよ',
	'そっち': 'そっちだね',
	'あっち': 'あっちだよ',
	'あっぱれ,': 'あっぱれだよ,',
	'さむc': 'さむっぴ',
	'つめたc': 'つめたっぴ',
	'ぬるc': 'ぬるっち',
	'あつc': 'あつっぴ',
	'ちr': 'ちーちゃん',
	'あつまr': 'あつまるん',
	'できあい': 'できあいちゃん',
	'あつらえ': 'あつらえっち',
	'あとさがり': 'あとさがりん',
	'あとあがり': 'あとあがりん',
	'まえがき': 'まえがきん',
	'あとがき': 'あとがきん',
	'あとで,': 'あとでね,',
	'わたくし': 'わたくしだよ',
	'わたし': 'わたしん',

	'あなた': 'あなちゃ',
	'わたくしども': 'わたちたち',
	'あなたがた': 'あなちたち',
	'私たち': 'わたしたち',
	'あなたたち': 'あなたち',
	'ねたm': 'ねたっぴ',
	'あなどr': 'あなちゃん',
	'あね': 'ねぇちゃん',
	'あに': 'にぃちゃん',
	'この,': 'このね',
	'あの,': 'あのね',
	'この世': 'このよ',
	'あの世': 'あのよ',
	'えくぼ': 'えくぼちゃん',
	'あばた': 'あばたちゃん',
	'あひる': 'あひるちゃん',
	'ひあがr': 'ひあがるん',
	'あふれl': 'あふれちゃ',
	'そそぎこm': 'そそぎこむん',
	'あふれだs': 'あふれだよ',
	'てがたc': 'てがたちゃん',
	'あぶな': 'あぶにゃ',
	'あぶなc': 'あぶなちゃん',
	'あほ%': 'あほっぺ%',
	'あほ': 'あほちゃん',
	'からc': 'からっち',
	'にがc': 'にがち',
	'あまc': 'あまっぴ',
	'つっかかr': 'つっかかるん',
	'あまえl': 'あまえんぼ',
	'しおからc': 'しおからちゃん',
	'あまずっぱc': 'あまずっぱちゃん',
	'わずか,': 'わずかだよ',
	'あまた,': 'たくさんだよ',
	'きたえl': 'きたえっこ',
	'あまやかs': 'あまやかっちゃ',
	'けして,': 'けしてね',
	'ぜんぜん,': 'ぜんぜんだよ',
	'あまり,': 'あまりね',
	'ひでり': 'ひでりん',
	'あめふり': 'あめふりちゃん',
	'あやうc': 'あやうち',
	'つけこm': 'つけこむん',
	'あやかr': 'あやかるん',
	'たしか%': 'たしかだよ%',
	'あやふや%': 'あやふやちゃん%',
	'あやまr': 'あやまん',
	'かきつばた': 'かきつばたん',
	'あやめ': 'あやめちゃん',
	'にきえみし': 'にきえみしん',
	'あらえみし': 'あらえみしん',
	'なぎ': 'なぎちゃん',
	'あらし': 'あらしん',
	'ゆずr': 'ゆずっち',
	'あらそw': 'あらそっちゃ',
	'とある,': 'とあるよ',
	'あらゆる,': 'あらゆるよ',
	'かくs': 'かくん',
	'あらわs': 'あらわすよ',
	'あらわ%': 'あらわちゃん%',
	'なし': 'ないん',
	'あり': 'ありん',
	'むり%': 'むりっぴ%',
	'ムリ%': 'むりっち%',
	'ありえl': 'ありえちゃ',
	'くだらなc': 'くだらなちゃん',
	'ありがたc': 'ありがたん',
	'どういたしまして': 'どういたしましてだよ',
	'ありがとう': 'ありがとっちゃ',
	'ありがとうございます': 'ありがとうございますだよ',
	'ありきたり%': 'ありきたりちゃん%',
	'みせかけ': 'みせかけちゃん',
	'見せかけ': 'みせかけっち',
	'ありのまま': 'ありのままだよ',
	'ありふれl': 'ありふれてるよ',
	'あり得l': 'あり得るよ',
	'はしr': 'はしるよ',
	'あるk': 'あるよ',
	'あるいは,': 'あるいはね',
	'あるがまま': 'あるがままだよ',
	'各種': 'いろいろん',
	'ある種': 'あるしゅ',
	'なg': 'なーん',
	'あれ': 'あれっち',
	'あわc': 'あわっち',
	'わけl': 'わけちゃ',
	'あわせl': 'あわせん',
	'あわせ': 'あわせん',
	'じれったc': 'じれったん',
	'あわただしC': 'あわただしん',
	'あわれm': 'あわれん',
	'ずんだ': 'ずんだん',
	'あんこ': 'あんこちゃん',
	'だいふく': 'だいふくん',
	'あんころ': 'あんころん',
	'きぐ': 'きぐちゃん',
	'きぐ@': 'きぐちゃん@',
	'あんど': 'あんどん',
	'あんど@': 'あんどん@',
	'こんな,': 'こんなよ',
	'あんな,': 'あんなよ',
	'けっして,': 'けっしてね',
	'ちっとも,': 'ちっともだよ',
	'あんまり,': 'あんまりん',
	'肉まん': 'にくまん',
	'あんまん': 'あんまんだよ',
	'パフェ': 'ぱふぇちゃん',
	'あんみつ': 'あんみつちゃん',
	'きk': 'きちゃん',
	'たりl': 'たりん',
	'わるc': 'わるよ',
	'いw': 'いいよ',
	'いr': 'いられるよ',
	'いC': 'いだよ',

	'はい,': 'はいっぴ,',
	'いいえ,': 'いいえっぴ,',
	'懸命%': '懸命っぴ%',
	'いいかげん%': 'いいかげんっぴ%',
	'みなs': 'みなっち',
	'いいなs': 'いいなっち',
	'気の毒%': '気の毒っぴ%',
	'いい気味%': 'いい気味っぴ%',
	'きずつk': 'きずつっぴ',
	'やm': 'やっち',
	'いえl': 'いえっぴ',
	'ころs': 'ころっち',
	'いかs': 'いかっち',
	'なで肩': 'なで肩っぴ',
	'いかり肩': 'いかり肩っぴ',
	'しn': 'しっち',
	'いきl': 'いきっぴ',
	'くたばr': 'くたばっぴ',
	'いきかえ': 'いきかえっぴ',
	'いきかえr': 'いきかえっぴr',
	'しn-': 'しn-',
	'いまさら,': 'いまさらっぴ,',
	'やっと,': 'やっとっぴ,',
	'今更,': '今更っぴ,',
	'いきなり,': 'いきなりっぴ,',
	'すべて': 'すべてっぴ',
	'いくつか': 'いくつかっぴ',
	'いくつもの,': 'いくつものっぴ,',
	'いくつかの,': 'いくつかのっぴ,',
	'すじこ': 'すじこっち',
	'いくら': 'いくらっぴ',
	'いくらか': 'いくらかっぴ',
	'ださc': 'ださっち',
	'いけてl': 'いけてっぴ',
	'かばw': 'かばっち',
	'いじめl': 'いじめっぴ',
	'おもいやり': 'おもいやりっぴ',
	'しんせつ%': 'しんせつっぴ%',
	'しんせつ': 'しんせつっぴ',
	'思いやり': '思いやりっぴ',
	'いじわる%': 'いじわるっぴ%',
	'いじわる': 'いじわるっぴ',
	'かつて': 'かつてっぴ',
	'いずれ': 'いずれっぴ',
	'ひま%': 'ひまっぴ%',
	'ヒマ%': 'ヒマっぴ%',
	'いそがしC': 'いそがしCっぴ',
	'なさr': 'なさっち',
	'いたc': 'いたっち',
	'いたs': 'いたっち',
	'いたずら%': 'いたずらっぴ%',
	'ふもと': 'ふもとっぴ',
	'いただき': 'いただきっぴ',
	'ごちそうさま': 'ごちそうさまっぴ',
	'ごちそうさまでした': 'ごちそうさまでしたっぴ',
	'いただきます': 'いただきますっぴ',
	'さしあげl': 'さしあげっぴ',
	'いだたk': 'いだたっぴ',
	'バナナ': 'バナナっぴ',
	'いちご': 'いちごっぴ',
	'にどと,': 'にどとっぴ,',
	'いちども,': 'いちどもっぴ,',
	'ぎすぎす,': 'ぎすぎすっぴ,',
	'いちゃいちゃ,': 'いちゃいちゃっぴ,',
	'かえで': 'かえでっぴ',
	'いちょう': 'いちょうっぴ',
	'ひときれ': 'ひときれっぴ',
	'いっさい': 'いっさいっぴ',
	'いっしょ%': 'いっしょっぴ%',
	'ちょっと,': 'ちょっとっぴ,',
	'ちょっとだけ,': 'ちょっとだけっぴ,',
	'ちょっぴり': 'ちょっぴりっぴ',
	'いっぱい,': 'いっぱいっぴ,',
	'いっぱい': 'いっぱいっぴ',
	'すこしずつ,': 'すこしずつっぴ,',
	'ちょっとずつ,': 'ちょっとずつっぴ,',
	'ひとつずつ,': 'ひとつずつっぴ,',
	'ひとつひとつ,': 'ひとつひとつっぴ,',
	'一つずつ,': '一つずつっぴ,',
	'一つ一つ,': '一つ一つっぴ,',
	'少しずつ,': '少しずつっぴ,',
	'いっぺんに,': 'いっぺんにっぴ,',
	'どこで,': 'どこでっぴ,',
	'どこに,': 'どこにっぴ,',
	'いつ,': 'いつっぴ,',
	'いまに,': 'いまにっぴ,',
	'かつて,': 'かつてっぴ,',
	'今': '今っぴ',
	'今,': '今っぴ,',
	'いつか': 'いつかっぴ',
	'いつか,': 'いつかっぴ,',
	'いまだけは,': 'いまだけはっぴ,',
	'今だけは,': '今だけはっぴ,',
	'今日だけは,': '今日だけはっぴ,',
	'いつまでも,': 'いつまでもっぴ,',
	'いまだけ': 'いまだけっぴ',
	'さっき': 'さっきっぴ',
	'たまに,': 'たまにっぴ,',
	'ときおり,': 'ときおりっぴ,',
	'ときどき,': 'ときどきっぴ,',
	'今だけ': '今だけっぴ',
	'時おり,': '時おりっぴ,',
	'時折,': '時折っぴ,',
	'いつも': 'いつもっぴ',
	'いつも,': 'いつもっぴ,',
	'ほんとう': 'ほんとうっぴ',
	'いつわり': 'いつわりっぴ',
	'いまわしC': 'いまわしCっぴ',
	'いとしC': 'いとしCっぴ',
	'かみなり': 'かみなりっぴ',
	'いなずま': 'いなずまっぴ',
	'いなせ%': 'いなせっぴ%',
	'いなづま': 'いなづまっぴ',
	'ねこ': 'ねこっち',
	'いぬ': 'いぬっち',
	'のろw': 'のろっぴ',
	'いのr': 'いのっぴ',
	'くま': 'くまっち',
	'いのしし': 'いのししっぴ',
	'かね': 'かねっち',
	'いのち': 'いのちっぴ',
	'てれl': 'てれっぴ',
	'いばr': 'いばっぴ',
	'むかし': 'むかしっぴ',
	'むかし,': 'むかしっぴ,',
	'いま': 'いまっぴ',
	'いま,': 'いまっぴ,',
	'けっこう%': 'けっこうっぴ%',
	'けっこう,': 'けっこうっぴ,',
	'とっても,': 'とってもっぴ,',
	'結構%': '結構っぴ%',
	'結構,': '結構っぴ,',
	'いまいち%': 'いまいちっぴ%',
	'いまいち,': 'いまいちっぴ,',
	'こないだ': 'こないだっぴ',
	'このあいだ': 'このあいだっぴ',
	'いましがた': 'いましがたっぴ',
	'今や,': '今やっぴ,',
	'いまだ,': 'いまだっぴ,',
	'いまだに,': 'いまだにっぴ,',
	'いまなら,': 'いまならっぴ,',
	'いまでも,': 'いまでもっぴ,',
	'おとうと': 'おとうとっぴ',
	'いもうと': 'いもうとっぴ',
	'きずつけl': 'きずつけっぴ',
	'いやs': 'いやっち',

	'おどr':'おどりん',
	'うたw':'うたっぴ',
	'うたがw':'うたがっぴ',
	'こごえl':'こごえっぴ',
	'凍えl':'凍えっぴ',
	'うだr':'うだっぴ',
	'うちあけl':'うちあけっぴ',
	'やまとんちゅ':'やまとんちゅっち',
	'うちなんちゅ':'うちなんちゅっち',
	'やまとんちゅう':'やまとんちゅうっち',
	'うちなんちゅう':'うちなんちゅうっち',
	'ちきゅう':'ちきゅっぴ',
	'うちゅう':'うちゅっぴ',
	'しっかり':'しっかりちゃん',
	'しっかり,':'しっかりちゃん,',
	'しっかり@':'しっかりちゃん@',
	'うっかり':'うっかりちゃん',
	'うっかり,':'うっかりちゃん,',
	'うっかり@':'うっかりちゃん@',
	'うっさc':'うっさっち',
	'うっせぇU':'うっせぇユッケ',
	'うっせえU':'うっせえユッケ',
	'うつr':'うつりん',
	'みにくc':'みにくっち',
	'うつくしC':'うつくしちゃん',
	'ゆめ':'ゆめっぴ',
	'うつつ':'うつっぴ',
	'見上げl':'見上げっぴ',
	'うつむk':'うつむっぴ',
	'うつ伏せ':'うつ伏せっぴ',
	'うつ伏せl':'うつ伏せっぴ',
	'くわしC':'くわしちゃん',
	'さとc':'さとっち',
	'なつかしm':'なつかしメロ',
	'うとc':'うとっち',
	'うとm':'うとメロ',
	'なつかしC':'なつかしちゃん',
	'うとましC':'うとましちゃん',
	'そば':'そばっぴ',
	'うどん':'うどんっぴ',
	'メリケン粉':'メリケン粉っぴ',
	'うどん粉':'うどん粉っぴ',
	'うなr':'うなっぴ',
	'さまたげl':'さまたげっぴ',
	'うながs':'うながっぴ',
	'うめぼし':'うめぼっち',
	'うなぎ':'うなっぎー',
	'のど':'のどっち',
	'喉':'のどっち',
	'うなじ':'うなじっぴ',
	'なまこ':'なまこっち',
	'うに':'うにっち',
	'つつしm':'つつしメロ',
	'うぬぼれl':'うぬぼれっぴ',
	'もたらs':'もたらっぴ',
	'しか':'しかっぴ',
	'まずc':'まずっち',
	'うま':'うまっち',
	'うまc':'うまっち',
	'そら':'そらっち',
	'やま':'やまっち',
	'うみ':'うみっち',
	'やまねこ':'やまねこっち',
	'うみねこ':'うみねこっち',
	'さくら':'さくらっぴ',
	'ほr':'ほっぴ',
	'うめ':'うめっち',
	'うめl':'うめっち',
	'うやむや%':'うやむや%',
	'さげすm':'さげすメロ',
	'うやらm':'うやらメロ',
	'うらぎr':'うらぎっぴ',
	'うらみ':'うらみっち',
	'かい':'かいっち',
	'うり':'うりっち',
	'さみしC':'さみしちゃん',
	'寂しC':'さみしちゃん',
	'淋しC':'さみしちゃん',
	'うるさc':'うるさっち',
	'もちいね':'もちいねっぴ',
	'うるしね':'うるしねっぴ',
	'もち':'もちっぴ',
	'うるち':'うるちっぴ',
	'よろこb':'よろこびっち',
	'うれえl':'うれえっぴ',
	'かなしC':'かなしちゃん',
	'くやしC':'くやしちゃん',
	'うれしC':'うれしちゃん',
	'うろこ':'うろこっち',
	'おちつk':'おちつっぴ',
	'うろたえl':'うろたえっぴ',
	'うわべ':'うわべっぴ',
	'かなでl':'かなでっぴ',
	'むせl':'むせっぴ',
	'えずk':'えずっぴ',
	'えぼしご':'えぼしごっち',
	'えぼしおや':'えぼしおやっち',
	'ざえもん':'ざえもんっち',
	'えもん':'えもんっち',
	'しがなc':'しがなっち',
	'えらc':'えらっち',
	'でーぼー':'でーぼーっぴ',
	'えんじょー':'えんじょーっぴ',
	'けしゴム':'けしゴムっぴ',
	'えんぴつ':'えんぴつっぴ',
	'つまm':'つまメロ',
	'にげl':'にげっぴ',
	'おw-':'おw-',
	'ひk':'ひっぴ',
	'おs-':'おs-',
	'もt':'もっち',
	'おk-':'おk-',
	'おw':'おw',
	'にげl-':'にげっぴ-',
	'おs':'おs',
	'ひk-':'ひっぴ-',
	'おk':'おk',
	'もt-':'もっち-',
	'めい':'めいっち',
	'おい':'おいっち',
	'にげさl':'にげさっぴ',
	'おいかけk-':'おいかけけっぴ-',
	'にげさr':'にげさっぴ',
	'おいかけl-':'おいかけっぴ-',
	'おいかけk':'おいかけっぴ',
	'にげさl-':'にげさっぴ-',
	'おいかけl':'おいかけっぴ',
	'おいつk':'おいつっぴ',
	'おいこs-':'おいこっぴ-',
	'おいこs':'おいこっぴ',
	'おいつk-':'おいつっぴ-',
	'おいしC':'おいしちゃん',
	'まず':'まずっぴ',
	'ひきとめl':'ひきとめっぴ',
	'おいだs-':'おいだっぴ-',
	'おいだs':'おいだっぴ',
	'ひきとめl-':'ひきとめっぴ-',
	'まt':'まっちょ',
	'おいつk-':'おいつきん',
	'はじめl':'はじめっぴ',
	'おえ':'おえっぴ',
	'おえl':'おえっぴー',
	'はじめ':'はじめちゃん',
	'ひつじ':'ひつじちゃん',
	'おおかみ':'おおかみさん',
	'ちいさc':'ちいさっち',
	'おおき':'おおきー',
	'おおきc':'おおきっち',
	'ちいさ':'ちいさちゃん',
	'ちいさな,':'ちいさなちゃん,',
	'おおきな':'おおきなちゃん',
	'おおきな,':'おおきなの',
'おおく':'たくさん',
'おとひめぎみ':'おとひめちゃん',
'おおひめぎみ':'おおひめちゃん',
'こまか%':'ちっちゃな%',
'おおまか%':'おおざっぱ%',
'おおよそ,':'だいたいの',
'おかs':'おかちん',
'おとうさん':'おとうちゃん',
'おかあさん':'おかあちゃん',
'ただいま':'ただいま～',
'おかえり':'おかえり～',
'おかえりなさい':'おかえりなさ～い',
'おかしC':'おかしちゃん',
'ひょっとこ':'ひょっとこちゃん',
'おかめ':'おかめちゃん',
'おこわ':'おこわちゃん',
'おかゆ':'おかゆちゃん',
'とうふ':'とうふちゃん',
'おさまr':'おさまちゃん',
'おきl':'おきちゃん',
'むかえl':'むかえちゃん',
'おくr':'おくちゃん',
'だんなさま':'だんなさま～',
'おくさま':'おくさま～',
'だんなさん':'だんなさん～',
'おくさん':'おくさん～',
'わせ':'わせちゃん',
'おくて':'おくてちゃん',
'ふりがな':'ふりがな～',
'おくりがな':'おくりがな～',
'おさめl':'おさめちゃん',
'たおs':'たおたおs',
'おこs':'おこおこs',
'おこr':'おこりんr',
'おこなw':'おこなうわん',
'ねだr':'ねだるんr',
'へりくだr':'へりくだりんr',
'おごr':'おごりんr',
'にせ':'にせっこ',
'おごじょ':'おごじょりん',
'ひっぱr':'ひっぱりんr',
'おさえl':'おさえっこl',
'ひきよせl':'ひきよせっこl',
'おしのけl':'おしのけっこl',
'ひとりごと':'ひとりごとちゃん',
'無口%':'むくちちゃん%',
'おしゃべり':'おしゃべりん',
'おしゃべり%':'おしゃべりん%',
'おば':'おばちゃん',
'おじ':'おじちゃん',
'祖父':'そふぃー',
'祖母':'そぼちゃん',
'おじいさん':'おじいさま',
'おばあさん':'おばあさま',
'おばさん':'おばさま',
'おじさん':'おじさま',
'おぼっちゃま':'おぼっちゃまん',
'おじょうさま':'おじょうさまん',
'おぼっちゃん':'おぼっちゃん',
'おじょうさん':'おじょうさんん',
'ぼうや':'ぼうやん',
'おばん':'おばんちゃん',
'おじん':'おじんちゃん',
'はからい':'はからいっこ',
'おせっかい':'おせっかいちゃん',
'おそまつさまでした':'おそまつさまん',
'かならず,':'かならずね,',
'まぎれもなく,':'まぎれもなくね,',
'おそらく,':'おそらくね,',
'ふぞろい':'ふぞろいっこ',
'おそろい':'おそろいっこ',
'よろこばしC':'よろこばしCちゃん',
'おそろしC':'おそろしCちゃん',
'麗しC':'麗しCちゃん',
'おぞましC':'おぞましCちゃん',
'おたがいに,':'おたがいにね,',
'かえる':'かえるん',
'蛙':'かえるん',
'おたまじゃくし':'おたまじゃくしっこ',
'からかw':'からかwん',
'おだてl':'おだてっこl',
'はしゃg':'はしゃぎんg',
'おちこm':'おちこmん',
'おちこぼれ':'おちこぼれっこ',
'とまどw':'とまどわん',
'おっとう':'おっとうちゃん',
'おっかあ':'おっかあちゃん',
'おっきc':'おっきcちゃん',
'ちっちゃな,':'ちっちゃなね,',
'おっきな,':'おっきなね,',
'ほざk':'ほざきんk',
'おっしゃr':'おっしゃりんr',
'おひさま':'おひさまん',
'おつきさま':'おつきさまん',
'ほっぺた':'ほっぺたん',
'おでこ':'おでこちゃん',
'すぐれl':'すぐれっこl',
'まさr':'まさりんr',
'おとr':'おとりんr',
'おんな':'おんなのこ',
'おとこ':'おとこのこ',
'ひろいもの':'ひろいものん',
'おとしもの':'おとしものん',
'おととし':'おととしん',
'こども':'こどもちゃん',
'おとな':'おとなりん',
'さわがしC':'さわがしCちゃん',
'おとなしC':'おとなしCちゃん',
'さかr':'さかりんr',
'おむね':'おむねっこ',
'おなか':'おなかん',
'ちがc':'ちがcちゃん',
'ちがw':'ちがwん',
'おなじC':'おなじCちゃん',
'おねえさん':'おねえさんん',
'おにいさん':'おにいさんん',
'おねえちゃん':'おねえちゃんん',
'おにいちゃん':'おにいちゃんん',
'かくれんぼ':'かくれんぼん',
'おにごっこ':'おにごっこちゃん',
'わし':'わしん',
'おぬし':'おぬしっこ',
'めのこ':'めのこちゃん',
'おのこ':'おのこっこ',
'おやすみ':'おやすみん',
'おはよう':'おはようん',
'おひとよし':'おひとよしん',
'およんなr':'およんなrん',
'おひんなr':'おひんなrん',
'おやじ':'おやじん',
'おふくろ':'おふくろちゃん',
'ごはん':'ごはんん',
'おふろ':'おふろん',
'おべっか':'おべっかん',
'おべんちゃら':'おべんちゃらん',
'わすれl':'わすれっこl',
'おぼえl':'おぼえっこl',
'およg':'およぎんg',
'おぼれl':'おぼれっこl',
'おれ':'おれん',
'おまえ':'おまえっこ',
'おめぇ':'おめぇん',
'オラ':'オラン',
'おめえ':'おめえん',
'かるc':'かるcちゃん',
'おもc':'おもcちゃん',
'おもいだs':'おもいだsん',
'おもしろc':'おもしろcちゃん',
'おもなしC':'おもなしCちゃん',
'おもだたしC':'おもだたしCちゃん',
'玩具':'おもちゃ',
'おもてぶせ':'おもてぶせん',
'おもておこし':'おもておこしん',
'おもろなc':'おもろなcちゃん',
'おもろc':'おもろcちゃん',
'ちかw':',~ちかwん',
'おもわせぶr':'おもわせぶrん',
'鯛焼':'鯛焼きちゃん',
'鯛焼き':'鯛焼きちゃん',
'おやき':'おやきん',
'ちょうど,':'ちょうどね,',
'およそ,':'およそね,',
'または,':'またはね,',
'および,':'およびね,',
'のr':'のrん',
'のぼr':'のぼりんr',
'おりl':'おりっこl',
'きさま':'きさまん',
'つm':'つmん',
'のせl':'のせっこl',
'かしこc':'かしこcちゃん',
'はじまr':'はじまrん',
'おわr':'おわりんr',
'はじまり':'はじまりん',
'はじめ':'はじめん',
'おわり':'おわりん',
'おんなじ,':'おんなじね,',
'だっこ':'だっこちゃん',
'だっこ@':'だっこ@ん',
'おんぶ':'おんぶっこ',
'おんぶ@':'おんぶ@ん',
'儂':'儂ん',
'お主':'お主ん',
'ゲス':'ゲスっこ',
'下衆':'下衆ん',
'お人好し':'お人好しっこ',
'オレ':'オレん',
'俺':'俺ん',
'お前':'お前っこ',
'お答え':'お答えっこ',
'お呼び':'お呼びん',
'お絵かき@':'お絵かき@ん',
'一人言':'ひとりごとん',
'独り言':'ひとりごとん',
'お喋り@':'お喋り@ん',
'お喋り':'お喋りん',
'たこ焼き':'たこ焼きちゃん',
'お好み焼き':'お好み焼きちゃん',
'娘':'むすめん',
'お父さん':'おとうさんん',
'お母さん':'おかあさんん',
'ご馳走':'ご馳走ん',
'御馳走':'御馳走ん',
'お粗末':'お粗末ん',
'親父':'おやじん',
'お袋':'お袋っこ',
'ジュース':'ジュースん',
'お酒':'お酒ん',
'ご飯':'ご飯ん',
'お風呂':'お風呂ん',
'ぬすm':'ぬすmん',
'はm':'はmん',
'やぶれl':'やぶれlん',
'よm':'よmん',
'かm':'かmん',
'かt':'かtん',
'かk':'かkん',
'とうさん':'とうさんん',
'かあさん':'かあさんん',
'がっこう':'がっこうん',
'かいしゃ':'かいしゃん',
'でかけl':'でかけlん',
'かえr':'かえrん',
'におい':'においん',
'かおり':'かおりん',
'つまさき':'つまさきん',
'つま先':'つま先ん',
'かかと':'かかとん',
'さけl':'さけlん',
'かかわr':'かかわrん',
'かがm':'かがmん',
'かげr':'かげrん',
'かがやk':'かがやkん',
'ともしび':'ともしびん',
'かがりび':'かがりびん',
'くすぐr':'くすぐrん',
'かきむしr':'かきむしrん',
'かたわら,':'かたわらね,',
'かぎり,':'かぎりね,',
'せいいっぱい,':'せいいっぱいね,',
'かぎりなく,':'かぎりなくね,',
'さらs':'さらsん',
'ばれl':'ばれlん',
'くさc':'くさcちゃん',
'かぐわしC':'かぐわしCちゃん',
'かけがえなc':'かけがえなcちゃん',
'とるにたらなc':'とるにたらなcちゃん',
'とるにたりなc':'とるにたりなcちゃん',
'かけがえのなc':'かけがえのなcちゃん',
'たちどまr':'たちどまrん',
'かけだs':'かけだsん',
'かけぬけl':'かけぬけlん',
'かたまり':'かたまりん',
'かけら':'かけらん',
'みらい':'みらいん',
'かこ':'かこん',
'傷口':'きずぐちん',
'かさぶた':'かさぶたん',
'かざr':'かざrん',
'かしら':'かしらん',
'なめl':'なめlん',
'かじr':'かじrん',
'汗ばm':'汗ばmん',
'かじかm':'かじかmん',
'さだか%':'さだか%',
'激烈%':'激烈%',
'熾烈%':'熾烈%',
'鮮烈%':'鮮烈%',
'かすか%':'かすか%',
'きり':'きりん',
'かすみ':'かすみん',
'もろc':'もろcちゃん',
'やわらかc':'やわらかcちゃん',
'かたc':'かたcちゃん',
'しなやか%':'しなやか%',
'かたくな%':'かたくな%',
'なめくじ':'なめくじん',
'かたつむり':'かたつむりん',
'ちらかr':'ちらかrん',
'かたづk':'かたづkん',
'ちらかs':'ちらかsん',
'かたづけl':'かたづけlん',
'とろけl':'とろけlん',
'かたまr':'かたまrん',
'ほぐs':'ほぐsん',
'かためl':'かためlん',
'すなば':'すなばん',
'かだん':'かだんん',
'ぷよぷよ%':'ぷよぷよ%',
'かちかち%':'かちかち%',
'はぐるま':'はぐるまん',
'かっしゃ':'かっしゃん',
'やまわろ':'やまわろん',
'かっぱ':'かっぱん',
'もしくは,':'もしくはね,',
'かつ,':'かつね,',
'まな':'まなっこ',
'かなw':'かなwん',
'こなた':'こなたん',
'かなた':'かなたん',
'かならずしも,':'かならずしもね,',
'すこし,':'すこしね',
});
