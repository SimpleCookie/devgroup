export const aboutTitle = "A development group built on passion & expertise"

export const aboutBodyParagraphs = [
  "Founded by Marcus Ekstrom - a Civil Engineer in Computer Science from Mid Sweden University and a Partner at Kvadrat, Sweden's leading network of IT consultants. Marcus has also taught programming at university level.",
  "Every project ships with automated tests, CI/CD pipelines, and production-grade code using the same battle-tested stack powering Sweden's national infrastructure.",
]

export const aboutSkills = [
  "TypeScript & React",
  "React Design Systems",
  "Kotlin & Spring Boot",
  "Docker & Kubernetes",
  "CI/CD pipelines",
  "Automated testing",
]

export interface AboutCard {
  icon: string
  title: string
  description: string
}

export const aboutCards: AboutCard[] = [
  {
    icon: "🤝",
    title: "Client-first approach",
    description:
      "You're always integrated into our development process - no black boxes, no surprises.",
  },
  {
    icon: "🧪",
    title: "Quality-first engineering",
    description:
      "Unit, integration and end-to-end tests, paired with automated CI/CD pipelines so every release is reliable.",
  },
  {
    icon: "🚀",
    title: "Cloud & DevOps",
    description:
      "Docker, Kubernetes and OpenShift paired with CI/CD pipelines - containerised workloads deployed automatically on enterprise infrastructure.",
  },
]
