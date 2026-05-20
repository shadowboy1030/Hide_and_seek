import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { getCourseDetail } from "./courses";
import { ImageWithFallback } from "./ImageWithFallback";
import { siteCopy, TOUR_APPLICATION_FORM_URL } from "./siteCopy";

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const { language } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);
  const course = useMemo(() => getCourseDetail(courseId, language), [courseId, language]);

  const locationsMeta = useMemo(() => {
    if (!course) return "";
    return language === "ko" ? `${course.places.length}곳` : `${course.places.length} ${c.courseDetail.locationsLabel}`;
  }, [course, language, c.courseDetail.locationsLabel]);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5 pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-3xl" style={{ fontWeight: 700 }}>
            {c.courseDetail.missing}
          </h1>
          <Link to="/experiences" className="text-primary font-semibold hover:underline">
            {c.courseDetail.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16">
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-6">
        <Link
          to="/experiences"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
          style={{ fontWeight: 500 }}
        >
          <ArrowLeft size={20} />
          {c.courseDetail.back}
        </Link>
      </div>

      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback src={course.image} alt={course.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 bottom-0 left-0 p-8 text-white lg:p-12"
        >
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-4 text-4xl tracking-tight md:text-6xl" style={{ fontWeight: 800 }}>
              {course.title}
            </h1>
            <p className="mb-6 text-xl md:text-2xl" style={{ fontWeight: 500 }}>
              {course.subtitle}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{locationsMeta}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <section className="px-5 py-16 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-12 text-xl leading-relaxed text-gray-600">{course.description}</p>

            <div className="mb-12 rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl text-gray-900" style={{ fontWeight: 700 }}>
                {c.courseDetail.routeTitle}
              </h2>
              <p className="text-lg text-gray-700" style={{ fontWeight: 500 }}>
                {course.route}
              </p>
            </div>

            <h2 className="mb-8 text-3xl text-gray-900" style={{ fontWeight: 700 }}>
              {c.courseDetail.placesTitle}
            </h2>
            <div className="mb-12 space-y-8">
              {course.places.map((place, index) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-primary border-l-4 pl-6"
                >
                  <h3 className="mb-2 text-xl text-gray-900" style={{ fontWeight: 600 }}>
                    {place.name}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{place.description}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="mb-8 text-3xl text-gray-900" style={{ fontWeight: 700 }}>
              {c.courseDetail.highlightsTitle}
            </h2>
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {course.highlights.map((highlight, index) => {
                const Hi = highlight.Icon;
                return (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
                  >
                    <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                      <Hi className="text-primary h-6 w-6" />
                    </div>
                    <p className="text-gray-700" style={{ fontWeight: 500 }}>
                      {highlight.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#121826] p-10 text-center text-white md:p-12"
            >
              <p className="text-2xl leading-relaxed md:text-3xl" style={{ fontWeight: 600 }}>
                {course.closingText}
              </p>
              <a
                href={TOUR_APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 md:text-lg"
                style={{ fontWeight: 600 }}
              >
                {c.courseDetail.applyCta}
                <ArrowUpRight size={20} className="opacity-90" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
