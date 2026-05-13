import Image from "next/image";
import Link from "next/link";

type FeatureSplitProps = {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function FeatureSplit({
  id,
  imageSrc,
  imageAlt,
  title,
  body,
  ctaLabel,
  ctaHref,
}: FeatureSplitProps) {
  return (
    <section id={id} className="grid md:grid-cols-2">
      <div className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[480px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="max-w-md font-[family-name:var(--font-hs-display)] text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
          {title}
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-700 sm:text-lg">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex w-fit items-center justify-center bg-[var(--hs-blue)] px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
