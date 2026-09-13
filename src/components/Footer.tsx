import { navItems } from "../data/navigation";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <a
              href="#home"
              className="focus-ring"
              aria-label="Carlos Kaar — Home"
            >
              <BrandMark />
            </a>

            <p className="font-mono text-xs text-dim">
              Junior Backend Developer
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-mono text-xs uppercase tracking-wider text-dim transition-colors duration-200 hover:text-accent focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-line pt-4">
          <p className="font-mono text-xs text-dim">
            © {currentYear} Carlos Alberto Kaar
          </p>
        </div>
      </div>
    </footer>
  );
}
