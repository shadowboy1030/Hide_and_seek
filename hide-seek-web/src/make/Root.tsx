import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";
import { siteCopy } from "./siteCopy";

export function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useI18n();
  const c = useMemo(() => siteCopy(language), [language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
          isScrolled ? "border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-6">
          <div className="flex h-16 flex-1 items-center justify-between gap-4">
            <Link to="/" className="text-xl tracking-tight" style={{ fontWeight: 700 }}>
              HIDE&SEEK
            </Link>

            <div className="flex items-center gap-2 lg:gap-4">
              <div className="hidden items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-0.5 sm:flex">
                <button
                  type="button"
                  onClick={() => setLanguage("ko")}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                    language === "ko" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  한국어
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                    language === "en" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 transition-colors hover:text-gray-900 lg:hidden"
                aria-label={c.nav.menu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="hidden items-center gap-8 lg:flex">
                <Link to="/" className="text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                  {c.nav.home}
                </Link>
                <Link to="/experiences" className="text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                  {c.nav.experiences}
                </Link>
                <Link to="/about" className="text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                  {c.nav.about}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="space-y-3 px-5 py-4">
              <div className="mb-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("ko")}
                  className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold ${
                    language === "ko" ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-gray-600"
                  }`}
                >
                  한국어
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold ${
                    language === "en" ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-gray-600"
                  }`}
                >
                  EN
                </button>
              </div>
              <Link to="/" className="block text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                {c.nav.home}
              </Link>
              <Link to="/experiences" className="block text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                {c.nav.experiences}
              </Link>
              <Link to="/about" className="block text-[15px] text-gray-700 transition-colors hover:text-gray-900" style={{ fontWeight: 500 }}>
                {c.nav.about}
              </Link>
            </div>
          </div>
        ) : null}
      </nav>

      <Outlet />

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg" style={{ fontWeight: 700 }}>
                {c.footer.brand}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">{c.footer.tagline}</p>
            </div>
            <div>
              <h4 className="mb-3 text-sm" style={{ fontWeight: 600 }}>
                {c.footer.explore}
              </h4>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-gray-600 transition-colors hover:text-gray-900">
                  {c.footer.navHome}
                </Link>
                <Link to="/experiences" className="block text-sm text-gray-600 transition-colors hover:text-gray-900">
                  {c.footer.navExperiences}
                </Link>
                <Link to="/about" className="block text-sm text-gray-600 transition-colors hover:text-gray-900">
                  {c.footer.navAbout}
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm" style={{ fontWeight: 600 }}>
                {c.footer.connect}
              </h4>
              <p className="text-sm text-gray-600">{c.footer.connectBody}</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">{c.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
