import { AcademicItem } from "@/types/academics";
export const Academic: AcademicItem[] = [
  {
      slug: "msbshse",
      title: "Maharashtra State (SSC) Board",
      image: "/msbshse.jpg",
      link: "/academic-details/msbshse",
      shortDescription: "All Subjects coaching for Class 1 to 10 as per the MSBSHSE curriculum.",
      overview: "Our Maharashtra SSC (MSBSHSE) coaching program offers a structured and complete academic experience for students from Class 1 to 10. We follow the latest State Board curriculum with a strong focus on conceptual understanding, fundamentals, writing skills, and exam-oriented preparation.",
      whatYouCanExpect: [
          "Grade-wise batches for Class 1 to 10",
          "Daily concept teaching with real-life examples",
          "Focus on grammar, handwriting, and vocabulary for primary classes",
          "Activity-based learning for Classes 1-5",
          "Concept strengthening and exam preparation for Classes 6-10",
          "Individual doubt-solving after every lecture",
          "Weekly tests and monthly evaluations",
          "Notes, worksheets, and solved question banks",
          "Guidance for scholarship exams and Olympiads",
          "Regular parent-teacher meetings with performance reports"
      ],
      keyFocusAreas: [
          "Conceptual clarity and understanding",
          "Reading, writing, and grammar skills",
          "Logical and analytical thinking",
          "Mathematical foundation building",
          "Science concept mastery",
          "Exam-writing skills and time management",
          "Revision and practice of previous papers",
          "SSC Board exam preparation for Class 10"
      ],
      subjects: {
          "primary (Class 1-4)": ["English", "Marathi", "Hindi", "Mathematics", "EVS", "General Knowledge"],
          "middle (Class 5-8)": ["English", "Marathi", "Hindi", "Mathematics", "Science", "History & Civics", "Geography"],
          "secondary (Class 9-10)": ["Mathematics (Algebra & Geometry)", "Science & Technology", "English", "Marathi/Hindi", "History & Political Science", "Geography"]
      },
      teachingMethodology: [
          "Concept → Examples → Practice → Revision cycle",
          "Visual and diagram-based teaching",
          "Activity-based learning for junior classes",
          "Problem-solving sessions for Maths & Science",
          "Individual doubt clearing after every lecture",
          "Chapter-wise revision and practice tests"
      ],
      learningResources: [
          "Detailed notes",
          "Formula booklets",
          "Grammar guides",
          "Worksheets and assignments",
          "Unit test papers",
          "Model question papers and SSC board papers"
      ],
      assessments: [
          "Weekly tests",
          "Monthly cumulative tests",
          "Unit test preparation",
          "Prelims for Class 10",
          "Performance reports shared with parents"
      ],
      additionalSupport: [
          "Holiday revision camps",
          "Olympiad coaching",
          "SSC exam guidance",
          "Homework assistance",
          "Extra classes during exam period"
      ],
      benefits: [
          "Strong academic foundation",
          "Improved grades and confidence",
          "Better exam performance",
          "Enhanced writing and presentation skills",
          "Consistent practice and discipline"
      ],
  },
  {
    slug: "cbse",
    title: "CBSE Board",
    image: "/cbse.jpg",
    link: "/academic-details/cbse",
    shortDescription: "NCERT-based coaching for Class 1 to 10 with a strong focus on conceptual learning.",
    overview: "Our CBSE program ensures holistic, concept-driven learning aligned with the NCERT curriculum. The coaching focuses on understanding rather than memorization, with interactive sessions and continuous assessment to help students excel in school and board exams.",
    whatYouCanExpect: [
      "Structured NCERT-based teaching",
      "Concept-focused classes with real examples",
      "Foundation-building for Maths and English",
      "STEM-oriented learning for middle school",
      "Daily worksheets and chapter-wise tests",
      "Doubt-solving after every lecture",
      "Academic planning for periodic tests and final exams",
      "Project and activity-based learning support",
      "Parent-teacher meetings and performance updates"
    ],
    keyFocusAreas: [
      "Conceptual clarity",
      "Critical thinking and problem solving",
      "Communication and grammar skills",
      "Mathematical reasoning and accuracy",
      "Science fundamentals for higher classes",
      "NCERT textbook mastery",
      "Exam presentation and writing skills"
    ],
    subjects: {
      "primary (Class 1-4)": ["English", "Hindi", "Mathematics", "EVS", "General Knowledge"],
      "middle (Class 5-8)": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit (optional)"],
      "secondary (Class 9-10)": ["Mathematics (Basic/Standard)", "Science (Physics, Chemistry, Biology)", "English", "Hindi/Sanskrit", "Social Science", "Computer Applications"]
    },
    teachingMethodology: [
      "NCERT line-by-line explanation",
      "Interactive visual learning",
      "Concept → Example → Exercise technique",
      "Revision of key topics after every module",
      "Group-based activities and discussions",
      "Real-world examples for Science concepts"
    ],
    learningResources: [
      "NCERT chapter notes",
      "Formula sheets and quick revision cards",
      "Grammar practice materials",
      "Worksheets for all subjects",
      "Sample papers (Term 1 & 2)",
      "Previous year CBSE question papers"
    ],
    assessments: [
      "Weekly tests",
      "Monthly chapter-wise tests",
      "Term exam preparation",
      "Pre-board exams for Class 10",
      "Performance analysis reports"
    ],
    additionalSupport: [
      "Olympiad/NTSE/IMO coaching",
      "Spoken English sessions",
      "Science practical explanation",
      "Homework and project assistance",
      "Extra classes during exam season"
    ],
    benefits: [
      "Strong NCERT foundation",
      "Better clarity and accuracy",
      "Improved school exam performance",
      "Enhanced analytical thinking",
      "Confidence in board exam preparation"
    ]
  }
]

export function getAcademicBySlug(slug: string) {
  return Academic.find((a) => a.slug === slug) ?? null;
}

export function getAllAcademicSlugs() {
  return Academic.map((a) => a.slug);
}
