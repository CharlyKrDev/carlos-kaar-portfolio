import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

import { navItems } from "../data/navigation";

import { BrandMark } from "./BrandMark";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.id)];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    const updateActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.35;

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= triggerPoint && rect.bottom > triggerPoint;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
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

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Main navigation">
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
                      {activeSection === item.id && (
                        <span className="text-accent-secondary">[</span>
                      )}
                      <span
                        className={
                          activeSection === item.id ? "text-accent" : ""
                        }
                      >
                        {t.navigation[item.id]}
                      </span>
                      {activeSection === item.id && (
                        <span className="text-accent-secondary">]</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-l border-line pl-5">
              <LanguageSwitcher />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="font-mono text-xs uppercase tracking-wider text-muted focus-ring md:hidden cursor-pointer"
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
                    &gt;
                    {activeSection === item.id && (
                      <span className="text-accent-secondary">[</span>
                    )}
                    <span
                      className={activeSection === item.id ? "text-accent" : ""}
                    >
                      {t.navigation[item.id]}
                    </span>
                    {activeSection === item.id && (
                      <span className="text-accent-secondary">]</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-line pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
