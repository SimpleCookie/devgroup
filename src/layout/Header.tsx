import styled from "styled-components"
import { theme } from "../globals/theme"
import coffeeImg from "../imgs/coffee.jpeg"
import excavator from "../imgs/excavator-icon.png"


const Wrapper = styled.header`
  color: ${theme.default.textOnPrimary};
  background-image: url(${coffeeImg});
  background-size: cover;
  background-position: 50% 15%;
  background-repeat: no-repeat;
  height: 50vh;
`
const Introduction = styled.div`
  margin: auto auto;
`

const Tint = styled.div`
  width: 100%;
  background-color: rgba(97,97,97,0.4);
  height: 100%;
`

const Img = styled.img`
  height: 1em;
  display: inline;
`
const Shovel = () => <Img src={excavator} alt="Excavator" />

export const Header = () => {
  return (
    <Wrapper className="object-fit">
      <Tint className="flex">
        <Introduction>
          <h1 className="uppercase text-6xl text-center">Devgroup.se</h1>
          <h2 className="uppercase text-6xl text-center">The IT-consultants </h2>
        </Introduction>
      </Tint>
    </Wrapper>
  )
}
