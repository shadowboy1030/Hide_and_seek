import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1596423660989-e45b4f3d9b51?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(100dvh,900px)] flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-32 pt-28 sm:px-8 lg:max-w-3xl lg:px-12 lg:pb-40">
        <h1 className="font-[family-name:var(--font-hs-display)] text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">Find Your</span>
          <span className="block">Own Korea</span>
        </h1>
        <Link
          href="#reserve"
          className="mt-8 inline-flex w-fit items-center justify-center bg-[var(--hs-mint)] px-6 py-3 text-sm font-semibold tracking-wide text-black transition hover:brightness-95"
        >
          Reserve your spot
        </Link>
      </div>

      <div className="relative z-10 bg-[var(--hs-blue)] px-4 py-4 text-center text-sm font-medium leading-snug text-white sm:px-8 sm:text-base">
        Discover the hidden atmosphere of Seoul through local stories, quiet
        alleys, and unforgettable moments.
      </div>
    </section>
  );
}
