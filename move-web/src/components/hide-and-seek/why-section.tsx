import Image from "next/image";

const team = [
  {
    name: "Sophia Bennett",
    role: "Founder & Art Director",
    barClass: "bg-[var(--hs-magenta)]",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alisa Morris",
    role: "Founder & Program Manager",
    barClass: "bg-[var(--hs-mint)]",
    image:
      "https://images.unsplash.com/photo-1580489944761-f4c5f7c705d8?auto=format&fit=crop&w=800&q=80",
  },
];

const reasons = [
  {
    title: "Local Perspectives",
    text: "Explore places loved by locals — corners of the city that rarely make it into itineraries.",
  },
  {
    title: "Story-Driven Experiences",
    text: "Travel through meaningful stories, not just sights. Each route is built around atmosphere and narrative.",
  },
  {
    title: "Beyond Guidebooks",
    text: "Discover places most visitors miss: quiet alleys, neighborhood rhythms, and hidden vantage points.",
  },
];

export function WhySection() {
  return (
    <section id="themes" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h2 className="font-[family-name:var(--font-hs-display)] text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Why Seoul Unseen?
          </h2>
          <ul className="mt-10 space-y-8">
            {reasons.map((r) => (
              <li key={r.title}>
                <p className="text-lg font-bold text-black">{r.title}</p>
                <p className="mt-2 text-base leading-relaxed text-neutral-700">
                  {r.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm font-semibold tracking-[0.2em] text-neutral-500">
            — HIDE&amp;SEEK
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden">
              <div className="relative aspect-[4/5] max-h-[420px] w-full sm:max-h-none sm:aspect-[3/4]">
                <Image
                  src={m.image}
                  alt=""
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className={`px-5 py-4 sm:px-6 sm:py-5 ${m.barClass} text-black`}
              >
                <p className="text-lg font-bold">{m.name}</p>
                <p className="mt-1 text-sm font-medium opacity-90">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
