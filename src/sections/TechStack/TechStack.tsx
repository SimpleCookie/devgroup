import { SectionIntro } from "../shared/SectionIntro"
import "./TechStack.scss"

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Design Systems", highlight: true },
      { name: "Vite / Vitest" },
      { name: "Zustand / Zod" },
      { name: "MobX / Redux" },
      { name: "Jest" },
      { name: "SCSS / Sass" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Kotlin", highlight: true },
      { name: "Spring Boot", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Fastify / Express" },
      { name: "GraphQL" },
      { name: "REST & SOAP" },
      { name: "JMS" },
      { name: "JUnit / Cucumber" },
    ],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      { name: "CI/CD", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Kubernetes", highlight: true },
      { name: "OpenShift" },
      { name: "Podman" },
      { name: "Kotest" },
    ],
  },
]

export const TechStack = () => (
  <section className="tech-stack">
    <div className="tech-stack__inner">
      <SectionIntro
        eyebrow="Skills & Technology"
        title="A modern, full-stack toolkit"
        marginBottom="52px"
        eyebrowMarginBottom="12px"
        titleSize="clamp(1.6rem, 3vw, 2.2rem)"
      />
      <div className="tech-stack__grid">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="tech-stack__category-label">{cat.label}</div>
            <div className="tech-stack__tags">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`tech-stack__tag${skill.highlight ? " is-highlight" : ""}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
