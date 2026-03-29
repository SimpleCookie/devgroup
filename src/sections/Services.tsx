import styled from "styled-components"

const Wrapper = styled.section`
  padding: 120px 24px;
  background: #fff;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 72px;
`

const EyebrowLabel = styled.div`
  color: #ff6b35;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
`

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #0a0a0f;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
`

const Sub = styled.p`
  color: #777;
  font-size: 17px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.65;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 36px 32px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 107, 53, 0.35);
    box-shadow: 0 20px 48px rgba(255, 107, 53, 0.07);
    transform: translateY(-4px);
    background: #fff;
  }
`

const Icon = styled.div`
  width: 52px;
  height: 52px;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.1),
    rgba(255, 179, 71, 0.1)
  );
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0a0a0f;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`

const CardText = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.7;
`

const services = [
  {
    icon: "💻",
    title: "Web Development",
    text: "Modern, performant web applications built with the latest technologies — from single-page apps to full-stack solutions.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    text: "Cross-platform mobile apps delivering native experiences on both iOS and Android.",
  },
  {
    icon: "🧭",
    title: "IT Consulting",
    text: "Strategic technology guidance to help your business make informed decisions on architecture, tooling, and team structure.",
  },
  {
    icon: "⚡",
    title: "Agile Delivery",
    text: "Iterative, transparent delivery. You're always in the loop — integrated into every sprint and decision.",
  },
]

export const Services = () => (
  <Wrapper id="services">
    <SectionHeader>
      <EyebrowLabel>What we do</EyebrowLabel>
      <Title>End-to-end IT expertise</Title>
      <Sub>
        From first line of code to final deployment — and everything in between.
      </Sub>
    </SectionHeader>
    <Grid>
      {services.map((s) => (
        <Card key={s.title}>
          <Icon>{s.icon}</Icon>
          <CardTitle>{s.title}</CardTitle>
          <CardText>{s.text}</CardText>
        </Card>
      ))}
    </Grid>
  </Wrapper>
)
