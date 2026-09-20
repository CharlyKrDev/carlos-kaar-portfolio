import { useLanguage } from "../../i18n/LanguageContext";
type SystemRowProps = {
  label: string;
  value: string;
  accent?: boolean;
};

const stackRows: SystemRowProps[] = [
  {
    label: "runtime",
    value: "Node.js",
  },
  {
    label: "database",
    value: "PostgreSQL",
  },
  {
    label: "testing",
    value: "Jest / Supertest",
  },
];

function SystemRow({ label, value, accent = false }: SystemRowProps) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4">
      <dt className="font-mono text-xs uppercase tracking-wider text-dim">
        {label}
      </dt>

      <dd
        className={`text-sm ${accent ? "text-success" : "text-foreground-subtle"}`}
      >
        {value}
      </dd>
    </div>
  );
}

export function SystemPanel() {
  const { t } = useLanguage();

  const profileRows: SystemRowProps[] = [
    {
      label: t.systemPanel.labels.location,
      value: t.systemPanel.location,
    },
    {
      label: t.systemPanel.labels.role,
      value: t.common.role,
    },
    {
      label: "focus",
      value: "APIs & Systems",
    },
    {
      label: t.systemPanel.labels.status,
      value: t.systemPanel.status,
      accent: true,
    },
  ];
  return (
    <aside
      aria-label={t.accessibility.developerProfileSummary}
      className="border border-line-strong p-6"
    >
      <header className="flex items-center justify-between border-b border-line pb-4">
        <p className="font-mono text-sm text-foreground-subtle">
          SYSTEM / PROFILE
        </p>
        <span className="font-mono text-xs uppercase tracking-wider text-success">
          online
        </span>
      </header>
      <dl className="mt-6 space-y-4">
        {profileRows.map((row) => (
          <SystemRow
            key={row.label}
            label={row.label}
            value={row.value}
            accent={row.accent}
          />
        ))}
      </dl>
      <div className="mt-6 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Core / Stack
        </p>

        <dl className="mt-6 space-y-4">
          {stackRows.map((row) => (
            <SystemRow
              key={row.label}
              label={row.label}
              value={row.value}
              accent={row.accent}
            />
          ))}
        </dl>
        <div className="mt-6 border-t border-line pt-4">
          <p className="font-mono text-xs text-dim">
            <span className="text-accent">&gt;_</span> profile loaded
            <span className="ml-2 text-accent-secondary">•</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
