import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { FACEBOOK_GROUP_URL, INSTAGRAM_REEL_URL } from "./siteCopy";

const linkBase =
  "inline-flex items-center justify-center gap-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function SocialLinkRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>{children}</div>;
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

type SocialButtonProps = {
  label: string;
  className?: string;
  variant?: "gradient" | "outline" | "ghost" | "nav";
};

export function InstagramButton({ label, className = "", variant = "gradient" }: SocialButtonProps) {
  const variants = {
    gradient:
      "rounded-full bg-gradient-to-r from-[#f09433] via-[#e1306c] to-[#bc1888] px-6 py-3 text-sm text-white shadow-md hover:shadow-lg hover:brightness-105 [&_svg]:stroke-white",
    outline:
      "rounded-full border-2 border-[#e1306c] bg-white/90 px-6 py-3 text-sm text-[#bc1888] shadow-sm backdrop-blur-sm hover:bg-[#fdf2f8]",
    ghost: "text-sm text-gray-700 hover:text-gray-900",
    nav: "rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  };

  return (
    <a
      href={INSTAGRAM_REEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${linkBase} ${variants[variant]} ${className}`}
    >
      <InstagramIcon className={variant === "nav" ? "h-5 w-5" : "h-4 w-4 shrink-0"} />
      {variant !== "nav" ? <span style={{ fontWeight: 600 }}>{label}</span> : null}
      {variant === "gradient" || variant === "outline" ? <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" /> : null}
    </a>
  );
}

export function FacebookButton({ label, className = "", variant = "gradient" }: SocialButtonProps) {
  const variants = {
    gradient:
      "rounded-full bg-[#1877F2] px-6 py-3 text-sm text-white shadow-md hover:bg-[#166FE5] hover:shadow-lg",
    outline:
      "rounded-full border-2 border-[#1877F2] bg-white/90 px-6 py-3 text-sm text-[#1877F2] shadow-sm backdrop-blur-sm hover:bg-[#1877F2]/5",
    ghost: "text-sm text-gray-700 hover:text-[#1877F2]",
    nav: "rounded-full p-2 text-gray-600 hover:bg-[#1877F2]/10 hover:text-[#1877F2]",
  };

  return (
    <a
      href={FACEBOOK_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${linkBase} ${variants[variant]} ${className}`}
    >
      <FacebookIcon className={variant === "nav" ? "h-5 w-5" : "h-4 w-4 shrink-0"} />
      {variant !== "nav" ? <span style={{ fontWeight: 600 }}>{label}</span> : null}
      {variant === "gradient" || variant === "outline" ? <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" /> : null}
    </a>
  );
}

type SocialBannerProps = {
  title: string;
  body: string;
  instagramCta: string;
  facebookCta: string;
  className?: string;
  /** Home: Facebook-first blue theme. Other pages: Instagram gradient theme. */
  theme?: "facebook" | "instagram";
};

export function SocialBanner({
  title,
  body,
  instagramCta,
  facebookCta,
  className = "",
  theme = "facebook",
}: SocialBannerProps) {
  const isFacebook = theme === "facebook";

  return (
    <section className={`px-5 lg:px-6 ${className}`}>
      <div
        className={`mx-auto max-w-6xl overflow-hidden rounded-2xl p-8 text-white shadow-lg md:p-10 ${
          isFacebook
            ? "bg-gradient-to-br from-[#1877F2] via-[#166FE5] to-[#0d5bb5]"
            : "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]"
        }`}
      >
        <div className="mb-6 flex items-start gap-4 md:mb-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center gap-1 rounded-2xl bg-white/20 backdrop-blur-sm">
            {isFacebook ? (
              <>
                <FacebookIcon className="h-8 w-8" />
                <InstagramIcon className="h-6 w-6 stroke-white" />
              </>
            ) : (
              <>
                <InstagramIcon className="h-7 w-7 stroke-white" />
                <FacebookIcon className="h-6 w-6" />
              </>
            )}
          </div>
          <div>
            <h2 className="mb-2 text-2xl tracking-tight md:text-3xl" style={{ fontWeight: 700 }}>
              {title}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/90 md:text-base">{body}</p>
          </div>
        </div>
        <SocialLinkRow className="justify-start md:justify-end">
          {isFacebook ? (
            <>
              <FacebookButton
                label={facebookCta}
                variant="outline"
                className="!border-white !bg-white !text-[#1877F2] hover:!bg-white/95 shrink-0"
              />
              <InstagramButton
                label={instagramCta}
                variant="outline"
                className="!border-white/80 !bg-white/15 !text-white hover:!bg-white/25 shrink-0 [&_svg]:stroke-white"
              />
            </>
          ) : (
            <>
              <InstagramButton
                label={instagramCta}
                variant="outline"
                className="!border-white !bg-white !text-[#bc1888] hover:!bg-white/95 shrink-0"
              />
              <FacebookButton
                label={facebookCta}
                variant="outline"
                className="!border-white !bg-white !text-[#1877F2] hover:!bg-white/95 shrink-0"
              />
            </>
          )}
        </SocialLinkRow>
      </div>
    </section>
  );
}

/** Nav bar: icon-only Instagram + Facebook */
export function SocialNavButtons({
  instagramLabel,
  facebookLabel,
  className = "",
}: {
  instagramLabel: string;
  facebookLabel: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <FacebookButton label={facebookLabel} variant="nav" />
      <InstagramButton label={instagramLabel} variant="nav" />
    </div>
  );
}
