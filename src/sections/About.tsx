import styled from "styled-components"

const Wrapper = styled.section`
  padding: 120px 24px;
  background: #f6f8fa;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

const TextSide = styled.div``

const EyebrowLabel = styled.div`
  color: #ff6b35;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0a0a0f;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 20px;
`

const Body = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 16px;

  strong {
    color: #ff6b35;
    font-weight: 700;
  }
`

const FeatureGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #333;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #ff6b35;
    border-radius: 50%;
    flex-shrink: 0;
  }
`

const CardSide = styled.div`
  display: grid;
  gap: 20px;
`

const InfoCard = styled.div`
  background: #fff;
  border: 1px solid #e8eaed;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
    transform: translateY(-2px);
  }
`

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.1),
    rgba(255, 179, 71, 0.1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`

const CardContent = styled.div`
  h4 {
    font-weight: 700;
    color: #0a0a0f;
    font-size: 15px;
    margin-bottom: 5px;
    letter-spacing: -0.01em;
  }
  p {
    color: #777;
    font-size: 13.5px;
    line-height: 1.55;
  }
`

const About = () => (
  <Wrapper id="about">
    <Inner>
      <TextSide>
        <EyebrowLabel>Who we are</EyebrowLabel>
        <Title>A development group built on passion &amp; expertise</Title>
        <Body>
          Founded by <strong>Marcus Ekström</strong> — a Civil Engineer in Computer
          Science from Mid Sweden University and a{" "}
          <strong>Partner at Kvadrat</strong>, Sweden’s leading network of IT
          consultants. Marcus has also taught programming at university level.
        </Body>
        <Body>
          Every project ships with <strong>automated tests</strong>,{" "}
          <strong>CI/CD pipelines</strong>, and production-grade code using the
          same battle-tested stack powering Sweden’s national infrastructure.
        </Body>
        <FeatureGrid>
          <Feature>TypeScript &amp; React</Feature>
          <Feature>React Design Systems</Feature>
          <Feature>Kotlin &amp; Spring Boot</Feature>
          <Feature>Docker &amp; Kubernetes</Feature>
          <Feature>CI/CD pipelines</Feature>
          <Feature>Automated testing</Feature>
        </FeatureGrid>
      </TextSide>
      <CardSide>
        <InfoCard>
          <CardIcon>🤝</CardIcon>
          <CardContent>
            <h4>Client-first approach</h4>
            <p>
              You’re always integrated into our development process — no black
              boxes, no surprises.
            </p>
          </CardContent>
        </InfoCard>
        <InfoCard>
          <CardIcon>🧪</CardIcon>
          <CardContent>
            <h4>Quality-first engineering</h4>
            <p>
              Unit, integration and end-to-end tests, paired with automated
              CI/CD pipelines so every release is reliable.
            </p>
          </CardContent>
        </InfoCard>
        <InfoCard>
          <CardIcon>🚀</CardIcon>
          <CardContent>
            <h4>Cloud &amp; DevOps</h4>
            <p>
              Docker, Kubernetes and OpenShift paired with CI/CD pipelines —
              containerised workloads deployed automatically on enterprise
              infrastructure.
            </p>
          </CardContent>
        </InfoCard>
      </CardSide>
    </Inner>
  </Wrapper>
)

export default About
