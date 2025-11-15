export type AcademicItem = {
  image: string;
  title: string;
  link: string;
  slug: string;
  shortDescription: string;
  overview: string;
    whatYouCanExpect: string[];
    keyFocusAreas: string[];
    subjects: {
      [subject: string]: string[];
    };
    teachingMethodology: string[];
    learningResources: string[];
    assessments: string[];
    additionalSupport: string[];
    benefits: string[];
};
