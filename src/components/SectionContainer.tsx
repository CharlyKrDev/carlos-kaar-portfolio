import type { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
};

export function SectionContainer({
  id,
  labelledBy,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-16"
    >
      {children}
    </section>
  );
}