import styled from "styled-components"
import { imgElinorr, imgGodesity, imgHairtastic, imgLeeroy, imgSmidesrum } from "../../imgs"
import { Hexagon } from "../../layout/Hexagon"
import { Section } from "../../layout/Section"
import "./customers.scss"
import { HexagonGrid } from "./HexagonGrid"



const Customers = () => {
  const customers = [
    { image: imgElinorr, alt: "Elinorr" },
    { image: imgGodesity, alt: "Godesity" },
    { image: imgHairtastic, alt: "Hairtastic" },
    { image: imgLeeroy, alt: "Leeroy" },
    { image: imgSmidesrum, alt: "Smidesrum" },
  ]
  return <Section title="Customers">
    <HexagonGrid hexagons={customers} />
  </Section>
}

export default Customers
