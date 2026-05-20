import type { Language } from "../i18n/config";
import { pick } from "./pick";
import { tx } from "./tx";

const nav = {
  home: tx("홈", "Home", "首页", "ホーム"),
  experiences: tx("체험", "Experiences", "体验", "体験"),
  about: tx("소개", "About", "介绍", "紹介"),
  menu: tx("메뉴 열기", "Toggle menu", "打开菜单", "メニューを開く"),
};

const instagram = {
  navLabel: tx("인스타그램", "Instagram", "Instagram", "Instagram"),
  cta: tx("인스타그램에서 보기", "Watch on Instagram", "在 Instagram 观看", "Instagramで見る"),
  bannerTitle: tx(
    "서울의 순간, 인스타그램에서",
    "Seoul moments on Instagram",
    "首尔瞬间，尽在 Instagram",
    "ソウルの瞬間をInstagramで",
  ),
  bannerBody: tx(
    "로컬 투어 현장과 숨은 서울을 릴로 만나보세요. HIDE&SEEK의 여정을 가장 먼저 확인하세요.",
    "See our local tours and hidden Seoul in our latest reel—follow the journey on Instagram.",
    "在 Reels 中了解本地导览现场与隐秘首尔，第一时间关注 HIDE&SEEK 的旅程。",
    "最新リールでローカルツアーの現場と隠れたソウルに出会いましょう。HIDE&SEEKの旅をいち早くチェック。",
  ),
  bannerCta: tx("릴 보러 가기", "Watch the reel", "观看 Reels", "リールを見る"),
  connectBody: tx(
    "인스타그램에서 로컬 투어 현장과 숨은 명소를 만나보세요.",
    "Follow us on Instagram for tour highlights and hidden Seoul spots.",
    "在 Instagram 关注本地导览精彩瞬间与隐秘景点。",
    "Instagramでツアーの現場と隠れた名所をチェックしましょう。",
  ),
};

const footer = {
  tagline: tx(
    "가이드북 너머의 나만의 한국을 찾아보세요.",
    "Find your own Korea beyond the guidebooks.",
    "在攻略之外，发现属于你的韩国。",
    "ガイドブックの先にある、あなただけの韓国を見つけよう。",
  ),
  explore: tx("둘러보기", "Explore", "浏览", "探索"),
  connect: tx("연결", "Connect", "关注", "つながる"),
  connectBody: instagram.connectBody,
  rights: tx(
    "© 2026 HIDE&SEEK. All rights reserved.",
    "© 2026 HIDE&SEEK. All rights reserved.",
    "© 2026 HIDE&SEEK. All rights reserved.",
    "© 2026 HIDE&SEEK. All rights reserved.",
  ),
};

/** Official Instagram reel */
export const INSTAGRAM_REEL_URL =
  "https://www.instagram.com/reel/DYR5bGvSdQE/?utm_source=ig_web_copy_link";

/** Local tour application (Google Form) */
export const TOUR_APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScS1vTmXHPfC16Ofe1zkZw18wgya-usV6M8fKgsLvGOjGOl9Q/viewform?usp=header";

const home = {
  heroLine: tx("나만의 한국을 찾다", "FIND YOUR OWN KOREA", "寻找属于你的韩国", "自分だけの韓国を見つける"),
  heroSub: tx(
    "서울 곳곳의 숨은 동네, 로컬 이야기, 잊지 못할 순간을 만나보세요.",
    "Discover hidden neighborhoods, local stories, and unforgettable moments across Seoul.",
    "探索首尔各处隐秘街区、本地故事与难忘瞬间。",
    "ソウルの隠れた街角、ローカルな物語、忘れられない瞬間に出会いましょう。",
  ),
  cta: tx("체험 둘러보기", "Explore Experiences", "浏览体验", "体験を見る"),
  sec1Title: tx("단순한 관광지 그 이상", "More Than a Tourist Destination", "不止于景点", "観光地そのもの以上"),
  sec1Body: tx(
    "서울의 진짜 매력은 붐비는 명소가 아니라 조용한 골목, 로컬 카페, 숨은 야경, 시간이 머문 동네에서 드러납니다.",
    "Seoul reveals its true charm beyond crowded attractions, through quiet alleys, local cafés, hidden night views, and timeless neighborhoods.",
    "首尔真正的魅力不在人潮景点，而在安静小巷、本地咖啡馆、隐秘夜景与时间沉淀的街区。",
    "ソウルの本当の魅力は人混みの名所ではなく、静かな路地、ローカルカフェ、隠れた夜景、時が止まった街並みにあります。",
  ),
  imgAlts: [
    tx("한옥 골목", "Hanok alley", "韩屋小巷", "韓屋の路地"),
    tx("로컬 카페", "Local café", "本地咖啡馆", "ローカルカフェ"),
    tx("서울 야경", "Seoul at night", "首尔夜景", "ソウルの夜景"),
    tx("전통 거리", "Traditional street", "传统街道", "伝統的な通り"),
  ],
  sec2Title: tx("왜 HIDE&SEEK인가요?", "Why HIDE&SEEK?", "为什么选择 HIDE&SEEK？", "なぜ HIDE&SEEK？"),
  sec2Lead: tx(
    "정성 어린 로컬 체험으로 여행자에게 더 진짜 같은 서울을 소개합니다.",
    "HIDE&SEEK helps travelers discover a more authentic side of Seoul through carefully curated local experiences.",
    "通过精心策划的本地体验，向旅行者呈现更真实的首尔。",
    "丁寧にキュレーションしたローカル体験で、より本物のソウルをお届けします。",
  ),
  reasons: [
    {
      title: tx("로컬 시선", "Local Perspectives", "本地视角", "ローカルの視点"),
      body: tx(
        "서울을 아는 로컬이 큐레이션한 숨은 명소.",
        "Curated by Seoul natives who know the city's hidden gems",
        "由熟悉首尔的本地人精选隐秘景点。",
        "ソウルを知るローカルが厳選した隠れた名所。",
      ),
    },
    {
      title: tx("이야기로 잇는 여정", "Story-Driven Experiences", "故事驱动的旅程", "物語でつなぐ旅"),
      body: tx(
        "각 장소에 살아 있는 이야기가 경험을 완성합니다.",
        "Every location has a narrative that brings it to life",
        "每个地方都有鲜活的故事，成就完整体验。",
        "各スポットに息づく物語が体験を完成させます。",
      ),
    },
    {
      title: tx("가이드북 밖으로", "Beyond Guidebooks", "走出攻略书", "ガイドブックの外へ"),
      body: tx(
        "관광객 혼자선 찾기 힘든 공간을 안내합니다.",
        "Discover places tourists never find on their own",
        "带你走进游客难以独自发现的场所。",
        "一人では見つけにくい場所へご案内します。",
      ),
    },
  ],
  moodAlts: [
    tx("서울 분위기 1", "Seoul atmosphere 1", "首尔氛围 1", "ソウルの雰囲気 1"),
    tx("서울 분위기 2", "Seoul atmosphere 2", "首尔氛围 2", "ソウルの雰囲気 2"),
    tx("서울 분위기 3", "Seoul atmosphere 3", "首尔氛围 3", "ソウルの雰囲気 3"),
  ],
  sec3Title: tx("서울 탐험을 시작하세요", "Start Exploring Seoul", "开始探索首尔", "ソウル探訪を始めよう"),
  sec3Body: tx(
    "여행이 기억에 남는 이야기가 되도록 장소를 찾아보세요.",
    "Find places that turn your trip into a story worth remembering.",
    "寻找让旅程成为难忘故事的地方。",
    "旅が記憶に残る物語になる場所を見つけましょう。",
  ),
  heroImgAlt: tx("서울 도심 풍경", "Seoul cityscape", "首尔城市风光", "ソウル市街の風景"),
};

const about = {
  title: tx("HIDE&SEEK 소개", "About HIDE&SEEK", "关于 HIDE&SEEK", "HIDE&SEEKについて"),
  lead: tx(
    "호기심 많은 여행자를 위한 숨은 서울 발견 서비스입니다.",
    "A hidden Seoul discovery service for curious travelers.",
    "为充满好奇的旅行者打造的隐秘首尔发现服务。",
    "好奇心旺盛な旅人のための、隠れたソウル発見サービスです。",
  ),
  representativeLabel: tx("대표 가이드", "Lead Guide", "主理导游", "代表ガイド"),
  whyTitle: tx("HIDE&SEEK를 만든 이유", "Why We Created HIDE&SEEK", "创立 HIDE&SEEK 的原因", "HIDE&SEEKを作った理由"),
  p1: tx(
    "서울의 진짜 매력은 유명 관광지가 아니라 골목과 사람, 오래된 공간과 로컬 문화 속에 있습니다.",
    "Seoul's true charm lives in alleys, people, old spaces, and local culture—not only in famous sights.",
    "首尔真正的魅力在于街巷、人与老空间及本地文化，而非仅在于著名景点。",
    "ソウルの本当の魅力は有名観光地ではなく、路地と人、古い空間、ローカル文化の中にあります。",
  ),
  p2: tx(
    "유명 관광지만 찾아다니면 서울의 진짜 얼굴을 놓치기 쉽습니다. 골목과 사람, 오래된 공간, 그 사이에서 조용히 이어지는 로컬 문화에 매력이 있습니다.",
    "Seoul's true charm isn't found in famous tourist spots, but in the alleys, the people, the old spaces, and the local culture that thrives quietly in between.",
    "只逛著名景点容易错过首尔的真实面貌；魅力藏在街巷、人与静静延续的本地文化之间。",
    "有名観光地だけでは本当のソウルは見えません。路地、人、古い空間、その間で静かに息づくローカル文化に魅力があります。",
  ),
  p3: tx(
    "우리는 전형적인 관광을 넘어 더 깊은 서울을 찾는 여행자와 이 숨은 이야기를 나누고자 HIDE&SEEK를 만들었습니다. 가이드에서 놓치기 쉬운, 로컬이 사랑하는 서울을 보여 드립니다.",
    "We created HIDE&SEEK to share these hidden stories with travelers who seek something deeper than the typical tourist experience. Our curated journeys reveal the Seoul that locals love—the one that guidebooks often miss.",
    "我们创立 HIDE&SEEK，与追求深度旅行的游客分享这些隐秘故事，呈现攻略中常被遗漏、本地人喜爱的首尔。",
    "より深いソウルを求める旅人と隠れた物語を分かち合うため HIDE&SEEK を立ち上げました。ガイドブックに載らない、ローカルが愛するソウルをお見せします。",
  ),
  guidesTitle: tx("로컬 가이드", "Local Guides", "本地导游", "ローカルガイド"),
  guidesLead: tx(
    "각 여정을 로컬 전문성과 세심함으로 큐레이션하는 서울 토박이들을 만나보세요.",
    "Meet the Seoul natives who curate each experience with care and local expertise.",
    "认识以本地专业与细致用心策划每一段旅程的首尔本地人。",
    "各旅をローカルの専門性と細やかさでキュレーションするソウル出身のガイドに会いましょう。",
  ),
  guideCards: [
    {
      name: tx("남동진", "Dong-jin Nam", "南东进", "南東進"),
      expertise: tx("해방촌 · 충무로", "Haebangchon · Chungmuro", "解放村 · 忠武路", "解放村 · 忠武路"),
      description: tx(
        "미티어(Mityo)에서 외국인 투어 가이드로 활동하며, 해방촌 숨은 골목과 충무로 노포 감성 등 현지인만 아는 진짜 서울을 친한 한국인 친구처럼 안내합니다.",
        "A Mityo tour volunteer who shares the real Seoul—hidden Haebangchon alleys and Chungmuro's old-school diner vibe—like a walk with a local friend.",
        "曾在 Mityo 担任外籍导览志愿者，像韩国朋友一样带你走进解放村隐秘小巷与忠武路老店风情等本地人眼中的真实首尔。",
        "Mityoで外国人向けツアーガイドとして活動。解放村の隠れた路地や忠武路のノポの雰囲気など、地元だけが知る本当のソウルを韓国の友人のように案内します。",
      ),
    },
    {
      name: tx("박재우", "Jae-woo Park", "朴在宇", "朴在宇"),
      expertise: tx("은평구 · 은평한옥마을", "Eunpyeong · Hanok Village", "恩平区 · 恩平韩屋村", "恩平区 · 恩平韓屋村"),
      description: tx(
        "은평한옥마을의 풍경부터 현지인 맛집·카페, 일상 문화까지. 유명 관광지보다 서울 구석구석의 이야기를 편안하게 나누는 투어를 진행합니다.",
        "From Eunpyeong Hanok Village to local eateries and cafés—curating everyday Seoul stories beyond the famous sights, in a relaxed, open atmosphere.",
        "从恩平韩屋村风光到本地人餐厅与咖啡馆及日常文化，在轻松氛围中分享比著名景点更深入的首尔角落故事。",
        "恩平韓屋村の風景から地元の飲食店・カフェ、日常文化まで。有名観光地よりソウルの街角の物語をリラックスして共有するツアーです。",
      ),
    },
    {
      name: tx("인연찬", "Yeon-chan In", "仁연灿", "仁連燦"),
      expertise: tx("북촌 · 홍대 · 잠실 · 문래창작촌", "Bukchon · Hongdae · Jamsil · Mullae", "北村 · 弘大 · 蚕室 · 文来创作村", "北村 · 弘大 · 蚕室 · 文来創作村"),
      description: tx(
        "대표 관광지 너머 숨은 골목·포토 스팟·로컬 맛집을 연결합니다. 문래창작촌의 뉴트로 감성부터 북촌·홍대까지, 사진만 남기는 여행이 아닌 서울의 분위기를 함께합니다.",
        "Beyond headline sights to hidden alleys, photo spots, and local food—from Mullae's retro creative scene to Bukchon and Hongdae, experiencing Seoul's atmosphere together.",
        "串联著名景点之外的隐秘小巷、拍照点与本地美食；从文来创作村的复古情调到北村与弘大，不只拍照，更一起感受首尔氛围。",
        "有名観光地の先の隠れた路地、フォトスポット、ローカルグルメへ。文来創作村のニューロから北村・弘大まで、写真だけでなくソウルの空気を一緒に感じます。",
      ),
    },
  ],
  visionTitle: tx("비전", "Our Vision", "愿景", "ビジョン"),
  visionA: tx("서울은 목적지 그 이상입니다", "Seoul is more than a destination", "首尔不仅是目的地", "ソウルは目的地以上の存在"),
  visionB: tx(
    "— 발견을 기다리는 숨은 순간들의 도시입니다.",
    "— it is a city of hidden moments waiting to be discovered.",
    "— 是一座等待被发现的隐秘瞬间之城。",
    "— 発見を待つ隠れた瞬間の街です。",
  ),
  visionC: tx(
    "서울은 단순한 관광지가 아니라 숨겨진 순간들로 이루어진 도시입니다.",
    "Seoul is a city of hidden moments—not only a list of sights.",
    "首尔不是景点清单，而是由无数隐秘瞬间构成的城市。",
    "ソウルは観光地のリストではなく、隠れた瞬間でできた街です。",
  ),
  galleryAlts: [
    tx("서울 분위기", "Seoul atmosphere", "首尔氛围", "ソウルの雰囲気"),
    tx("로컬 카페", "Local café", "本地咖啡馆", "ローカルカフェ"),
    tx("서울의 밤", "Seoul night", "首尔之夜", "ソウルの夜"),
  ],
};

const experiences = {
  title: tx("큐레이션 서울 체험", "Curated Seoul Experiences", "精选首尔体验", "厳選ソウル体験"),
  subtitle: tx(
    "서울의 숨은 분위기를 열어 주는 여정을 만나보세요.",
    "Explore carefully designed journeys that reveal the hidden atmosphere of Seoul.",
    "探索精心设计的旅程，感受首尔隐秘氛围。",
    "ソウルの隠れた雰囲気を映し出す、丁寧に設計された旅に出会いましょう。",
  ),
  exploreLink: tx("이 여정 살펴보기", "Explore this journey", "查看此行程", "この旅を見る"),
  spots: tx("곳", "spots", "处", "箇所"),
};

const notFoundPage = {
  title: tx("페이지를 찾을 수 없습니다", "Page not found", "页面未找到", "ページが見つかりません"),
  cta: tx("홈으로 돌아가기", "Back to Home", "返回首页", "ホームに戻る"),
};

const courseDetail = {
  back: tx("체험 목록으로", "Back to Experiences", "返回体验列表", "体験一覧へ"),
  missing: tx("코스를 찾을 수 없습니다", "Course not found", "未找到该路线", "コースが見つかりません"),
  routeTitle: tx("코스 동선", "Course Route", "路线行程", "コースルート"),
  placesTitle: tx("방문 장소", "Places You'll Visit", "参观地点", "訪問スポット"),
  highlightsTitle: tx("하이라이트", "Highlights", "亮点", "ハイライト"),
  locationsLabel: tx("개 장소", "locations", "个地点", "箇所"),
  applyCta: tx("신청하기", "Apply", "立即申请", "申し込む"),
};

export function siteCopy(lang: Language) {
  return {
    nav: {
      home: pick(nav.home, lang),
      experiences: pick(nav.experiences, lang),
      about: pick(nav.about, lang),
      menu: pick(nav.menu, lang),
    },
    footer: {
      brand: "HIDE&SEEK",
      tagline: pick(footer.tagline, lang),
      explore: pick(footer.explore, lang),
      connect: pick(footer.connect, lang),
      connectBody: pick(footer.connectBody, lang),
      rights: pick(footer.rights, lang),
      navHome: pick(nav.home, lang),
      navExperiences: pick(nav.experiences, lang),
      navAbout: pick(nav.about, lang),
    },
    home: {
      heroLine: pick(home.heroLine, lang),
      heroSub: pick(home.heroSub, lang),
      cta: pick(home.cta, lang),
      sec1Title: pick(home.sec1Title, lang),
      sec1Body: pick(home.sec1Body, lang),
      imgAlts: home.imgAlts.map((a) => pick(a, lang)),
      sec2Title: pick(home.sec2Title, lang),
      sec2Lead: pick(home.sec2Lead, lang),
      reasons: home.reasons.map((r) => ({
        title: pick(r.title, lang),
        body: pick(r.body, lang),
      })),
      moodAlts: home.moodAlts.map((a) => pick(a, lang)),
      sec3Title: pick(home.sec3Title, lang),
      sec3Body: pick(home.sec3Body, lang),
      heroImgAlt: pick(home.heroImgAlt, lang),
    },
    about: {
      title: pick(about.title, lang),
      lead: pick(about.lead, lang),
      representativeLabel: pick(about.representativeLabel, lang),
      whyTitle: pick(about.whyTitle, lang),
      p1: pick(about.p1, lang),
      p2: pick(about.p2, lang),
      p3: pick(about.p3, lang),
      guidesTitle: pick(about.guidesTitle, lang),
      guidesLead: pick(about.guidesLead, lang),
      guideCards: about.guideCards.map((g) => ({
        name: pick(g.name, lang),
        expertise: pick(g.expertise, lang),
        description: pick(g.description, lang),
      })),
      visionTitle: pick(about.visionTitle, lang),
      visionA: pick(about.visionA, lang),
      visionB: pick(about.visionB, lang),
      visionC: pick(about.visionC, lang),
      galleryAlts: about.galleryAlts.map((a) => pick(a, lang)),
    },
    experiences: {
      title: pick(experiences.title, lang),
      subtitle: pick(experiences.subtitle, lang),
      exploreLink: pick(experiences.exploreLink, lang),
      spots: pick(experiences.spots, lang),
    },
    notFound: {
      title: pick(notFoundPage.title, lang),
      cta: pick(notFoundPage.cta, lang),
    },
    courseDetail: {
      back: pick(courseDetail.back, lang),
      missing: pick(courseDetail.missing, lang),
      routeTitle: pick(courseDetail.routeTitle, lang),
      placesTitle: pick(courseDetail.placesTitle, lang),
      highlightsTitle: pick(courseDetail.highlightsTitle, lang),
      locationsLabel: pick(courseDetail.locationsLabel, lang),
      applyCta: pick(courseDetail.applyCta, lang),
    },
    instagram: {
      navLabel: pick(instagram.navLabel, lang),
      cta: pick(instagram.cta, lang),
      bannerTitle: pick(instagram.bannerTitle, lang),
      bannerBody: pick(instagram.bannerBody, lang),
      bannerCta: pick(instagram.bannerCta, lang),
    },
  };
}
