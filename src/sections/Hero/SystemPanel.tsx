type SystemRowProps = {
  label: string;
  value: string;
  accent?: boolean;
};

const profileRows: SystemRowProps[] = [
  {
    label: "location",
    value: "Piacenza, Italy",
  },
  {
    label: "role",
    value: "Junior Backend Developer",
  },
  {
    label: "focus",
    value: "APIs & Systems",
  },
  {
    label: "status",
    value: "Open to opportunities",
    accent: true,
  },
];

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
      <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
        {label}
      </dt>

      <dd className={`text-sm ${accent ? "text-teal-400" : "text-slate-300"}`}>
        {value}
      </dd>
    </div>
  );
}

export function SystemPanel() {
  return (
    <aside
      aria-label="Developer prfile summary"
      className="border border-salte-700 p-6"
    >
      <header className="flex items-center justify-between border-b boder-slate-800 pb-4">
        <p className="font-mono text-sm text-salte-300">SYSTEM / PROFILE</p>
        <span className="font-mono text-xs uppercase tracking-wider text-teal-400">
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
      <div className="mt-6 border-t border-slate-800 pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
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
      </div>
    </aside>
  );
}
