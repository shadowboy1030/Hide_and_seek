import { Camera, Coffee, Star, type LucideIcon } from "lucide-react";
import type { Language } from "../i18n/config";
import type { Tx } from "./tx";
import { tx } from "./tx";
import { pick } from "./pick";

export interface CourseListItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  locations: string[];
  image: string;
  duration: string;
}

interface PlaceRow {
  name: Tx;
  description: Tx;
}

interface HighlightRow {
  Icon: LucideIcon;
  text: Tx;
}

interface CourseModel {
  id: string;
  title: Tx;
  subtitle: Tx;
  description: Tx;
  image: string;
  duration: Tx;
  route: Tx;
  places: PlaceRow[];
  highlights: HighlightRow[];
  closingText: Tx;
}

const courses: CourseModel[] = [
  {
    id: "old-alley-stories",
    title: tx("옛골목 이야기", "Old Alley Stories", "旧巷故事", "古い路地の物語"),
    subtitle: tx(
      "안국·북촌 일대 숨은 한옥 골목과 로컬 카페",
      "Hidden hanok alleys and local cafés around Anguk and Bukchon.",
      "安国·北村一带隐秘的韩屋巷弄与本地咖啡馆",
      "安国・北村周辺の隠れた韓屋路地とローカルカフェ",
    ),
    description: tx(
      "숨은 한옥 골목, 조용한 뒷골목, 전통 찻집과 로컬 상점을 거닐며 옛 서울의 시간을 느껴 보세요.",
      "Wander through hidden hanok alleys, quiet backstreets, traditional cafés, and local shops that reveal the timeless atmosphere of old Seoul.",
      "漫步隐秘的韩屋巷弄、安静的后街、传统茶室与本地小店，感受旧首尔流转的时光。",
      "隠れた韓屋路地、静かな裏路地、伝統茶房、ローカル店を巡り、旧ソウルの時間を感じてみてください。",
    ),
    image:
      "https://images.unsplash.com/photo-1702737832045-197d00365055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("3–4시간", "3-4 hours", "3–4小时", "3～4時間"),
    route: tx(
      "안국 → 북촌 → 삼청동 → 한옥 카페",
      "Anguk → Bukchon → Samcheong-dong → Hanok Café",
      "安国 → 北村 → 三清洞 → 韩屋咖啡馆",
      "安国 → 北村 → 三清洞 → 韓屋カフェ",
    ),
    places: [
      {
        name: tx("안국역 일대", "Anguk Station", "安国站一带", "安国駅周辺"),
        description: tx(
          "옛 서울과 현대 문화가 만나는 전통 거리.",
          "Traditional streets where old Seoul and modern culture meet.",
          "旧首尔与现代文化交汇的传统街道。",
          "旧ソウルと現代文化が出会う伝統的な通り。",
        ),
      },
      {
        name: tx("북촌 숨은 골목", "Bukchon Hidden Alleys", "北村隐秘巷弄", "北村の隠れ路地"),
        description: tx(
          "붐비는 관광 동선에서 벗어난 고요한 한옥 골목.",
          "Quiet hanok alleys away from crowded tourist paths.",
          "远离拥挤观光路线的宁静韩屋巷弄。",
          "混雑した観光ルートから離れた、静かな韓屋路地。",
        ),
      },
      {
        name: tx("삼청동", "Samcheong-dong", "三清洞", "三清洞"),
        description: tx(
          "로컬 상점, 갤러리, 고즈넉한 카페.",
          "Local shops, galleries, and peaceful cafés.",
          "本地小店、画廊与静谧的咖啡馆。",
          "ローカル店、ギャラリー、落ち着いたカフェ。",
        ),
      },
      {
        name: tx("전통 한옥 찻집", "Traditional Hanok Café", "传统韩屋茶室", "伝統韓屋茶房"),
        description: tx(
          "한옥에서 즐기는 한국 다도와 차 문화.",
          "Experience Korean tea culture in an authentic hanok setting.",
          "在韩屋中体验韩国茶道与茶文化。",
          "韓屋で楽しむ韓国茶道と茶文化。",
        ),
      },
    ],
    highlights: [
      { Icon: Camera, text: tx("포토 스팟", "Best Photo Spots", "最佳拍照点", "ベストフォトスポット") },
      { Icon: Coffee, text: tx("로컬 디저트", "Local Dessert Experience", "本地甜点体验", "ローカルデザート体験") },
      { Icon: Star, text: tx("숨은 골목", "Hidden Local Streets", "隐秘小巷", "隠れた路地") },
    ],
    closingText: tx(
      "서울의 더 고요하고 시간이 머문 면모를 느껴 보세요.",
      "Experience the quieter and more timeless side of Seoul.",
      "感受首尔更安静、时光仿佛停滞的一面。",
      "ソウルのより静かで、時が止まったような一面を感じてみてください。",
    ),
  },
  {
    id: "seoul-nights-baseball",
    title: tx("서울의 밤 & 야구 문화", "Seoul Nights & Baseball Culture", "首尔之夜与棒球文化", "ソウルの夜と野球文化"),
    subtitle: tx(
      "KBO 문화, 로컬 카페, 잠실의 밤",
      "KBO culture, local cafés, and Jamsil nightlife.",
      "KBO 文化、本地咖啡馆与蚕室之夜",
      "KBO文化、ローカルカフェ、蚕室の夜",
    ),
    description: tx(
      "로컬 카페, KBO 야구 문화, 호수 야경, 어두워진 뒤의 활기찬 잠실을 함께 걸어요.",
      "Experience Seoul's energetic nightlife through local cafés, KBO baseball culture, lakeside night views, and the vibrant atmosphere of Jamsil after dark.",
      "一起漫步本地咖啡馆、KBO 棒球文化、湖畔夜景，以及入夜后活力四射的蚕室。",
      "ローカルカフェ、KBO野球文化、湖の夜景、暗くなった後の活気ある蚕室を一緒に歩きます。",
    ),
    image:
      "https://images.unsplash.com/photo-1645451350581-2aebd3932286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("4–5시간", "4-5 hours", "4–5小时", "4～5時間"),
    route: tx(
      "송리단길 → 잠실야구장 → 석촌호수 → 롯데월드타워",
      "Songri-dan-gil → Jamsil Baseball Stadium → Seokchon Lake → Lotte World Tower",
      "松里단街 → 蚕室棒球场 → 石村湖 → 乐天世界塔",
      "松里団街 → 蚕室野球場 → 石村湖 → ロッテワールドタワー",
    ),
    places: [
      {
        name: tx("송리단길", "Songri-dan-gil", "松里단街", "松里団街"),
        description: tx(
          "잠실 인근 트렌디한 카페와 로컬 맛집.",
          "Trendy cafés and local restaurants near Jamsil.",
          "蚕室附近时髦的咖啡馆与本地美食。",
          "蚕室近くのトレンディなカフェとローカルグルメ。",
        ),
      },
      {
        name: tx("잠실야구장", "Jamsil Baseball Stadium", "蚕室棒球场", "蚕室野球場"),
        description: tx(
          "뜨거운 응원이 이어지는 KBO 야구 문화.",
          "Experience the passionate KBO baseball culture.",
          "感受 KBO 棒球文化中热烈的助威氛围。",
          "熱い応援が続くKBO野球文化を体験。",
        ),
      },
      {
        name: tx("석촌호수", "Seokchon Lake", "石村湖", "石村湖"),
        description: tx(
          "잔잔한 호숫가의 야경.",
          "Beautiful night views and peaceful lakeside atmosphere.",
          "湖畔静谧的夜景。",
          "穏やかな湖畔の夜景。",
        ),
      },
      {
        name: tx("롯데월드타워 일대", "Lotte World Tower Area", "乐天世界塔一带", "ロッテワールドタワー周辺"),
        description: tx(
          "밤하늘을 수놓는 현대 서울의 스카이라인.",
          "Modern Seoul's iconic skyline at night.",
          "点缀夜空的现代首尔天际线。",
          "夜空を彩る現代ソウルのスカイライン。",
        ),
      },
    ],
    highlights: [
      { Icon: Star, text: tx("KBO 야구", "KBO Baseball Experience", "KBO 棒球体验", "KBO野球体験") },
      { Icon: Camera, text: tx("야간 촬영", "Night Photography", "夜间摄影", "夜景撮影") },
      { Icon: Coffee, text: tx("밤의 카페", "Local Night Cafés", "夜间咖啡馆", "夜のカフェ") },
    ],
    closingText: tx(
      "서울 밤의 에너지와 스포츠 문화를 온몸으로 느껴 보세요.",
      "Feel the energy of Seoul's vibrant nightlife and sports culture.",
      "全身心感受首尔夜晚的能量与体育文化。",
      "ソウルの夜のエネルギーとスポーツ文化を全身で感じてみてください。",
    ),
  },
  {
    id: "beneath-namsan",
    title: tx("남산 아래", "Beneath Namsan", "南山之下", "南山の下"),
    subtitle: tx(
      "남산 아래 숨은 거리와 레트로 밤문화",
      "Hidden streets and retro nightlife beneath Namsan.",
      "南山下的隐秘街道与复古夜生活",
      "南山の下の隠れた通りとレトロな夜文化",
    ),
    description: tx(
      "언덕 마을 시장, 숨은 카페, 빈티지 거리, 남산을 둘러싼 심야 로컬 문화를 탐험해요.",
      "Explore hillside markets, hidden cafés, vintage streets, and Seoul's late-night local culture surrounding Namsan.",
      "探索山坡市集、隐秘咖啡馆、复古街道，以及环绕南山的深夜本地文化。",
      "丘の上の市場、隠れたカフェ、ヴィンテージ通り、南山を囲む深夜のローカル文化を探検します。",
    ),
    image:
      "https://images.unsplash.com/photo-1687777504692-e825e3cb0e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("3–4시간", "3-4 hours", "3–4小时", "3～4時間"),
    route: tx(
      "해방촌 → 후암동 → 남대문 → 충무로",
      "Haebangchon → Huam-dong → Namdaemun → Chungmuro",
      "解放村 → 厚岩洞 → 南大门 → 忠武路",
      "解放村 → 厚岩洞 → 南大門 → 忠武路",
    ),
    places: [
      {
        name: tx("해방촌", "Haebangchon", "解放村", "解放村"),
        description: tx(
          "독특한 카페가 모인 국제적인 언덕 동네.",
          "International hillside neighborhood with unique cafés.",
          "独特咖啡馆云集的国际化山坡街区。",
          "個性的なカフェが集まる国際的な丘の上の町。",
        ),
      },
      {
        name: tx("후암동", "Huam-dong", "厚岩洞", "厚岩洞"),
        description: tx(
          "숨은 빈티지 숍과 로컬 식당.",
          "Hidden vintage shops and local eateries.",
          "隐秘的复古小店与本地餐馆。",
          "隠れたヴィンテージショップとローカル食堂。",
        ),
      },
      {
        name: tx("남대문시장", "Namdaemun Market", "南大门市场", "南大門市場"),
        description: tx(
          "한국 최대 규모의 전통 시장.",
          "Korea's largest traditional market.",
          "韩国规模最大的传统市场。",
          "韓国最大規模の伝統市場。",
        ),
      },
      {
        name: tx("충무로", "Chungmuro", "忠武路", "忠武路"),
        description: tx(
          "레트로한 거리와 심야 로컬 문화.",
          "Retro streets and late-night local culture.",
          "复古街道与深夜本地文化。",
          "レトロな通りと深夜のローカル文化。",
        ),
      },
    ],
    highlights: [
      { Icon: Star, text: tx("빈티지 쇼핑", "Vintage Shopping", "复古购物", "ヴィンテージショッピング") },
      { Icon: Coffee, text: tx("언덕 카페", "Hillside Cafés", "山坡咖啡馆", "丘の上のカフェ") },
      { Icon: Camera, text: tx("레트로 서울", "Retro Seoul Vibes", "复古首尔风情", "レトロソウルの雰囲気") },
    ],
    closingText: tx(
      "남산 아래에서 옛것과 새것이 뒤섞인 매력을 발견하세요.",
      "Discover the eclectic blend of old and new beneath Namsan.",
      "在南山之下，发现新旧交融的独特魅力。",
      "南山の下で、古いものと新しいものが交差する魅力を発見してください。",
    ),
  },
  {
    id: "artistic-seoul",
    title: tx("예술의 서울", "Artistic Seoul", "艺术首尔", "芸術のソウル"),
    subtitle: tx(
      "연극 거리, 빈티지 문화, 숨은 밤문화",
      "Theater streets, vintage culture, and hidden nightlife.",
      "戏剧街、复古文化与隐秘夜生活",
      "演劇街、ヴィンテージ文化、隠れたナイトライフ",
    ),
    description: tx(
      "대학로의 연극 문화부터 동묘의 보물 찾기, 신당동의 숨은 바까지.",
      "From Daehangno's theater culture to treasure hunting in Dongmyo and hidden bars in Sindang-dong.",
      "从大学路的戏剧文化，到东庙的寻宝之旅，再到新堂洞的隐秘酒吧。",
      "大学路の演劇文化から、東廟での宝探し、新堂洞の隠れバーまで。",
    ),
    image:
      "https://images.unsplash.com/photo-1682452057391-800e24d8454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("4–5시간", "4-5 hours", "4–5小时", "4～5時間"),
    route: tx(
      "대학로 → 동묘 → 신당동 → 낙산공원",
      "Daehangno → Dongmyo → Sindang-dong → Naksan Park",
      "大学路 → 东庙 → 新堂洞 → 骆山公园",
      "大学路 → 東廟 → 新堂洞 → 駱山公園",
    ),
    places: [
      {
        name: tx("대학로", "Daehangno", "大学路", "大学路"),
        description: tx(
          "거리 공연이 이어지는 서울의 연극 거리.",
          "Seoul's theater district with vibrant street performances.",
          "街头表演不断的首尔戏剧街。",
          "ストリートパフォーマンスが続くソウルの演劇街。",
        ),
      },
      {
        name: tx("동묘 벼룩시장", "Dongmyo Vintage Market", "东庙跳蚤市场", "東廟フリーマーケット"),
        description: tx(
          "서울 최대 빈티지 시장에서 보물 찾기.",
          "Treasure hunt through Seoul's largest vintage market.",
          "在首尔最大的复古市场寻宝。",
          "ソウル最大のヴィンテージ市場で宝探し。",
        ),
      },
      {
        name: tx("신당동", "Sindang-dong", "新堂洞", "新堂洞"),
        description: tx(
          "숨은 바와 정겨운 로컬 식탁.",
          "Hidden bars and authentic local dining.",
          "隐秘酒吧与地道的本地餐桌。",
          "隠れバーと温かいローカル食堂。",
        ),
      },
      {
        name: tx("낙산공원", "Naksan Park", "骆山公园", "駱山公園"),
        description: tx(
          "서울을 내려다보는 야경.",
          "Panoramic night views of Seoul.",
          "俯瞰首尔的夜景。",
          "ソウルを見下ろす夜景。",
        ),
      },
    ],
    highlights: [
      { Icon: Star, text: tx("연극 문화", "Theater Culture", "戏剧文化", "演劇文化") },
      { Icon: Coffee, text: tx("숨은 바", "Hidden Bars", "隐秘酒吧", "隠れバー") },
      { Icon: Camera, text: tx("빈티지 발견", "Vintage Finds", "复古发现", "ヴィンテージ発見") },
    ],
    closingText: tx(
      "서울의 예술적·보헤미안한 면모에 빠져 보세요.",
      "Immerse yourself in Seoul's artistic and bohemian side.",
      "沉浸于首尔艺术而波西米亚的一面。",
      "ソウルのアーティスティックでボヘミアンな一面に浸ってみてください。",
    ),
  },
  {
    id: "palace-forest-paths",
    title: tx("궁과 숲길", "Palace & Forest Paths", "宫殿与林径", "宮殿と森の道"),
    subtitle: tx(
      "고즈넉한 동네와 궁궐 풍경",
      "Quiet neighborhoods and historic palace scenery.",
      "静谧街区与宫殿风光",
      "静かな町並みと宮殿の風景",
    ),
    description: tx(
      "부암동의 예술적 분위기부터 덕수궁의 우아함까지.",
      "From the artistic atmosphere of Buam-dong to the elegance of Deoksugung Palace.",
      "从付岩洞的艺术氛围，到德寿宫的优雅之美。",
      "付岩洞のアーティスティックな雰囲気から、徳寿宮の優雅さまで。",
    ),
    image:
      "https://images.unsplash.com/photo-1704719849782-43b2fd97e405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("반나절", "Half day", "半天", "半日"),
    route: tx(
      "부암동 → 서촌 → 경복궁 → 덕수궁",
      "Buam-dong → Seochon → Gyeongbokgung → Deoksugung",
      "付岩洞 → 西村 → 景福宫 → 德寿宫",
      "付岩洞 → 西村 → 景福宮 → 徳寿宮",
    ),
    places: [
      {
        name: tx("부암동", "Buam-dong", "付岩洞", "付岩洞"),
        description: tx(
          "갤러리와 카페가 어우러진 예술적인 언덕 마을.",
          "Artistic hillside village with galleries and cafés.",
          "画廊与咖啡馆交织的艺术山坡村落。",
          "ギャラリーとカフェが調和するアーティスティックな丘の上の村。",
        ),
      },
      {
        name: tx("서촌", "Seochon", "西村", "西村"),
        description: tx(
          "경복궁 서쪽의 전통 동네.",
          "Traditional neighborhood west of Gyeongbokgung.",
          "景福宫西侧的传统街区。",
          "景福宮の西側にある伝統的な町。",
        ),
      },
      {
        name: tx("경복궁", "Gyeongbokgung Palace", "景福宫", "景福宮"),
        description: tx(
          "조선의 대표 궁궐.",
          "Korea's grandest royal palace.",
          "朝鲜最具代表性的宫殿。",
          "朝鮮を代表する宮殿。",
        ),
      },
      {
        name: tx("덕수궁", "Deoksugung Palace", "德寿宫", "徳寿宮"),
        description: tx(
          "돌담길이 아름다운 우아한 궁궐.",
          "Elegant palace with beautiful stonewall paths.",
          "石墙小径优美的典雅宫殿。",
          "石垣の道が美しい優雅な宮殿。",
        ),
      },
    ],
    highlights: [
      { Icon: Star, text: tx("궁궐 건축", "Palace Architecture", "宫殿建筑", "宮殿建築") },
      { Icon: Coffee, text: tx("예술 카페", "Artistic Cafés", "艺术咖啡馆", "アートカフェ") },
      { Icon: Camera, text: tx("자연과 역사", "Nature & History", "自然与历史", "自然と歴史") },
    ],
    closingText: tx(
      "수백 년의 역사와 자연을 한 걸음에 담아 걸어요.",
      "Walk through centuries of Korean history and natural beauty.",
      "一步一景，漫步数百年历史与自然之美。",
      "数百年の歴史と自然を一歩ごとに感じながら歩きます。",
    ),
  },
  {
    id: "beyond-guidebooks",
    title: tx("가이드북 너머의 서울", "Seoul Beyond the Guidebooks", "指南之外的首尔", "ガイドブックの向こうのソウル"),
    subtitle: tx(
      "숨은 문화와 이야기로 빚어진 서울의 한 면",
      "A side of Seoul shaped by hidden culture and stories.",
      "由隐秘文化与故事塑造的首尔一面",
      "隠れた文化と物語が形づくるソウルの一面",
    ),
    description: tx(
      "숨은 골목, 로컬 문화, 예술 공간, 잊히지 않는 이야기로 완성되는 서울을 만나요.",
      "Discover a side of Seoul shaped by hidden alleys, local culture, artistic spaces, and unforgettable stories.",
      "邂逅由隐秘巷弄、本地文化、艺术空间与难忘故事共同构成的首尔。",
      "隠れた路地、ローカル文化、アートスペース、忘れられない物語で完成されるソウルに出会います。",
    ),
    image:
      "https://images.unsplash.com/photo-1694276971921-ff8f103752eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: tx("맞춤", "Flexible", "灵活定制", "カスタム"),
    route: tx(
      "서울 곳곳의 숨은 명소",
      "Various Hidden Spots Across Seoul",
      "首尔各处的隐秘名所",
      "ソウル各地の隠れた名所",
    ),
    places: [
      {
        name: tx("숨은 골목", "Hidden Alleyways", "隐秘巷弄", "隠れた路地"),
        description: tx(
          "로컬이 사랑하는 비밀 같은 통로와 조용한 거리.",
          "Secret passages and quiet streets locals love.",
          "本地人钟爱的秘密通道与安静街道。",
          "地元の人に愛される秘密の通路と静かな通り。",
        ),
      },
      {
        name: tx("독립 서점", "Independent Bookstores", "独立书店", "独立書店"),
        description: tx(
          "엄선된 책과 아늑한 독서 공간.",
          "Curated book collections and cozy reading spaces.",
          "精选书籍与舒适的阅读空间。",
          "厳選された本と居心地の良い読書空間。",
        ),
      },
      {
        name: tx("지하 예술 공간", "Underground Art Spaces", "地下艺术空间", "地下アートスペース"),
        description: tx(
          "정해진 동선 밖의 갤러리와 창작 스튜디오.",
          "Galleries and creative studios off the beaten path.",
          "常规路线之外的画廊与创作工作室。",
          "定番ルート外のギャラリーと創作スタジオ。",
        ),
      },
      {
        name: tx("로컬 시장", "Local Markets", "本地市场", "ローカル市場"),
        description: tx(
          "진짜 시장 분위기와 길거리 음식.",
          "Authentic market culture and street food.",
          "真实的市场氛围与街头美食。",
          "本物の市場の雰囲気と屋台グルメ。",
        ),
      },
    ],
    highlights: [
      { Icon: Star, text: tx("로컬의 비밀", "Local Secrets", "本地秘密", "地元の秘密") },
      { Icon: Coffee, text: tx("진짜 경험", "Authentic Experiences", "真实体验", "本物の体験") },
      { Icon: Camera, text: tx("숨은 이야기", "Hidden Stories", "隐秘故事", "隠れた物語") },
    ],
    closingText: tx(
      "로컬만 아는 서울을 발견해 보세요.",
      "Uncover the Seoul that only locals know.",
      "发现只有本地人才了解的首尔。",
      "地元の人だけが知るソウルを発見してみてください。",
    ),
  },
];

export function getCourseList(lang: Language): CourseListItem[] {
  return courses.map((c) => ({
    id: c.id,
    title: pick(c.title, lang),
    subtitle: pick(c.subtitle, lang),
    description: pick(c.description, lang),
    locations: c.places.map((p) => pick(p.name, lang)),
    image: c.image,
    duration: pick(c.duration, lang),
  }));
}

export function getCourseDetail(id: string | undefined, lang: Language) {
  const c = courses.find((x) => x.id === id);
  if (!c) return null;
  return {
    id: c.id,
    title: pick(c.title, lang),
    subtitle: pick(c.subtitle, lang),
    description: pick(c.description, lang),
    image: c.image,
    duration: pick(c.duration, lang),
    route: pick(c.route, lang),
    places: c.places.map((p) => ({
      name: pick(p.name, lang),
      description: pick(p.description, lang),
    })),
    highlights: c.highlights.map((h) => ({
      Icon: h.Icon,
      text: pick(h.text, lang),
    })),
    closingText: pick(c.closingText, lang),
  };
}
