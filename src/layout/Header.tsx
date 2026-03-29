import styled, { keyframes } from "styled-components"
import { logoOrangeWhite } from "../imgs"

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-24px) rotate(4deg); }
  66% { transform: translateY(-12px) rotate(-3deg); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.header`
  min-height: 100vh;
  background: #0a0a0f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 24px 80px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255, 107, 53, 0.18) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 85% 90%, rgba(40, 60, 150, 0.15) 0%, transparent 55%);
  }
`

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 64px 64px;
`

const GlowOrb = styled.div<{ top: string; left: string; size: string; delay: string }>`
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.45) 0%, transparent 70%);
  filter: blur(72px);
  animation: ${float} 9s ease-in-out infinite;
  animation-delay: ${(p) => p.delay};
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  animation: ${fadeUp} 0.9s ease-out both;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.28);
  border-radius: 100px;
  padding: 6px 18px;
  margin-bottom: 36px;
  color: #ff9060;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Headline = styled.h1`
  font-size: clamp(2.6rem, 7.5vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #fff;
  margin-bottom: 28px;
`

const GradientSpan = styled.span`
  background: linear-gradient(135deg, #ff6b35 0%, #ffcc70 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtext = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.5);
  max-width: 560px;
  margin: 0 auto 52px;
  line-height: 1.72;
`

const CTARow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`

const PrimaryBtn = styled.a`
  background: #ff6b35;
  color: white;
  padding: 15px 36px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: #e05a28;
    transform: translateY(-2px);
    box-shadow: 0 24px 48px rgba(255, 107, 53, 0.3);
  }
`

const OutlineBtn = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  padding: 15px 36px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.14);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.38);
    color: #fff;
    transform: translateY(-2px);
  }
`

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

export const Header = () => (
  <HeroWrapper>
    <GridOverlay />
    <GlowOrb top="-8%" left="15%" size="480px" delay="0s" />
    <GlowOrb top="55%" left="65%" size="320px" delay="3s" />
    <GlowOrb top="35%" left="-8%" size="280px" delay="6s" />
    <Content>
      <Badge>⚡ IT Consulting &amp; Development</Badge>
      <Headline>
        We build the technology<br />
        behind <GradientSpan>growing businesses</GradientSpan>
      </Headline>
      <Subtext>
        Devgroup delivers modern IT solutions — from web and mobile development
        to strategic consulting. We work closely with you from idea to launch.
      </Subtext>
      <CTARow>
        <PrimaryBtn href="mailto:info@devgroup.se">Get in touch →</PrimaryBtn>
        <OutlineBtn onClick={() => scrollTo("about")}>Learn more</OutlineBtn>
      </CTARow>
    </Content>
  </HeroWrapper>
)
