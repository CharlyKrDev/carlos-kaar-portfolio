type SectionHeaderProps = {
  id: string;
  number: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  id,
  number,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-8 space-y-2">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-violet-400">{number}</span>

        <span className="h-px w-8 bg-slate-700" />

        <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
          {label}
        </span>
      </div>

      <h2 id={id} className="text-3xl font-semibold tracking-tight text-slate-100">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          {description}
        </p>
      )}
    </header>
  );
}
