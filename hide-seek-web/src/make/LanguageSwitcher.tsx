import { LANGUAGE_OPTIONS } from "../i18n";
import { useI18n } from "../i18n";

type LanguageSwitcherProps = {
  /** Wider buttons for mobile drawer */
  layout?: "compact" | "wide";
};

export function LanguageSwitcher({ layout = "compact" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useI18n();

  if (layout === "wide") {
    return (
      <div className="mb-3 grid grid-cols-2 gap-2">
        {LANGUAGE_OPTIONS.map((opt) => (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            className={`rounded-full border px-3 py-2 text-sm font-semibold transition-colors ${
              language === opt.code ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-gray-600"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-gray-200 bg-gray-50 p-0.5">
      {LANGUAGE_OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLanguage(opt.code)}
          title={opt.label}
          className={`rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
            language === opt.code ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {opt.short}
        </button>
      ))}
    </div>
  );
}
