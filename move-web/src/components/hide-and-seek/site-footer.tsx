import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="text-black">
      <div
        id="footer-socials"
        className="bg-[var(--hs-mint)] px-4 py-14 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-8">
          <div>
            <p className="font-[family-name:var(--font-hs-display)] text-5xl font-bold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
              HIDE
              <br />
              &amp;
              <br />
              SEEK
            </p>
          </div>
          <div className="space-y-2 text-sm leading-relaxed sm:text-base">
            <p className="font-semibold uppercase tracking-wider">Email</p>
            <p>
              <a className="underline decoration-1" href="mailto:hello@hideandseek.kr">
                hello@hideandseek.kr
              </a>
            </p>
            <p className="mt-6 font-semibold uppercase tracking-wider">
              Socials
            </p>
            <p>Instagram @hideandseek.seoul</p>
            <p>Facebook /hideandseekseoul</p>
          </div>
          <div className="space-y-2 text-sm leading-relaxed sm:text-base">
            <p className="font-semibold uppercase tracking-wider">Studio</p>
            <p>12 Samcheong-ro, Jongno-gu</p>
            <p>Seoul, South Korea</p>
            <p className="mt-4">
              <a href="tel:+82212345678" className="underline decoration-1">
                +82 2-1234-5678
              </a>
            </p>
            <p className="mt-8 text-xs text-neutral-600">
              HIDE &amp; SEEK © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 text-center text-sm font-semibold tracking-wide text-white sm:grid-cols-3">
        <Link
          href="#footer-socials"
          className="bg-[var(--hs-blue)] px-4 py-5 transition hover:brightness-110"
        >
          Our Socials
        </Link>
        <a
          href="mailto:hello@hideandseek.kr"
          className="bg-black px-4 py-5 transition hover:bg-neutral-900"
        >
          Email us
        </a>
        <Link
          href="#reserve"
          className="bg-[var(--hs-magenta)] px-4 py-5 text-black transition hover:brightness-110"
        >
          Book with us
        </Link>
      </div>
    </footer>
  );
}
