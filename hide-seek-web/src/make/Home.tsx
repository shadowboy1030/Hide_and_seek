import { motion } from "motion/react";
import { ArrowRight, BookOpen, Heart, MapPin } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { ImageWithFallback } from "./ImageWithFallback";
import { InstagramBanner, InstagramButton } from "./InstagramLink";
import { siteCopy } from "./siteCopy";

export function Home() {
  const { language } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);

  const atmosphereImages = [
    {
      src: "https://images.unsplash.com/photo-1702737832045-197d00365055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: c.home.imgAlts[0],
    },
    {
      src: "https://images.unsplash.com/photo-1647168585912-24956ee922aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: c.home.imgAlts[1],
    },
    {
      src: "https://images.unsplash.com/photo-1682452057391-800e24d8454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: c.home.imgAlts[2],
    },
    {
      src: "https://images.unsplash.com/photo-1704719849782-43b2fd97e405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: c.home.imgAlts[3],
    },
  ];

  const reasons = useMemo(
    () => [
      { icon: MapPin, title: c.home.reasons[0].title, description: c.home.reasons[0].body },
      { icon: BookOpen, title: c.home.reasons[1].title, description: c.home.reasons[1].body },
      { icon: Heart, title: c.home.reasons[2].title, description: c.home.reasons[2].body },
    ],
    [c.home.reasons],
  );

  const moodImages = [
    "https://images.unsplash.com/photo-1694276971921-ff8f103752eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1704719849577-8389407e1345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1687777595424-ca2844414b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  ];

  return (
    <div className="bg-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/30 via-white/60 to-white" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1553710080-960a5f3aa839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
          alt={c.home.heroImgAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-4xl px-5 pt-20 text-center"
        >
          <h1 className="mb-6 text-6xl tracking-tight text-gray-900 md:text-8xl" style={{ fontWeight: 800 }}>
            HIDE&SEEK
          </h1>
          <p className="mb-4 text-3xl tracking-tight text-gray-800 md:text-5xl" style={{ fontWeight: 700 }}>
            {c.home.heroLine}
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl" style={{ fontWeight: 500 }}>
            {c.home.heroSub}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/experiences"
              className="bg-primary hover:bg-blue-600 inline-flex items-center gap-2 rounded-full px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl"
              style={{ fontWeight: 600 }}
            >
              {c.home.cta}
              <ArrowRight size={20} />
            </Link>
            <InstagramButton label={c.instagram.cta} variant="outline" />
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-50 px-5 py-24 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl tracking-tight text-gray-900 md:text-5xl" style={{ fontWeight: 700 }}>
              {c.home.sec1Title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">{c.home.sec1Body}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {atmosphereImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl tracking-tight text-gray-900 md:text-5xl" style={{ fontWeight: 700 }}>
              {c.home.sec2Title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">{c.home.sec2Lead}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="bg-primary/10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full">
                    <Icon className="text-primary h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl text-gray-900" style={{ fontWeight: 600 }}>
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-24 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {moodImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[4/5] overflow-hidden rounded-2xl shadow-md"
              >
                <ImageWithFallback
                  src={src}
                  alt={c.home.moodAlts[index] ?? `Mood ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InstagramBanner
        className="py-12"
        title={c.instagram.bannerTitle}
        body={c.instagram.bannerBody}
        cta={c.instagram.bannerCta}
      />

      <section className="px-5 py-24 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-4xl tracking-tight text-gray-900 md:text-5xl" style={{ fontWeight: 700 }}>
            {c.home.sec3Title}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-600">{c.home.sec3Body}</p>
          <Link
            to="/experiences"
            className="bg-primary hover:bg-blue-600 inline-flex items-center gap-2 rounded-full px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl"
            style={{ fontWeight: 600 }}
          >
            {c.home.cta}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
