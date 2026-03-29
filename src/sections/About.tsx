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
          The name Devgroup originates from{" "}
          <strong>Development</strong> and <strong>Group</strong> — a tight-knit
          team dedicated to delivering IT solutions that genuinely work for your
          business.
        </Body>
        <Body>
          We’re serious about quality, but delightful to work with. From the
          first meeting to the final launch, you’re a true partner in every
          decision.
        </Body>
        <FeatureGrid>
          <Feature>Agile methodology</Feature>
          <Feature>Close collaboration</Feature>
          <Feature>Modern tech stack</Feature>
          <Feature>Transparent process</Feature>
          <Feature>Long-term support</Feature>
          <Feature>Iterative delivery</Feature>
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
          <CardIcon>🔬</CardIcon>
          <CardContent>
            <h4>Modern agile delivery</h4>
            <p>
              We follow current industry best practices for fast, reliable, and
              maintainable releases.
            </p>
          </CardContent>
        </InfoCard>
        <InfoCard>
          <CardIcon>🚀</CardIcon>
          <CardContent>
            <h4>End-to-end ownership</h4>
            <p>
              Architecture, design, testing, deployment — we own and care about
              the full lifecycle.
            </p>
          </CardContent>
        </InfoCard>
      </CardSide>
    </Inner>
  </Wrapper>
)

export default About
