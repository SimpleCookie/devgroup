import styled from "styled-components"
import { imgElinorr, imgGodesity, imgHairtastic, imgLeeroy, imgSmidesrum } from "../imgs"
import { Hexagon } from "../layout/Hexagon"
import { Section } from "../layout/Section"

const Wrapper = styled.div`
  margin: 0 auto;
`

const Customers = () => {
  return <Section title="Customers">
    <Wrapper className="flex justify-center">
      <Hexagon imgUrl={imgElinorr} />
      <Hexagon imgUrl={imgGodesity} />
      <Hexagon imgUrl={imgHairtastic} />
    </Wrapper>
    <Wrapper className="flex justify-center">
      <Hexagon imgUrl={imgLeeroy} />
      <Hexagon imgUrl={imgSmidesrum} />
    </Wrapper>
  </Section>
}

export default Customers
