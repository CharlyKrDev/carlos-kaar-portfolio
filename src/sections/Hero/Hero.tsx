import { HeroContent } from "./HeroContent";
import { SystemPanel } from "./SystemPanel";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <HeroContent />
        <SystemPanel />
      </div>
    </section>
  );
}