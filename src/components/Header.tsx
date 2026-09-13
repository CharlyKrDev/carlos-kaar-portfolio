import { useState } from "react";
import { navItems } from "../data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="font-mono text-sm text-slate-200">
            &gt;_ CKAAR
          </a>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors duration-200 hover:text-violet-400"
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
            className="font-mono text-xs uppercase tracking-wider text-slate-300 md:hidden"
          >
            {isOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-800 py-4 md:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors duration-200 hover:text-violet-400"
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
