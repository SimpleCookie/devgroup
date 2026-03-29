import styled from "styled-components"

const Wrapper = styled.section`
  background: #0d1117;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 64px 24px;
`

const Grid = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
  }
`

const Item = styled.div`
  text-align: center;
  padding: 0 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 640px) {
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(3) {
      border-right: 1px solid rgba(255, 255, 255, 0.07);
    }
  }
`

const Number = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ff6b35, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.04em;
  line-height: 1;
`

const Label = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const Stats = () => (
  <Wrapper>
    <Grid>
      <Item>
        <Number>10+</Number>
        <Label>Years Experience</Label>
      </Item>
      <Item>
        <Number>50+</Number>
        <Label>Projects Delivered</Label>
      </Item>
      <Item>
        <Number>6+</Number>
        <Label>Clients Served</Label>
      </Item>
      <Item>
        <Number>100%</Number>
        <Label>Commitment</Label>
      </Item>
    </Grid>
  </Wrapper>
)
