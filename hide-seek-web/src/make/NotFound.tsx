import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { siteCopy } from "./siteCopy";

export function NotFound() {
  const { language } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-5 pt-20">
      <div className="text-center">
        <h1 className="mb-6 text-8xl text-gray-900 md:text-9xl" style={{ fontWeight: 800 }}>
          404
        </h1>
        <p className="mb-8 text-2xl text-gray-600" style={{ fontWeight: 600 }}>
          {c.notFound.title}
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-blue-600 inline-flex items-center gap-2 rounded-full px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl"
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          {c.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
