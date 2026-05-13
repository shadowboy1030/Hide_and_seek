import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { getCourseList } from "./courses";
import { ImageWithFallback } from "./ImageWithFallback";
import { siteCopy } from "./siteCopy";

export function Experiences() {
  const { language } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);
  const courses = useMemo(() => getCourseList(language), [language]);

  return (
    <div className="bg-white pt-16">
      <section className="relative overflow-hidden px-5 py-24 lg:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-6xl text-center"
        >
          <h1 className="mb-6 text-5xl tracking-tight text-gray-900 md:text-6xl" style={{ fontWeight: 800 }}>
            {c.experiences.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">{c.experiences.subtitle}</p>
        </motion.div>
      </section>

      <section className="px-5 py-12 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {courses.map((course, index) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-xl"
              >
                <Link to={`/experiences/${course.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} />
                        <span>
                          {course.locations.length} {c.experiences.spots}
                        </span>
                      </div>
                    </div>

                    <h2 className="mb-2 text-2xl tracking-tight text-gray-900 md:text-3xl" style={{ fontWeight: 700 }}>
                      {course.title}
                    </h2>
                    <p className="mb-4 text-gray-600" style={{ fontWeight: 500 }}>
                      {course.subtitle}
                    </p>
                    <p className="mb-6 leading-relaxed text-gray-600">{course.description}</p>

                    <div className="text-primary group-hover:gap-3 flex items-center gap-2 transition-all" style={{ fontWeight: 600 }}>
                      <span>{c.experiences.exploreLink}</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
