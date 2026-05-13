import { motion } from "motion/react";
import { Camera, Coffee, Palette } from "lucide-react";
import { useMemo } from "react";
import { useI18n } from "../i18n";
import introImg from "../assets/about/intro.png";
import guide1Img from "../assets/about/guide-1.png";
import guide2Img from "../assets/about/guide-2.png";
import guide3Img from "../assets/about/guide-3.png";
import { ImageWithFallback } from "./ImageWithFallback";
import { siteCopy } from "./siteCopy";

const guideIcons = [Coffee, Camera, Palette] as const;
const guidePhotos = [guide1Img, guide2Img, guide3Img] as const;

export function About() {
  const { language } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);

  const guides = useMemo(
    () =>
      c.about.guideCards.map((g, i) => ({
        ...g,
        icon: guideIcons[i] ?? Coffee,
        photo: guidePhotos[i] ?? guide1Img,
      })),
    [c.about.guideCards],
  );

  return (
    <div className="bg-white pt-16">
      <section className="relative overflow-hidden px-5 py-24 lg:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-6 text-5xl tracking-tight text-gray-900 md:text-6xl" style={{ fontWeight: 800 }}>
            {c.about.title}
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-gray-600 md:text-2xl">{c.about.lead}</p>

          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="aspect-[3/4] w-full">
              <ImageWithFallback
                src={introImg}
                alt={language === "ko" ? `${c.about.title} 소개 이미지` : `${c.about.title} introduction`}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-16 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="mb-6 text-3xl tracking-tight text-gray-900 md:text-4xl" style={{ fontWeight: 700 }}>
              {c.about.whyTitle}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>{c.about.p1}</p>
              <p>{c.about.p2}</p>
              <p>{c.about.p3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl tracking-tight text-gray-900 md:text-4xl" style={{ fontWeight: 700 }}>
              {c.about.guidesTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{c.about.guidesLead}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={guide.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={guide.photo}
                      alt={guide.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8">
                    <div className="bg-primary/10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
                      <Icon className="text-primary h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl text-gray-900" style={{ fontWeight: 600 }}>
                      {guide.name}
                    </h3>
                    <p className="mb-3 text-sm text-gray-500" style={{ fontWeight: 500 }}>
                      {guide.expertise}
                    </p>
                    <p className="leading-relaxed text-gray-600">{guide.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl tracking-tight text-gray-900 md:text-4xl" style={{ fontWeight: 700 }}>
            {c.about.visionTitle}
          </h2>
          <p className="mb-4 text-2xl leading-relaxed text-gray-700 md:text-3xl" style={{ fontWeight: 600 }}>
            {c.about.visionA}
          </p>
          <p className="mb-6 text-2xl leading-relaxed text-gray-700 md:text-3xl" style={{ fontWeight: 600 }}>
            {c.about.visionB}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">{c.about.visionC}</p>
        </motion.div>
      </section>
    </div>
  );
}
