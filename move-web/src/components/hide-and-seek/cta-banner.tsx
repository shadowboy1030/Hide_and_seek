import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="bg-[var(--hs-blue)] px-4 py-16 text-center sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-[family-name:var(--font-hs-display)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Find places that turn your trip into a story worth remembering.
        </h2>
        <Link
          href="#reserve"
          className="mt-10 inline-flex items-center justify-center bg-[var(--hs-mint)] px-8 py-3 text-sm font-semibold tracking-wide text-black transition hover:brightness-95"
        >
          Make memories
        </Link>
      </div>
    </section>
  );
}
