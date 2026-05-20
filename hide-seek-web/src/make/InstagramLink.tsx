import { ArrowUpRight } from "lucide-react";
import { INSTAGRAM_REEL_URL } from "./siteCopy";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  );
}

type InstagramButtonProps = {
  label: string;
  className?: string;
  variant?: "gradient" | "outline" | "ghost" | "nav";
};

export function InstagramButton({ label, className = "", variant = "gradient" }: InstagramButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    gradient:
      "rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] px-6 py-3 text-sm text-white shadow-md hover:shadow-lg hover:brightness-105",
    outline:
      "rounded-full border-2 border-gray-900 bg-white/90 px-6 py-3 text-sm text-gray-900 shadow-sm backdrop-blur-sm hover:bg-gray-50",
    ghost: "text-sm text-gray-700 hover:text-gray-900",
    nav: "rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  };

  return (
    <a
      href={INSTAGRAM_REEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <InstagramIcon className={variant === "nav" ? "h-5 w-5" : "h-4 w-4 shrink-0"} />
      {variant !== "nav" ? <span style={{ fontWeight: 600 }}>{label}</span> : null}
      {variant === "gradient" || variant === "outline" ? <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" /> : null}
    </a>
  );
}

type InstagramBannerProps = {
  title: string;
  body: string;
  cta: string;
  className?: string;
};

export function InstagramBanner({ title, body, cta, className = "" }: InstagramBannerProps) {
  return (
    <section className={`px-5 lg:px-6 ${className}`}>
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-8 text-white shadow-lg md:flex md:items-center md:justify-between md:gap-10 md:p-10">
        <div className="mb-6 flex items-start gap-4 md:mb-0 md:flex-1">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <InstagramIcon className="h-8 w-8" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl tracking-tight md:text-3xl" style={{ fontWeight: 700 }}>
              {title}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/90 md:text-base">{body}</p>
          </div>
        </div>
        <InstagramButton
          label={cta}
          variant="outline"
          className="!border-white !bg-white !text-[#bc1888] hover:!bg-white/95 shrink-0"
        />
      </div>
    </section>
  );
}
