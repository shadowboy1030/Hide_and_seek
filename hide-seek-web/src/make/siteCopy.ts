import type { Language } from "../i18n";
import type { Tx } from "./pick";
import { pick } from "./pick";

const nav = {
  home: { ko: "홈", en: "Home" },
  experiences: { ko: "체험", en: "Experiences" },
  about: { ko: "소개", en: "About" },
  menu: { ko: "메뉴 열기", en: "Toggle menu" },
} satisfies Record<string, Tx>;

const footer = {
  tagline: {
    ko: "가이드북 너머의 나만의 한국을 찾아보세요.",
    en: "Find your own Korea beyond the guidebooks.",
  },
  explore: { ko: "둘러보기", en: "Explore" },
  connect: { ko: "연결", en: "Connect" },
  connectBody: {
    ko: "숨은 동네와 로컬 이야기를 발견하세요.",
    en: "Discover hidden neighborhoods and local stories.",
  },
  rights: { ko: "© 2026 HIDE&SEEK. All rights reserved.", en: "© 2026 HIDE&SEEK. All rights reserved." },
} satisfies Record<string, Tx>;

const home = {
  heroLine: { ko: "나만의 한국을 찾다", en: "FIND YOUR OWN KOREA" },
  heroSub: {
    ko: "서울 곳곳의 숨은 동네, 로컬 이야기, 잊지 못할 순간을 만나보세요.",
    en: "Discover hidden neighborhoods, local stories, and unforgettable moments across Seoul.",
  },
  cta: { ko: "체험 둘러보기", en: "Explore Experiences" },
  sec1Title: { ko: "단순한 관광지 그 이상", en: "More Than a Tourist Destination" },
  sec1Body: {
    ko: "서울의 진짜 매력은 붐비는 명소가 아니라 조용한 골목, 로컬 카페, 숨은 야경, 시간이 머문 동네에서 드러납니다.",
    en: "Seoul reveals its true charm beyond crowded attractions, through quiet alleys, local cafés, hidden night views, and timeless neighborhoods.",
  },
  imgAlts: [
    { ko: "한옥 골목", en: "Hanok alley" },
    { ko: "로컬 카페", en: "Local café" },
    { ko: "서울 야경", en: "Seoul at night" },
    { ko: "전통 거리", en: "Traditional street" },
  ] satisfies Tx[],
  sec2Title: { ko: "왜 HIDE&SEEK인가요?", en: "Why HIDE&SEEK?" },
  sec2Lead: {
    ko: "정성 어린 로컬 체험으로 여행자에게 더 진짜 같은 서울을 소개합니다.",
    en: "HIDE&SEEK helps travelers discover a more authentic side of Seoul through carefully curated local experiences.",
  },
  reasons: [
    {
      title: { ko: "로컬 시선", en: "Local Perspectives" },
      body: {
        ko: "서울을 아는 로컬이 큐레이션한 숨은 명소.",
        en: "Curated by Seoul natives who know the city's hidden gems",
      },
    },
    {
      title: { ko: "이야기로 잇는 여정", en: "Story-Driven Experiences" },
      body: {
        ko: "각 장소에 살아 있는 이야기가 경험을 완성합니다.",
        en: "Every location has a narrative that brings it to life",
      },
    },
    {
      title: { ko: "가이드북 밖으로", en: "Beyond Guidebooks" },
      body: {
        ko: "관광객 혼자선 찾기 힘든 공간을 안내합니다.",
        en: "Discover places tourists never find on their own",
      },
    },
  ],
  moodAlts: [
    { ko: "서울 분위기 1", en: "Seoul atmosphere 1" },
    { ko: "서울 분위기 2", en: "Seoul atmosphere 2" },
    { ko: "서울 분위기 3", en: "Seoul atmosphere 3" },
  ] satisfies Tx[],
  sec3Title: { ko: "서울 탐험을 시작하세요", en: "Start Exploring Seoul" },
  sec3Body: {
    ko: "여행이 기억에 남는 이야기가 되도록 장소를 찾아보세요.",
    en: "Find places that turn your trip into a story worth remembering.",
  },
  heroImgAlt: { ko: "서울 도심 풍경", en: "Seoul cityscape" },
};

const about = {
  title: { ko: "HIDE&SEEK 소개", en: "About HIDE&SEEK" },
  lead: {
    ko: "호기심 많은 여행자를 위한 숨은 서울 발견 서비스입니다.",
    en: "A hidden Seoul discovery service for curious travelers.",
  },
  whyTitle: { ko: "HIDE&SEEK를 만든 이유", en: "Why We Created HIDE&SEEK" },
  p1: {
    ko: "서울의 진짜 매력은 유명 관광지가 아니라 골목과 사람, 오래된 공간과 로컬 문화 속에 있습니다.",
    en: "Seoul's true charm lives in alleys, people, old spaces, and local culture—not only in famous sights.",
  },
  p2: {
    ko: "유명 관광지만 찾아다니면 서울의 진짜 얼굴을 놓치기 쉽습니다. 골목과 사람, 오래된 공간, 그 사이에서 조용히 이어지는 로컬 문화에 매력이 있습니다.",
    en: "Seoul's true charm isn't found in famous tourist spots, but in the alleys, the people, the old spaces, and the local culture that thrives quietly in between.",
  },
  p3: {
    ko: "우리는 전형적인 관광을 넘어 더 깊은 서울을 찾는 여행자와 이 숨은 이야기를 나누고자 HIDE&SEEK를 만들었습니다. 가이드에서 놓치기 쉬운, 로컬이 사랑하는 서울을 보여 드립니다.",
    en: "We created HIDE&SEEK to share these hidden stories with travelers who seek something deeper than the typical tourist experience. Our curated journeys reveal the Seoul that locals love—the one that guidebooks often miss.",
  },
  guidesTitle: { ko: "로컬 가이드", en: "Local Guides" },
  guidesLead: {
    ko: "각 여정을 로컬 전문성과 세심함으로 큐레이션하는 서울 토박이들을 만나보세요.",
    en: "Meet the Seoul natives who curate each experience with care and local expertise.",
  },
  guideCards: [
    {
      name: { ko: "가이드 1", en: "Guide 1" },
      expertise: {
        ko: "전통 골목 / 한옥 / 로컬 카페 전문",
        en: "Traditional alleys, hanok villages, and hidden cafés",
      },
      description: {
        ko: "전통 골목, 한옥 마을, 숨은 카페.",
        en: "Traditional alleys, hanok villages, and hidden cafés",
      },
    },
    {
      name: { ko: "가이드 2", en: "Guide 2" },
      expertise: {
        ko: "서울 야경 / 로컬 음식 / 밤문화 전문",
        en: "Seoul nightscapes, local food, and night culture",
      },
      description: {
        ko: "서울 야경, 로컬 푸드, 밤의 문화.",
        en: "Seoul nightscapes, local food, and night culture",
      },
    },
    {
      name: { ko: "가이드 3", en: "Guide 3" },
      expertise: {
        ko: "예술 / 빈티지 / 로컬 문화 전문",
        en: "Art scenes, vintage culture, and local communities",
      },
      description: {
        ko: "예술 현장, 빈티지 문화, 동네 공동체.",
        en: "Art scenes, vintage culture, and local communities",
      },
    },
  ],
  visionTitle: { ko: "비전", en: "Our Vision" },
  visionA: { ko: "서울은 목적지 그 이상입니다", en: "Seoul is more than a destination" },
  visionB: {
    ko: "— 발견을 기다리는 숨은 순간들의 도시입니다.",
    en: "— it is a city of hidden moments waiting to be discovered.",
  },
  visionC: {
    ko: "서울은 단순한 관광지가 아니라 숨겨진 순간들로 이루어진 도시입니다.",
    en: "Seoul is a city of hidden moments—not only a list of sights.",
  },
  galleryAlts: [
    { ko: "서울 분위기", en: "Seoul atmosphere" },
    { ko: "로컬 카페", en: "Local café" },
    { ko: "서울의 밤", en: "Seoul night" },
  ] satisfies Tx[],
};

const experiences = {
  title: { ko: "큐레이션 서울 체험", en: "Curated Seoul Experiences" },
  subtitle: {
    ko: "서울의 숨은 분위기를 열어 주는 여정을 만나보세요.",
    en: "Explore carefully designed journeys that reveal the hidden atmosphere of Seoul.",
  },
  exploreLink: { ko: "이 여정 살펴보기", en: "Explore this journey" },
  spots: { ko: "곳", en: "spots" },
} satisfies Record<string, Tx>;

const notFoundPage = {
  title: { ko: "페이지를 찾을 수 없습니다", en: "Page not found" },
  cta: { ko: "홈으로 돌아가기", en: "Back to Home" },
} satisfies Record<string, Tx>;

const courseDetail = {
  back: { ko: "체험 목록으로", en: "Back to Experiences" },
  missing: { ko: "코스를 찾을 수 없습니다", en: "Course not found" },
  routeTitle: { ko: "코스 동선", en: "Course Route" },
  placesTitle: { ko: "방문 장소", en: "Places You'll Visit" },
  highlightsTitle: { ko: "하이라이트", en: "Highlights" },
  locationsLabel: { ko: "개 장소", en: "locations" },
} satisfies Record<string, Tx>;

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
    },
  };
}
