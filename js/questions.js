const questions = [
      {
        text: "这是谁在银角",
        audio: "asset/audio/一羽/icsnh105078.ogg",
        options: [
          { text: "朝雾一羽", image: "asset/img/asagiri ichiha.jpg", correct: true },
          { text: "妹口さや", image: "asset/img/seguchisaya.jpg", correct: false },
          { text: "桐野かすみ", image: "asset/img/kirinokasumi.jpg", correct: false },
          { text: "木ノ本マヨ", image: "asset/img/kinomoto mayo.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/丽贝卡/sho_003888.ogg",
        options: [
          { text: "所长", image: "asset/img/chief.jpg", correct: true },
          { text: "近江希未", image: "asset/img/ouminozomi.jpg", correct: false },
          { text: "洼井千绘", image: "asset/img/kuboichie.jpg", correct: false },
          { text: "太田部夏海", image: "asset/img/ootabe natsumi.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/亚芽/AME000548.ogg",
        options: [
          { text: "待雪亚芽", image: "asset/img/matsuyukiame.jpg", correct: true },
          { text: "一二三四五", image: "asset/img/utakaneyotsuko.jpg", correct: false },
          { text: "萩野梦", image: "asset/img/haginoyume.jpg", correct: false },
          { text: "秤结衣", image: "asset/img/hakariyui.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/君原结爱/yua_bgv_0003.ogg",
        options: [
          { text: "君原结爱", image: "asset/img/kimiharayua.jpg", correct: true },
          { text: "有濑辉夜", image: "asset/img/arisekaguya.jpg", correct: false },
          { text: "小黑", image: "asset/img/kuro.jpg", correct: false },
          { text: "结城希亚", image: "asset/img/yuukinoa.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/夏咲咏/yomi_003787.ogg",
        options: [
          { text: "夏咲咏", image: "asset/img/natsusakiyomi.jpg", correct: true },
          { text: "春日野穹", image: "asset/img/kasuganosora.jpg", correct: false },
          { text: "鉴纯夏", image: "asset/img/kagamisumika.jpg", correct: false },
          { text: "三田村茜", image: "asset/img/mitamuraakane.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/天城悠音/yne_002497.ogg",
        options: [
          { text: "天城悠音", image: "asset/img/yune.jpg", correct: true },
          { text: "狩叶", image: "asset/img/karuharamukone.jpg", correct: false },
          { text: "爱莉安娜·哈特贝尔", image: "asset/img/ariannaheartbell.jpg", correct: false },
          { text: "御园莓华", image: "asset/img/misonoichika.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/常盘华乃/fem_kan_11229.ogg",
        options: [
          { text: "常磐华乃", image: "asset/img/tokiwakano.jpg", correct: true },
          { text: "藤宫汐音", image: "asset/img/fujimiyashione.jpg", correct: false },
          { text: "光", image: "asset/img/hikari.jpg", correct: false },
          { text: "阿德尔海德", image: "asset/img/Adelheid von Bergstrasse.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/彩濑逢樱/aic_bgv_0016.ogg",
        options: [
          { text: "彩濑逢樱", image: "asset/img/aiyaseaisa.jpg", correct: true },
          { text: "黑濑樱良", image: "asset/img/kurosesakura.jpg", correct: false },
          { text: "海堂凪子", image: "asset/img/kaidounagiko.jpg", correct: false },
          { text: "朝仓雾香", image: "asset/img/asakurakirika.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/御樱禀/rnd_003305.ogg",
        options: [
          { text: "御樱禀", image: "asset/img/misakurarin.jpg", correct: true },
          { text: "千原乃亚", image: "asset/img/chiharanoa.jpg", correct: false },
          { text: "朝仓音姬", image: "asset/img/asakuraotome.jpg", correct: false },
          { text: "月夜野兔姬", image: "asset/img/tsukiyonousagi.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/拉姆纳/lamune_b08_139.ogg",
        options: [
          { text: "碧海拉姆纳", image: "asset/img/aoumilamune.jpg", correct: true },
          { text: "桐岛三羽", image: "asset/img/kirishimamiu.jpg", correct: false },
          { text: "赤锖美果子", image: "asset/img/akasabimikako.jpg", correct: false },
          { text: "春川ゆめ", image: "asset/img/harukawayumu.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/映红/ja_rub_c000276.ogg",
        options: [
          { text: "映红", image: "asset/img/ruby.jpg", correct: true },
          { text: "アキ", image: "asset/img/aki.jpg", correct: false },
          { text: "メイ", image: "asset/img/mei.jpg", correct: false },
          { text: "柴田奏子", image: "asset/img/shibatakanako.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/樱庭琉璃/01h_rur_0130.ogg",
        options: [
          { text: "樱庭琉璃", image: "asset/img/sakurabavictoriaruri.jpg", correct: true },
          { text: "皇歌夜", image: "asset/img/sumeragikaya.jpg", correct: false },
          { text: "葵", image: "asset/img/aoi.jpg", correct: false },
          { text: "新川广梦", image: "asset/img/Shinkawa Hiromu.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/水无月萤/hosn4093207.ogg",
        options: [
          { text: "水无月萤", image: "asset/img/minazukihotaru.jpg", correct: true },
          { text: "埠岛杏", image: "asset/img/fushimaanzu.jpg", correct: false },
          { text: "入谷瑚子", image: "asset/img/irikakoko.jpg", correct: false },
          { text: "越百秋奈", image: "asset/img/kosumoakina.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/泽渡满/mcsnhmc01177.ogg",
        options: [
          { text: "泽渡满", image: "asset/img/sawatarimichiru.jpg", correct: true },
          { text: "王上院流华", image: "asset/img/oujouinruka.jpg", correct: false },
          { text: "黑濑遥", image: "asset/img/kuroseharuka.jpg", correct: false },
          { text: "秋津圆香", image: "asset/img/akitsumadoka.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/泽渡透香/tou-D18H-0431.ogg",
        options: [
          { text: "泽渡透香", image: "asset/img/sawataritouka.jpg", correct: true },
          { text: "川鸠直", image: "asset/img/kawashimanao.jpg", correct: false },
          { text: "八重原柚", image: "asset/img/yaeharayuzu.jpg", correct: false },
          { text: "ディアナ＝レンフォード", image: "asset/img/dianalanford.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/琥珀/kohaku2_1130.ogg",
        options: [
          { text: "琥珀", image: "asset/img/kohaku.jpg", correct: true },
          { text: "龙泉寺爱花", image: "asset/img/ryuusenjiaifa.jpg", correct: false },
          { text: "铃山美里", image: "asset/img/suzuyamamisato.jpg", correct: false },
          { text: "白河日和", image: "asset/img/shirakawahiyori.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/菲亚/FIA1263.ogg",
        options: [
          { text: "菲亚", image: "asset/img/fia.jpg", correct: true },
          { text: "新海天", image: "asset/img/niimisora.jpg", correct: false },
          { text: "蕾娜", image: "asset/img/lena.jpg", correct: false },
          { text: "八六", image: "asset/img/86.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/藤堂tsumugi/TUMU_tumu_h02_097.ogg",
        options: [
          { text: "藤堂紬", image: "asset/img/toudoutsumugi.jpg", correct: true },
          { text: "月城爱丽丝", image: "asset/img/tsukishiroalice.jpg", correct: false },
          { text: "佐佐木柚香", image: "asset/img/sasakiyuka.jpg", correct: false },
          { text: "长橘凉", image: "asset/img/nagahashiryou.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/西崎由衣/V_yui0742.ogg",
        options: [
          { text: "西崎由衣", image: "asset/img/nishizakiyui.jpg", correct: true },
          { text: "高远凛", image: "asset/img/tokatoorin.jpg", correct: false },
          { text: "御前崎悠羽", image: "asset/img/omaezakiyuu.jpg", correct: false },
          { text: "四ツ木柑奈", image: "asset/img/yotsugikanna.jpg", correct: false }
        ]
      },
      {
        text: "这是谁在银角",
        audio: "asset/audio/观波加奈/01721070.ogg",
        options: [
          { text: "观波加奈", image: "asset/img/minamikana.jpg", correct: true },
          { text: "住吉千里", image: "asset/img/sumiyoshichisato.jpg", correct: false },
          { text: "四月一日奏恋", image: "asset/img/watannukikaren.jpg", correct: false },
          { text: "中津川初", image: "asset/img/nakatsugawaui.jpg", correct: false }
        ]
      }
    ];