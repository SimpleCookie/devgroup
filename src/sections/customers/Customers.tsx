import styled from "styled-components"
import {
  imgElinorr,
  imgGodesity,
  imgHairtastic,
  imgLantmateriet,
  imgLeeroy,
  imgSmidesrum,
} from "../../imgs"
import { LogoGrid, LogoCardProps } from "./LogoGrid"

const Wrapper = styled.section`
  background: #0d1117;
  padding: 120px 24px;
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
  color: #fff;
  letter-spacing: -0.025em;
`

const Sub = styled.p`
  color: rgba(255, 255, 255, 0.38);
  font-size: 17px;
  margin-top: 14px;
  line-height: 1.6;
`

const Customers = () => {
  const customers: LogoCardProps[] = [
    { image: imgLantmateriet, name: "Lantmäteriet", objectFit: "contain" },
    { image: imgElinorr, name: "Elinorr", objectFit: "cover" },
    { image: imgGodesity, name: "Godesity", objectFit: "cover" },
    { image: imgHairtastic, name: "Hairtastic", objectFit: "cover" },
    { image: imgLeeroy, name: "Leeroy", objectFit: "contain", padding: true },
    { image: imgSmidesrum, name: "Smidesrum", objectFit: "contain", padding: true },
  ]
  return (
    <Wrapper id="customers">
      <SectionHeader>
        <EyebrowLabel>Trusted by</EyebrowLabel>
        <Title>Our customers</Title>
        <Sub>Companies that chose to build with Devgroup</Sub>
      </SectionHeader>
      <LogoGrid logos={customers} />
    </Wrapper>
  )
}

export default Customers
