import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { certifications } from "../../data/certifications";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  return (
    <SectionContainer id="certifications" labelledBy="certifications-title">
      <SectionHeader
        id="certifications-title"
        number="05"
        label="Certifications"
        title="Learning & Certifications"
        description="Courses and certifications that support my continued development in software engineering."
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
