import { useEffect, useState } from "react";
import { navItems } from "../data/navigation";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.id)];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="focus-ring"
            aria-label="Carlos Kaar — Home"
          >
            <BrandMark />
          </a>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-ring ${
                      activeSection === item.id
                        ? "text-accent"
                        : "text-muted hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="font-mono text-xs uppercase tracking-wider text-muted focus-ring md:hidden"
          >
            {isOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-line py-4 md:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-ring ${
                      activeSection === item.id
                        ? "text-accent"
                        : "text-muted hover:text-accent"
                    }`}
                  >
                    &gt; {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
