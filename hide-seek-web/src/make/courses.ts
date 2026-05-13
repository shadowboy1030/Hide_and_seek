import { Camera, Coffee, Star, type LucideIcon } from "lucide-react";
import type { Language } from "../i18n";
import type { Tx } from "./pick";
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
    title: { ko: "옛골목 이야기", en: "Old Alley Stories" },
    subtitle: {
      ko: "안국·북촌 일대 숨은 한옥 골목과 로컬 카페",
      en: "Hidden hanok alleys and local cafés around Anguk and Bukchon.",
    },
    description: {
      ko: "숨은 한옥 골목, 조용한 뒷골목, 전통 찻집과 로컬 상점을 거닐며 옛 서울의 시간을 느껴 보세요.",
      en: "Wander through hidden hanok alleys, quiet backstreets, traditional cafés, and local shops that reveal the timeless atmosphere of old Seoul.",
    },
    image:
      "https://images.unsplash.com/photo-1702737832045-197d00365055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "3–4시간", en: "3-4 hours" },
    route: {
      ko: "안국 → 북촌 → 삼청동 → 한옥 카페",
      en: "Anguk → Bukchon → Samcheong-dong → Hanok Café",
    },
    places: [
      {
        name: { ko: "안국역 일대", en: "Anguk Station" },
        description: {
          ko: "옛 서울과 현대 문화가 만나는 전통 거리.",
          en: "Traditional streets where old Seoul and modern culture meet.",
        },
      },
      {
        name: { ko: "북촌 숨은 골목", en: "Bukchon Hidden Alleys" },
        description: {
          ko: "붐비는 관광 동선에서 벗어난 고요한 한옥 골목.",
          en: "Quiet hanok alleys away from crowded tourist paths.",
        },
      },
      {
        name: { ko: "삼청동", en: "Samcheong-dong" },
        description: {
          ko: "로컬 상점, 갤러리, 고즈넉한 카페.",
          en: "Local shops, galleries, and peaceful cafés.",
        },
      },
      {
        name: { ko: "전통 한옥 찻집", en: "Traditional Hanok Café" },
        description: {
          ko: "한옥에서 즐기는 한국 다도와 차 문화.",
          en: "Experience Korean tea culture in an authentic hanok setting.",
        },
      },
    ],
    highlights: [
      { Icon: Camera, text: { ko: "포토 스팟", en: "Best Photo Spots" } },
      { Icon: Coffee, text: { ko: "로컬 디저트", en: "Local Dessert Experience" } },
      { Icon: Star, text: { ko: "숨은 골목", en: "Hidden Local Streets" } },
    ],
    closingText: {
      ko: "서울의 더 고요하고 시간이 머문 면모를 느껴 보세요.",
      en: "Experience the quieter and more timeless side of Seoul.",
    },
  },
  {
    id: "seoul-nights-baseball",
    title: { ko: "서울의 밤 & 야구 문화", en: "Seoul Nights & Baseball Culture" },
    subtitle: {
      ko: "KBO 문화, 로컬 카페, 잠실의 밤",
      en: "KBO culture, local cafés, and Jamsil nightlife.",
    },
    description: {
      ko: "로컬 카페, KBO 야구 문화, 호수 야경, 어두워진 뒤의 활기찬 잠실을 함께 걸어요.",
      en: "Experience Seoul's energetic nightlife through local cafés, KBO baseball culture, lakeside night views, and the vibrant atmosphere of Jamsil after dark.",
    },
    image:
      "https://images.unsplash.com/photo-1645451350581-2aebd3932286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "4–5시간", en: "4-5 hours" },
    route: {
      ko: "송리단길 → 잠실야구장 → 석촌호수 → 롯데월드타워",
      en: "Songri-dan-gil → Jamsil Baseball Stadium → Seokchon Lake → Lotte World Tower",
    },
    places: [
      {
        name: { ko: "송리단길", en: "Songri-dan-gil" },
        description: {
          ko: "잠실 인근 트렌디한 카페와 로컬 맛집.",
          en: "Trendy cafés and local restaurants near Jamsil.",
        },
      },
      {
        name: { ko: "잠실야구장", en: "Jamsil Baseball Stadium" },
        description: {
          ko: "뜨거운 응원이 이어지는 KBO 야구 문화.",
          en: "Experience the passionate KBO baseball culture.",
        },
      },
      {
        name: { ko: "석촌호수", en: "Seokchon Lake" },
        description: {
          ko: "잔잔한 호숫가의 야경.",
          en: "Beautiful night views and peaceful lakeside atmosphere.",
        },
      },
      {
        name: { ko: "롯데월드타워 일대", en: "Lotte World Tower Area" },
        description: {
          ko: "밤하늘을 수놓는 현대 서울의 스카이라인.",
          en: "Modern Seoul's iconic skyline at night.",
        },
      },
    ],
    highlights: [
      { Icon: Star, text: { ko: "KBO 야구", en: "KBO Baseball Experience" } },
      { Icon: Camera, text: { ko: "야간 촬영", en: "Night Photography" } },
      { Icon: Coffee, text: { ko: "밤의 카페", en: "Local Night Cafés" } },
    ],
    closingText: {
      ko: "서울 밤의 에너지와 스포츠 문화를 온몸으로 느껴 보세요.",
      en: "Feel the energy of Seoul's vibrant nightlife and sports culture.",
    },
  },
  {
    id: "beneath-namsan",
    title: { ko: "남산 아래", en: "Beneath Namsan" },
    subtitle: {
      ko: "남산 아래 숨은 거리와 레트로 밤문화",
      en: "Hidden streets and retro nightlife beneath Namsan.",
    },
    description: {
      ko: "언덕 마을 시장, 숨은 카페, 빈티지 거리, 남산을 둘러싼 심야 로컬 문화를 탐험해요.",
      en: "Explore hillside markets, hidden cafés, vintage streets, and Seoul's late-night local culture surrounding Namsan.",
    },
    image:
      "https://images.unsplash.com/photo-1687777504692-e825e3cb0e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "3–4시간", en: "3-4 hours" },
    route: {
      ko: "해방촌 → 후암동 → 남대문 → 충무로",
      en: "Haebangchon → Huam-dong → Namdaemun → Chungmuro",
    },
    places: [
      {
        name: { ko: "해방촌", en: "Haebangchon" },
        description: {
          ko: "독특한 카페가 모인 국제적인 언덕 동네.",
          en: "International hillside neighborhood with unique cafés.",
        },
      },
      {
        name: { ko: "후암동", en: "Huam-dong" },
        description: {
          ko: "숨은 빈티지 숍과 로컬 식당.",
          en: "Hidden vintage shops and local eateries.",
        },
      },
      {
        name: { ko: "남대문시장", en: "Namdaemun Market" },
        description: {
          ko: "한국 최대 규모의 전통 시장.",
          en: "Korea's largest traditional market.",
        },
      },
      {
        name: { ko: "충무로", en: "Chungmuro" },
        description: {
          ko: "레트로한 거리와 심야 로컬 문화.",
          en: "Retro streets and late-night local culture.",
        },
      },
    ],
    highlights: [
      { Icon: Star, text: { ko: "빈티지 쇼핑", en: "Vintage Shopping" } },
      { Icon: Coffee, text: { ko: "언덕 카페", en: "Hillside Cafés" } },
      { Icon: Camera, text: { ko: "레트로 서울", en: "Retro Seoul Vibes" } },
    ],
    closingText: {
      ko: "남산 아래에서 옛것과 새것이 뒤섞인 매력을 발견하세요.",
      en: "Discover the eclectic blend of old and new beneath Namsan.",
    },
  },
  {
    id: "artistic-seoul",
    title: { ko: "예술의 서울", en: "Artistic Seoul" },
    subtitle: {
      ko: "연극 거리, 빈티지 문화, 숨은 밤문화",
      en: "Theater streets, vintage culture, and hidden nightlife.",
    },
    description: {
      ko: "대학로의 연극 문화부터 동묘의 보물 찾기, 신당동의 숨은 바까지.",
      en: "From Daehangno's theater culture to treasure hunting in Dongmyo and hidden bars in Sindang-dong.",
    },
    image:
      "https://images.unsplash.com/photo-1682452057391-800e24d8454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "4–5시간", en: "4-5 hours" },
    route: {
      ko: "대학로 → 동묘 → 신당동 → 낙산공원",
      en: "Daehangno → Dongmyo → Sindang-dong → Naksan Park",
    },
    places: [
      {
        name: { ko: "대학로", en: "Daehangno" },
        description: {
          ko: "거리 공연이 이어지는 서울의 연극 거리.",
          en: "Seoul's theater district with vibrant street performances.",
        },
      },
      {
        name: { ko: "동묘 벼룩시장", en: "Dongmyo Vintage Market" },
        description: {
          ko: "서울 최대 빈티지 시장에서 보물 찾기.",
          en: "Treasure hunt through Seoul's largest vintage market.",
        },
      },
      {
        name: { ko: "신당동", en: "Sindang-dong" },
        description: {
          ko: "숨은 바와 정겨운 로컬 식탁.",
          en: "Hidden bars and authentic local dining.",
        },
      },
      {
        name: { ko: "낙산공원", en: "Naksan Park" },
        description: {
          ko: "서울을 내려다보는 야경.",
          en: "Panoramic night views of Seoul.",
        },
      },
    ],
    highlights: [
      { Icon: Star, text: { ko: "연극 문화", en: "Theater Culture" } },
      { Icon: Coffee, text: { ko: "숨은 바", en: "Hidden Bars" } },
      { Icon: Camera, text: { ko: "빈티지 발견", en: "Vintage Finds" } },
    ],
    closingText: {
      ko: "서울의 예술적·보헤미안한 면모에 빠져 보세요.",
      en: "Immerse yourself in Seoul's artistic and bohemian side.",
    },
  },
  {
    id: "palace-forest-paths",
    title: { ko: "궁과 숲길", en: "Palace & Forest Paths" },
    subtitle: {
      ko: "고즈넉한 동네와 궁궐 풍경",
      en: "Quiet neighborhoods and historic palace scenery.",
    },
    description: {
      ko: "부암동의 예술적 분위기부터 덕수궁의 우아함까지.",
      en: "From the artistic atmosphere of Buam-dong to the elegance of Deoksugung Palace.",
    },
    image:
      "https://images.unsplash.com/photo-1704719849782-43b2fd97e405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "반나절", en: "Half day" },
    route: {
      ko: "부암동 → 서촌 → 경복궁 → 덕수궁",
      en: "Buam-dong → Seochon → Gyeongbokgung → Deoksugung",
    },
    places: [
      {
        name: { ko: "부암동", en: "Buam-dong" },
        description: {
          ko: "갤러리와 카페가 어우러진 예술적인 언덕 마을.",
          en: "Artistic hillside village with galleries and cafés.",
        },
      },
      {
        name: { ko: "서촌", en: "Seochon" },
        description: {
          ko: "경복궁 서쪽의 전통 동네.",
          en: "Traditional neighborhood west of Gyeongbokgung.",
        },
      },
      {
        name: { ko: "경복궁", en: "Gyeongbokgung Palace" },
        description: {
          ko: "조선의 대표 궁궐.",
          en: "Korea's grandest royal palace.",
        },
      },
      {
        name: { ko: "덕수궁", en: "Deoksugung Palace" },
        description: {
          ko: "돌담길이 아름다운 우아한 궁궐.",
          en: "Elegant palace with beautiful stonewall paths.",
        },
      },
    ],
    highlights: [
      { Icon: Star, text: { ko: "궁궐 건축", en: "Palace Architecture" } },
      { Icon: Coffee, text: { ko: "예술 카페", en: "Artistic Cafés" } },
      { Icon: Camera, text: { ko: "자연과 역사", en: "Nature & History" } },
    ],
    closingText: {
      ko: "수백 년의 역사와 자연을 한 걸음에 담아 걸어요.",
      en: "Walk through centuries of Korean history and natural beauty.",
    },
  },
  {
    id: "beyond-guidebooks",
    title: { ko: "가이드북 너머의 서울", en: "Seoul Beyond the Guidebooks" },
    subtitle: {
      ko: "숨은 문화와 이야기로 빚어진 서울의 한 면",
      en: "A side of Seoul shaped by hidden culture and stories.",
    },
    description: {
      ko: "숨은 골목, 로컬 문화, 예술 공간, 잊히지 않는 이야기로 완성되는 서울을 만나요.",
      en: "Discover a side of Seoul shaped by hidden alleys, local culture, artistic spaces, and unforgettable stories.",
    },
    image:
      "https://images.unsplash.com/photo-1694276971921-ff8f103752eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    duration: { ko: "맞춤", en: "Flexible" },
    route: {
      ko: "서울 곳곳의 숨은 명소",
      en: "Various Hidden Spots Across Seoul",
    },
    places: [
      {
        name: { ko: "숨은 골목", en: "Hidden Alleyways" },
        description: {
          ko: "로컬이 사랑하는 비밀 같은 통로와 조용한 거리.",
          en: "Secret passages and quiet streets locals love.",
        },
      },
      {
        name: { ko: "독립 서점", en: "Independent Bookstores" },
        description: {
          ko: "엄선된 책과 아늑한 독서 공간.",
          en: "Curated book collections and cozy reading spaces.",
        },
      },
      {
        name: { ko: "지하 예술 공간", en: "Underground Art Spaces" },
        description: {
          ko: "정해진 동선 밖의 갤러리와 창작 스튜디오.",
          en: "Galleries and creative studios off the beaten path.",
        },
      },
      {
        name: { ko: "로컬 시장", en: "Local Markets" },
        description: {
          ko: "진짜 시장 분위기와 길거리 음식.",
          en: "Authentic market culture and street food.",
        },
      },
    ],
    highlights: [
      { Icon: Star, text: { ko: "로컬의 비밀", en: "Local Secrets" } },
      { Icon: Coffee, text: { ko: "진짜 경험", en: "Authentic Experiences" } },
      { Icon: Camera, text: { ko: "숨은 이야기", en: "Hidden Stories" } },
    ],
    closingText: {
      ko: "로컬만 아는 서울을 발견해 보세요.",
      en: "Uncover the Seoul that only locals know.",
    },
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
