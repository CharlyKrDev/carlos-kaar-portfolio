import type { Certification } from "../../types/certification";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <article className="flex h-full flex-col border border-slate-800 p-5">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
            {certification.issuer}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-100">
            {certification.title}
          </h3>
        </div>

        <span className="font-mono text-xs text-slate-500">
          {certification.year}
        </span>
      </header>

      {certification.achievement && (
        <div className="mt-4">
          <span className="border border-violet-400 px-2 py-1 font-mono text-xs uppercase tracking-wider text-violet-400">
            {certification.achievement}
          </span>
        </div>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {certification.skills.map((skill) => (
          <li
            key={skill}
            className="border border-slate-800 px-2 py-1 font-mono text-xs text-slate-400"
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
            className="font-mono text-sm text-violet-400 transition-colors duration-200 hover:text-violet-300"
          >
            &gt; view credential
          </a>
        </div>
      )}
    </article>
  );
}