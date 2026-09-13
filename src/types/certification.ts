export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
  achievement?: string;
  skills: string[];
};
