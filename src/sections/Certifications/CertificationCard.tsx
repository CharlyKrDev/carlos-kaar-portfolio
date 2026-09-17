import type { Certification } from "../../types/certification";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article
      className="
    flex
    h-full
    flex-col
    border
    border-line
    p-5
    transition-[border-color,background-color,transform]
    duration-200
    hover:border-line-strong
    hover:bg-surface/30
    focus-within:border-line-strong
    focus-within:bg-surface/30
  "
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
            {certification.issuer}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {certification.title}
          </h3>
        </div>

        <span className="font-mono text-xs text-dim">{certification.year}</span>
      </header>

      {certification.achievement && (
        <div className="mt-4">
          <span className="border border-accent px-2 py-1 font-mono text-xs uppercase tracking-wider text-accent">
            {certification.achievement}
          </span>
        </div>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {certification.skills.map((skill) => (
          <li
            key={skill}
            className="border border-line px-2 py-1 font-mono text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>

      {certification.credentialUrl && (
        <div className="mt-auto pt-6">
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            &gt; view credential
          </a>
        </div>
      )}
    </article>
  );
}
