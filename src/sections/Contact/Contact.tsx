import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "kaar.carlos@gmail.com",
    href: "mailto:kaar.carlos@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/carlos-alberto-kaar",
    href: "https://www.linkedin.com/in/carlos-alberto-kaar",
    external: true,
  },
  {
    label: "GitHub",
    value: "/CharlyKrDev",
    href: "https://github.com/CharlyKrDev",
    external: true,
  },
];
export function Contact() {
  return (
    <SectionContainer id="contact" labelledBy="contact-title">
      <SectionHeader
        id="contact-title"
        number="06"
        label="Contact"
        title="Let's build something useful."
        description="I'm currently open to Junior / Trainee Backend Developer opportunities and technology roles where I can continue building professional experience."
      />
      <div className="border border-slate-800 p-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <dl className="space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 sm:grid-cols-[100px_1fr] sm:gap-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </dt>

                <dd>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-violet-400"
                  >
                    {item.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="mailto:kaar.carlos@gmail.com"
            className="
        inline-flex min-w-44 items-center justify-center
        border border-violet-400 bg-violet-400
        px-5 py-3 font-mono text-sm text-slate-950
        transition-colors duration-200
        hover:border-violet-300 hover:bg-violet-300
      "
          >
            &gt; Send email
          </a>
        </div>
      </div>{" "}
    </SectionContainer>
  );
}
