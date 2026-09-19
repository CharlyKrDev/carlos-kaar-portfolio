import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { certifications } from "../../data/certifications";
import { CertificationCard } from "./CertificationCard";
import { useLanguage } from "../../i18n/LanguageContext";

export function Certifications() {
  const { t } = useLanguage();
  return (
    <SectionContainer id="certifications" labelledBy="certifications-title">
      <SectionHeader
        id="certifications-title"
        number="05"
        label={t.certifications.label}
        title={t.certifications.title}
        description={t.certifications.description}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
