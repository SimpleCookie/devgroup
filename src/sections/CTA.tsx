import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.12); }
`

const Wrapper = styled.section`
  padding: 140px 24px;
  background: #0a0a0f;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 350px;
    background: radial-gradient(
      ellipse,
      rgba(255, 107, 53, 0.14) 0%,
      transparent 70%
    );
    animation: ${pulse} 5s ease-in-out infinite;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Title = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.75rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.035em;
  line-height: 1.1;
  margin-bottom: 20px;
`

const Sub = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-size: 18px;
  margin-bottom: 44px;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.65;
`

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ff6b35;
  color: #fff;
  padding: 16px 44px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: #e05a28;
    transform: translateY(-3px);
    box-shadow: 0 28px 56px rgba(255, 107, 53, 0.35);
  }
`

const Note = styled.div`
  color: rgba(255, 255, 255, 0.2);
  font-size: 13px;
  margin-top: 24px;
  letter-spacing: 0.01em;
`

export const CTA = () => (
  <Wrapper id="contact">
    <Content>
      <Title>
        Ready to build
        <br />
        something great?
      </Title>
      <Sub>
        Let's talk about how Devgroup can help take your idea from concept to
        production.
      </Sub>
      <div>
        <Btn href="mailto:info@devgroup.se">Start a conversation →</Btn>
      </div>
      <Note>Or reach us directly at info@devgroup.se</Note>
    </Content>
  </Wrapper>
)
