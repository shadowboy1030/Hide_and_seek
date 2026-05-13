import { BookingForm } from "@/components/hide-and-seek/booking-form";
import { CtaBanner } from "@/components/hide-and-seek/cta-banner";
import { FeatureSplit } from "@/components/hide-and-seek/feature-split";
import { Hero } from "@/components/hide-and-seek/hero";
import { MapStrip } from "@/components/hide-and-seek/map-strip";
import { SiteFooter } from "@/components/hide-and-seek/site-footer";
import { SiteHeader } from "@/components/hide-and-seek/site-header";
import { WhySection } from "@/components/hide-and-seek/why-section";

const imgNight =
  "https://images.unsplash.com/photo-151559837-4586-4aedb80d54d1?auto=format&fit=crop&w=1400&q=80";
const imgAlley =
  "https://images.unsplash.com/photo-1582600239484-0e56d873b78e?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureSplit
          id="explore"
          imageSrc={imgNight}
          imageAlt="Seoul at night along traditional stone walls"
          title="More Than a Tourist Destination"
          body="Seoul reveals its true charm when you step away from the main boulevards — through lantern-lit alleys, hillside viewpoints, and the quiet confidence of neighborhoods that have carried stories for generations."
          ctaLabel="Explore the Themes"
          ctaHref="#themes"
        />
        <FeatureSplit
          imageSrc={imgAlley}
          imageAlt="Traditional Korean alley at dusk"
          title="Hidden Moments Across the City"
          body="Each district hums with its own rhythm. We stitch together routes that follow light, texture, and local ritual — so your day feels less like a checklist and more like a narrative."
          ctaLabel="Explore the Themes"
          ctaHref="#themes"
        />
        <MapStrip />
        <WhySection />
        <CtaBanner />
        <BookingForm />
      </main>
      <SiteFooter />
    </div>
  );
}
