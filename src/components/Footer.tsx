import { navItems } from "../data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <a
              href="#home"
              className="font-mono text-sm text-slate-200"
            >
              &gt;_ CKAAR
            </a>

            <p className="font-mono text-xs text-slate-500">
              Junior Backend Developer
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-mono text-xs uppercase tracking-wider text-slate-500 transition-colors duration-200 hover:text-violet-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4">
          <p className="font-mono text-xs text-slate-600">
            © {currentYear} Carlos Alberto Kaar
          </p>
        </div>
      </div>
    </footer>
  );
}