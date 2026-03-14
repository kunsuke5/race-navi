// レーススケジュールデータ
// JNCC, WEX, JEC, 全日本HED, CGC, 草レースを統合
window.scheduleData = [
  // ─── JNCC ───
  { month: 2, day: 15, dayOfWeek: '日', name: 'JNCC R1 サザンハリケーン', venue: 'プラザ阪下（大阪）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 3, day: 15, dayOfWeek: '日', name: 'JNCC R2 ノースショア トマホーク', venue: '小松海岸（徳島）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 4, day: 19, dayOfWeek: '日', name: 'JNCC R3 ビックディア', venue: 'テージャスランチ（広島）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 5, day: 24, dayOfWeek: '日', name: 'JNCC R4 SEVENTH HEAVEN', venue: 'The きじまスノーパーク（長野）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 6, day: 21, dayOfWeek: '日', name: 'JNCC R5 チーズナッツパーク', venue: 'チーズナッツパーク（福島）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 7, day: 26, dayOfWeek: '日', name: 'JNCC R6 ワイルドボア', venue: '鈴蘭高原スキー場跡地（岐阜）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 9, day: 6, dayOfWeek: '日', name: 'JNCC R7 ビッグバード高井富士', venue: 'X-JAM高井富士（長野）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 10, day: 11, dayOfWeek: '日', name: 'JNCC R8 サンドバレー 八犬伝', venue: '千葉石産 株式会社（千葉）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },
  { month: 11, day: 8, dayOfWeek: '日', name: 'JNCC R9 "AAGP" GAIA', venue: 'ワイルドクロスパーク-GAIA（長野）', series: 'JNCC', url: 'http://www.jncc.jp/pg1329.html' },

  // ─── WEXイースト ───
  { month: 1, day: 11, dayOfWeek: '日', name: 'WEX East R1 成田MXパーク', venue: '成田モトクロスパーク（千葉）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 3, day: 29, dayOfWeek: '日', name: 'WEX East R2 クロスパーク勝沼', venue: 'クロスパーク勝沼（山梨）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 5, day: 3, dayOfWeek: '日', name: 'WEX East R3 GW-GAIA', venue: 'ワイルドクロスパーク-GAIA（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 6, day: 14, dayOfWeek: '日', name: 'WEX East R4 セブンスヘブン', venue: 'The きじまスノーパーク（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 7, day: 12, dayOfWeek: '日', name: 'WEX East R5 ビッグバード高井富士', venue: 'X-JAM高井富士（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 8, day: 15, dayOfWeek: '金', name: 'WEX East R6 Night-x GAIA (8/15-16)', venue: 'ワイルドクロスパーク-GAIA（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 9, day: 20, dayOfWeek: '日', name: 'WEX 全国E (R7) セブンスヘブン', venue: 'The きじまスノーパーク（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 10, day: 18, dayOfWeek: '日', name: 'WEX 全国W (R7) 朽木 SKIリゾート', venue: '朽木スキー場（滋賀）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },
  { month: 11, day: 22, dayOfWeek: '日', name: 'WEX East R8 サンクスギビング GAIA', venue: 'ワイルドクロスパーク-GAIA（長野）', series: 'WEX East', url: 'http://www.jncc.jp/pg1325.html' },

  // ─── WEXウェスト ───
  { month: 1, day: 25, dayOfWeek: '日', name: 'WEX West R1 プレリュードサザン', venue: 'プラザ阪下（大阪）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 4, day: 5, dayOfWeek: '日', name: 'WEX West R2 朽木 SKIリゾート', venue: '朽木スキー場（滋賀）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 5, day: 10, dayOfWeek: '日', name: 'WEX West R3 ビックディア広島', venue: 'テージャスランチ（広島）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 7, day: 5, dayOfWeek: '日', name: 'WEX West R4 ワイルドボア鈴蘭', venue: '鈴蘭高原スキー場（岐阜）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 9, day: 20, dayOfWeek: '日', name: 'WEX 全国E (R5) セブンスヘブン', venue: 'The きじまスノーパーク（長野）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 10, day: 18, dayOfWeek: '日', name: 'WEX 全国W (R6) 朽木 SKIリゾート', venue: '朽木スキー場（滋賀）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 11, day: 15, dayOfWeek: '日', name: 'WEX West R7 アネックスMIKI', venue: 'ミキアネックス（兵庫）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },
  { month: 12, day: 6, dayOfWeek: '日', name: 'WEX West R8 winterサザン', venue: 'プラザ阪下（大阪）', series: 'WEX West', url: 'http://www.jncc.jp/pg1328.html' },

  // ─── JEC 全日本エンデューロ選手権 ───
  { month: 5, day: 10, dayOfWeek: '日', name: 'JEC Rd.1 御所オートランド2DAYS (5/9-10)', venue: '御所オートランド（熊本）', series: 'JEC全日本', url: 'https://jecpromotion.com/2026edschedule/' },
  { month: 6, day: 21, dayOfWeek: '日', name: 'JEC Rd.2 プラザ阪下2DAYS (6/20-21)', venue: 'プラザ阪下（大阪）', series: 'JEC全日本', url: 'https://jecpromotion.com/2026edschedule/' },
  { month: 9, day: 21, dayOfWeek: '月', name: 'JEC Rd.3 日高2DAYS (9/20-21)', venue: '日高町（北海道）', series: 'JEC全日本', url: 'https://jecpromotion.com/2026edschedule/' },
  { month: 10, day: 25, dayOfWeek: '日', name: 'JEC Rd.4 チーズナッツ2DAYS (10/24-25)', venue: 'チーズナッツパーク（福島）', series: 'JEC全日本', url: 'https://jecpromotion.com/2026edschedule/' },

  // ─── 全日本ハードエンデューロ選手権 (全日本HED) ───
  { month: 4, day: 19, dayOfWeek: '日', name: '全日本HED R-1 Kegon HED', venue: '神奈川（KEGON）', series: '全日本HED', url: 'https://hardenduro.jp/' },
  { month: 5, day: 17, dayOfWeek: '日', name: '全日本HED R-2 シシクリ4', venue: '兵庫（シシクリ）', series: '全日本HED', url: 'https://hardenduro.jp/' },
  { month: 7, day: 19, dayOfWeek: '日', name: '全日本HED R-3 ダルマニアクス（※調整中）', venue: '山形', series: '全日本HED', url: 'https://hardenduro.jp/' },
  { month: 9, day: 6, dayOfWeek: '日', name: '全日本HED R-4 TAKMAX', venue: '愛知', series: '全日本HED', url: 'https://hardenduro.jp/' },
  { month: 10, day: 1, dayOfWeek: '？', name: '全日本HED R-5 秋田（※調整中）', venue: '秋田', series: '全日本HED', url: 'https://hardenduro.jp/' },
  { month: 11, day: 1, dayOfWeek: '？', name: '全日本HED R-6 シコクベルグ（※調整中）', venue: '愛媛', series: '全日本HED', url: 'https://hardenduro.jp/' },

  // ─── CGCハードエンデューロ選手権 ───
  { month: 5, day: 31, dayOfWeek: '日', name: 'CGC 第1戦 美濃しらおHARD ENDURO (5/30-31)', venue: 'エナジーアクティブフィールドしらお（岐阜）', series: 'CGC', url: 'https://cgcenduro.jp/' },
  { month: 7, day: 12, dayOfWeek: '日', name: 'CGC 第2戦 信州大町HARD ENDURO (7/11-12)', venue: '信州大町チャレンジフィールド（長野）', series: 'CGC', url: 'https://cgcenduro.jp/' },
  { month: 8, day: 23, dayOfWeek: '日', name: 'CGC 第3戦 大町夜のエンデューロ (8/22-23)', venue: '信州大町チャレンジフィールド（長野）', series: 'CGC', url: 'https://cgcenduro.jp/' },
  { month: 11, day: 8, dayOfWeek: '日', name: 'CGC 第4戦 吉野奈良 HARD ENDURO (11/7-8)', venue: 'ウッズ下市（奈良）', series: 'CGC', url: 'https://cgcenduro.jp/' },

  // ─── JEC エリア選 ───
  // 北海道
  { month: 5, day: 10, dayOfWeek: '日', name: 'JEC北海道 Rd.1 今金大会', venue: '今金町特設会場（今金）', series: 'JECエリア', subSeries: 'JEC北海道', url: 'https://jechkd.wordpress.com/' },
  { month: 6, day: 7, dayOfWeek: '日', name: 'JEC北海道 Rd.2 ルスツビックベアOHVパーク大会', venue: 'ルスツ ビッグベアOHVパーク（留寿都）', series: 'JECエリア', subSeries: 'JEC北海道', url: 'https://jechkd.wordpress.com/' },
  { month: 7, day: 19, dayOfWeek: '日', name: 'JEC北海道 Rd.3 栗山 モンブランパーク大会', venue: '栗山 モンブランパーク（夕張群栗山）', series: 'JECエリア', subSeries: 'JEC北海道', url: 'https://jechkd.wordpress.com/' },
  { month: 8, day: 9, dayOfWeek: '日', name: 'JEC北海道 Rd.4 108 FUNPARK 釧路町大会', venue: '108 FUNPARK 釧路町（釧路）', series: 'JECエリア', subSeries: 'JEC北海道', url: 'https://jechkd.wordpress.com/' },
  { month: 9, day: 20, dayOfWeek: '日', name: 'JEC北海道 Rd.5 HTDE 日高2DAYS', venue: '日高町（広域）', series: 'JECエリア', subSeries: 'JEC北海道', url: 'https://jechkd.wordpress.com/' },

  // 東日本
  { month: 4, day: 26, dayOfWeek: '日', name: 'JEC東日本 Rd.1 成田モトクロスパーク大会', venue: '成田MXパーク（千葉）', series: 'JECエリア', subSeries: 'JEC東日本', url: 'https://www.rrtng.net/' },
  { month: 8, day: 2, dayOfWeek: '日', name: 'JEC東日本 Rd.2 クロスパーク勝沼大会', venue: 'クロスパーク勝沼（山梨）', series: 'JECエリア', subSeries: 'JEC東日本', url: 'https://www.rrtng.net/' },
  { month: 9, day: 6, dayOfWeek: '日', name: 'JEC東日本 Rd.3 遠野大会 (9/5-6)', venue: '遠野特設コース（岩手）', series: 'JECエリア', subSeries: 'JEC東日本', url: 'https://www.rrtng.net/' },
  { month: 10, day: 25, dayOfWeek: '日', name: 'JEC東日本 Rd.4 チーズナッツ2DAYS (10/24-25)', venue: 'チーズナッツパーク（福島）', series: 'JECエリア', subSeries: 'JEC東日本', url: 'https://www.rrtng.net/' },

  // 中日本
  { month: 4, day: 12, dayOfWeek: '日', name: 'JEC中日本 Rd.1 WOODS下市大会', venue: 'WOODSモータースポーツランド下市（奈良）', series: 'JECエリア', subSeries: 'JEC中日本', url: 'https://jecpromotion.com/' },
  { month: 5, day: 3, dayOfWeek: '日', name: 'JEC中日本 Rd.2 池の平ワンダーランド大会', venue: '池の平ワンダーランド（愛知）', series: 'JECエリア', subSeries: 'JEC中日本', url: 'https://jecpromotion.com/' },
  { month: 6, day: 21, dayOfWeek: '日', name: 'JEC中日本 Rd.3 プラザ阪下2DAYS (6/20-21)', venue: 'プラザ阪下（大阪）', series: 'JECエリア', subSeries: 'JEC中日本', url: 'https://jecpromotion.com/' },
  { month: 9, day: 13, dayOfWeek: '日', name: 'JEC中日本 Rd.4 イオックスアローザ大会 (9/12-13)', venue: 'イオックスアローザ（富山）', series: 'JECエリア', subSeries: 'JEC中日本', url: 'https://jecpromotion.com/' },
  { month: 10, day: 11, dayOfWeek: '日', name: 'JEC中日本 Rd.5 O LAND PARK SHISHIHARA大会 (10/10-11)', venue: 'SHISHIHARA', series: 'JECエリア', subSeries: 'JEC中日本', url: 'https://jecpromotion.com/' },

  // 西日本
  { month: 6, day: 7, dayOfWeek: '日', name: 'JEC西日本 Rd.1 ビギナーズエンデューロ大会', venue: 'テージャスランチ（広島）', series: 'JECエリア', subSeries: 'JEC西日本', url: 'https://berexike.wixsite.com/berex/others' },
  { month: 7, day: 19, dayOfWeek: '日', name: 'JEC西日本 Rd.2 ビギナーズエンデューロ大会', venue: 'ホワイトバレー松原（広島）', series: 'JECエリア', subSeries: 'JEC西日本', url: 'https://berexike.wixsite.com/berex/others' },
  { month: 9, day: 6, dayOfWeek: '日', name: 'JEC西日本 Rd.3 ビギナーズエンデューロ大会', venue: 'テージャスランチ（広島）', series: 'JECエリア', subSeries: 'JEC西日本', url: 'https://berexike.wixsite.com/berex/others' },
  { month: 11, day: 8, dayOfWeek: '日', name: 'JEC西日本 Rd.4 ビギナーズエンデューロ大会', venue: 'テージャスランチ', series: 'JECエリア', subSeries: 'JEC西日本', url: 'https://berexike.wixsite.com/berex/others' },

  // 九州
  { month: 3, day: 22, dayOfWeek: '日', name: 'JEC九州 Rd.1 エンジョイ 南島原OFFJAM大会', venue: '南島原OFFJAM（長崎）', series: 'JECエリア', subSeries: 'JEC九州', url: 'https://offjamgamadas0501.wixsite.com/gamadas' },
  { month: 5, day: 10, dayOfWeek: '日', name: 'JEC九州 Rd.2 御所オートランド2DAYS (5/9-10)', venue: '御所オートランド（熊本）', series: 'JECエリア', subSeries: 'JEC九州', url: 'https://offjamgamadas0501.wixsite.com/gamadas' },
  { month: 9, day: 27, dayOfWeek: '日', name: 'JEC九州 Rd.4 エンジョイ 寺山牧場大会', venue: '寺山牧場（鹿児島）', series: 'JECエリア', subSeries: 'JEC九州', url: 'https://offjamgamadas0501.wixsite.com/gamadas' },
  { month: 1, day: 1, dayOfWeek: 'ー', name: 'JEC九州 Rd.5 エンジョイ HSR九州大会', venue: 'HSR九州', series: 'JECエリア', subSeries: 'JEC九州', url: 'https://offjamgamadas0501.wixsite.com/gamadas' },

  // ─── その他のレース（草レース） ───
  { month: 3, day: 15, dayOfWeek: '日', name: 'ウエストポイントカップ 第1戦', venue: 'モトクロスヴィレッジ', series: '草レース', subSeries: 'ウエストポイントカップ', url: 'https://www.motocrossvillage.com/2026/02/28/wpc2026/' },
  { month: 5, day: 31, dayOfWeek: '日', name: 'ウエストポイントカップ 第2戦', venue: 'モトクロスヴィレッジ', series: '草レース', subSeries: 'ウエストポイントカップ', url: 'https://www.motocrossvillage.com/2026/02/28/wpc2026/' },
  { month: 10, day: 18, dayOfWeek: '日', name: 'ウエストポイントカップ 第3戦', venue: 'モトクロスヴィレッジ', series: '草レース', subSeries: 'ウエストポイントカップ', url: 'https://www.motocrossvillage.com/2026/02/28/wpc2026/' },

  { month: 4, day: 19, dayOfWeek: '日', name: 'Y2-XC 第1戦', venue: 'チーズナッツパーク', series: '草レース', subSeries: 'Y2-XC', url: 'http://oyz.blog22.fc2.com/blog-category-4.html' },
  { month: 5, day: 17, dayOfWeek: '日', name: 'Y2-XC 第2戦', venue: 'チーズナッツパーク', series: '草レース', subSeries: 'Y2-XC', url: 'http://oyz.blog22.fc2.com/blog-category-4.html' },
  { month: 7, day: 5, dayOfWeek: '日', name: 'Y2-XC 第3戦', venue: 'チーズナッツパーク', series: '草レース', subSeries: 'Y2-XC', url: 'http://oyz.blog22.fc2.com/blog-category-4.html' },
  { month: 9, day: 13, dayOfWeek: '日', name: 'Y2-XC 第4戦', venue: 'チーズナッツパーク', series: '草レース', subSeries: 'Y2-XC', url: 'http://oyz.blog22.fc2.com/blog-category-4.html' },
  { month: 10, day: 11, dayOfWeek: '日', name: 'Y2-XC 最終戦', venue: 'チーズナッツパーク', series: '草レース', subSeries: 'Y2-XC', url: 'http://oyz.blog22.fc2.com/blog-category-4.html' },

  { month: 3, day: 22, dayOfWeek: '日', name: 'クロスカップ 第1戦', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'クロスカップ', url: 'https://xpark.sakura.ne.jp/' },
  { month: 5, day: 10, dayOfWeek: '日', name: 'クロスカップ 第2戦', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'クロスカップ', url: 'https://xpark.sakura.ne.jp/' },
  { month: 7, day: 19, dayOfWeek: '日', name: 'クロスカップ 第3戦', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'クロスカップ', url: 'https://xpark.sakura.ne.jp/' },
  { month: 8, day: 30, dayOfWeek: '日', name: 'クロスカップ 第4戦', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'クロスカップ', url: 'https://xpark.sakura.ne.jp/' },
  { month: 10, day: 25, dayOfWeek: '日', name: 'クロスカップ 第5戦 (Women\'s X併催)', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'クロスカップ', url: 'https://xpark.sakura.ne.jp/' },

  { month: 3, day: 22, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第1戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 4, day: 26, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第2戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 5, day: 31, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第3戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 7, day: 19, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第4戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 9, day: 13, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第5戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 10, day: 18, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第6戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 11, day: 15, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第7戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },
  { month: 12, day: 13, dayOfWeek: '日', name: 'BTC市貝エンデューロ 第8戦', venue: '市貝', series: '草レース', subSeries: 'BTC市貝エンデューロ', url: 'https://www.mxmaster-awp.com/schedule.html' },

  { month: 4, day: 19, dayOfWeek: '日', name: 'キャンオフ東日本 第1戦 5時間耐久', venue: 'オフロードピット那須', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },
  { month: 6, day: 14, dayOfWeek: '日', name: 'キャンオフ東日本 第2戦 5時間耐久', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },
  { month: 7, day: 19, dayOfWeek: '日', name: 'キャンオフ東日本 第3戦 5時間耐久', venue: '会場調整中（長野県）', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },
  { month: 8, day: 9, dayOfWeek: '日', name: 'キャンオフ東日本 第4戦 5時間耐久', venue: '信州マウンテンパーク', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },
  { month: 9, day: 1, dayOfWeek: '月', name: 'キャンオフ夏全国 (西日本併催)', venue: '会場調整（長野県）', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },
  { month: 10, day: 1, dayOfWeek: '木', name: 'キャンオフ東日本 第5戦 5時間耐久', venue: '会場調整（関東圏）', series: '草レース', subSeries: 'キャンオフ東日本', url: 'http://camoffeast.com/wp/' },

  { month: 1, day: 1, dayOfWeek: '-', name: 'キャンオフ西日本（開催日未定）', venue: '未定', series: '草レース', subSeries: 'キャンオフ西日本', url: 'http://camoffwest.com/wp/' },

  { month: 5, day: 31, dayOfWeek: '日', name: 'ヒーローズエンデューロ R1', venue: '軽井沢モーターパーク', series: '草レース', subSeries: 'ヒーローズエンデューロ', url: 'https://www.herosmx.com/' },
  { month: 9, day: 20, dayOfWeek: '日', name: 'ヒーローズエンデューロ R2', venue: '軽井沢モーターパーク', series: '草レース', subSeries: 'ヒーローズエンデューロ', url: 'https://www.herosmx.com/' },
  { month: 10, day: 18, dayOfWeek: '日', name: 'ヒーローズエンデューロ R3', venue: '軽井沢モーターパーク', series: '草レース', subSeries: 'ヒーローズエンデューロ', url: 'https://www.herosmx.com/' },

  { month: 5, day: 31, dayOfWeek: '日', name: 'We-Net CGC美濃しらお ゲロゲロクラス', venue: 'エナジーアクティブフィールドしらお', series: '草レース', subSeries: 'We-Net Japan', url: 'https://cgcenduro.jp/info/8550.html' },
  { month: 10, day: 11, dayOfWeek: '日', name: 'We-Net ブラックバレー広島', venue: '広島', series: '草レース', subSeries: 'We-Net Japan', url: 'https://cgcenduro.jp/info/8550.html' },
  { month: 12, day: 6, dayOfWeek: '日', name: 'We-Net XcupExtreme【RealHard】', venue: 'クロスパーク勝沼', series: '草レース', subSeries: 'We-Net Japan', url: 'https://cgcenduro.jp/info/8550.html' },

  { month: 4, day: 26, dayOfWeek: '日', name: 'くんまエンデューロ R1', venue: 'くんま', series: '草レース', subSeries: 'くんまエンデューロ', url: 'https://kunma-ed.com/' },
  { month: 1, day: 1, dayOfWeek: '－', name: 'くんまエンデューロ R2（未定）', venue: 'くんま', series: '草レース', subSeries: 'くんまエンデューロ', url: 'https://kunma-ed.com/' },
  { month: 11, day: 29, dayOfWeek: '日', name: 'くんまエンデューロ R3', venue: 'くんま', series: '草レース', subSeries: 'くんまエンデューロ', url: 'https://kunma-ed.com/' },
];
