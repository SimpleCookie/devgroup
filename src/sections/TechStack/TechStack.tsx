import { SectionIntro } from "../shared/SectionIntro"

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

const tagBase =
  "inline-flex items-center px-[14px] py-[6px] rounded-full text-[13px] font-semibold tracking-[0.01em] transition-all duration-200 cursor-default hover:-translate-y-px"
const tagNormal = `${tagBase} bg-white border-[1.5px] border-[#e2e4e8] text-[#444] hover:border-[rgba(255,107,53,0.4)] hover:text-[#222]`
const tagHighlight = `${tagBase} bg-gradient-to-br from-[rgba(255,107,53,0.12)] to-[rgba(255,179,71,0.12)] border-[1.5px] border-[rgba(255,107,53,0.35)] text-[#c94d1a] hover:from-[rgba(255,107,53,0.2)] hover:to-[rgba(255,179,71,0.2)] hover:border-[#ff6b35]`

export const TechStack = () => (
  <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e8eaed]">
    <div className="max-w-[960px] mx-auto">
      <SectionIntro
        eyebrow="Skills & Technology"
        title="A modern, full-stack toolkit"
        marginBottom="52px"
        eyebrowMarginBottom="12px"
        titleSize="clamp(1.6rem, 3vw, 2.2rem)"
      />
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-7">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(10,10,15,0.35)] mb-[14px] pb-[10px] border-b border-[#e8eaed]">
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill.name} className={skill.highlight ? tagHighlight : tagNormal}>
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
