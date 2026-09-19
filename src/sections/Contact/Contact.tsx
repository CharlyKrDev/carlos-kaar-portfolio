import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

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
  const { t } = useLanguage();
  return (
    <SectionContainer id="contact" labelledBy="contact-title">
      <SectionHeader
        id="contact-title"
        number="06"
        label={t.contact.label}
        title={t.contact.title}
        description={t.contact.description}/>
      <div className="border border-line p-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <dl className="space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 sm:grid-cols-[100px_1fr] sm:gap-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-dim">
                  {item.label}
                </dt>

                <dd>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground transition-colors duration-200 hover:text-accent focus-ring"
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
    border border-accent bg-accent
    px-5 py-3 font-mono text-sm text-canvas
    transition-colors duration-200
    hover:border-accent-hover hover:bg-accent-hover
    focus-ring
  "
          >
            &gt; {t.contact.actions.sendEmail}
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
