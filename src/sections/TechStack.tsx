import styled from "styled-components"

const Wrapper = styled.section`
  background: #f6f8fa;
  padding: 80px 24px;
  border-bottom: 1px solid #e8eaed;
`

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 52px;
`

const EyebrowLabel = styled.div`
  color: #ff6b35;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`

const Title = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #0a0a0f;
  letter-spacing: -0.025em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const Category = styled.div``

const CategoryLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(10, 10, 15, 0.35);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8eaed;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span<{ $highlight?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
  cursor: default;

  ${(p) =>
    p.$highlight
      ? `
    background: linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,179,71,0.12));
    border: 1.5px solid rgba(255, 107, 53, 0.35);
    color: #c94d1a;
    &:hover {
      background: linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,179,71,0.2));
      border-color: #ff6b35;
      transform: translateY(-1px);
    }
  `
      : `
    background: #fff;
    border: 1.5px solid #e2e4e8;
    color: #444;
    &:hover {
      border-color: rgba(255,107,53,0.4);
      color: #222;
      transform: translateY(-1px);
    }
  `}
`

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
  <Wrapper>
    <Inner>
      <Header>
        <EyebrowLabel>Skills & Technology</EyebrowLabel>
        <Title>A modern, full-stack toolkit</Title>
      </Header>
      <Grid>
        {categories.map((cat) => (
          <Category key={cat.label}>
            <CategoryLabel>{cat.label}</CategoryLabel>
            <Tags>
              {cat.skills.map((skill) => (
                <Tag key={skill.name} $highlight={skill.highlight}>
                  {skill.name}
                </Tag>
              ))}
            </Tags>
          </Category>
        ))}
      </Grid>
    </Inner>
  </Wrapper>
)
