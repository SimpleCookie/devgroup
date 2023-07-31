import styled from "styled-components"
import { imgElinorr, imgGodesity, imgHairtastic, imgLantmateriet, imgLeeroy, imgSmidesrum } from "../../imgs"
import { Hexagon } from "../../layout/Hexagon"
import { Section } from "../../layout/Section"
import "./customers.scss"
import { HexagonGrid, HexagonProps } from "./HexagonGrid"

const Customers = () => {
  const customers: HexagonProps[] = [
    { image: imgLantmateriet, alt: "Lantmäteriet", objectFit: "contain" },
    { image: imgElinorr, alt: "Elinorr", objectFit: "cover" },
    { image: imgGodesity, alt: "Godesity", objectFit: "cover" },
    { image: imgHairtastic, alt: "Hairtastic", objectFit: "cover" },
    { image: imgLeeroy, alt: "Leeroy", objectFit: "contain", padding: true },
    { image: imgSmidesrum, alt: "Smidesrum", objectFit: "contain", padding: true },
  ]
  return <Section title="Customers">
    <HexagonGrid hexagons={customers} size={200} />
  </Section>
}

export default Customers
