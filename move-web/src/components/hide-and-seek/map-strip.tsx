import Image from "next/image";

/** Lightweight map strip — links to open Seoul in maps. */
export function MapStrip() {
  return (
    <section
      id="map"
      className="scroll-mt-20 border-y border-black/10 bg-neutral-100"
    >
      <div className="relative mx-auto max-h-[220px] min-h-[180px] max-w-6xl overflow-hidden sm:max-h-[280px]">
        <Image
          src="https://images.unsplash.com/photo-1617870951329-11f8149aae58?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <a
            href="https://www.openstreetmap.org/search?query=Seoul#map=11/37.55/127.0"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/80 bg-black/50 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur hover:bg-black/70"
          >
            Open city map
          </a>
        </div>
      </div>
    </section>
  );
}
