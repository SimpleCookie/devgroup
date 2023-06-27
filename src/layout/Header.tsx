import styled from "styled-components"
import { theme } from "../globals/theme"
import coffeeImg from "../imgs/coffee.jpeg"
import excavator from "../imgs/excavator-icon.png"
import { logoOrangeWhite } from "../imgs"


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
  background-color: rgba(100,100,100,0.4);
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
          <img src={logoOrangeWhite} alt="Dvgroup logotype" width={500} />
          <h1 className=" text-6xl text-center">The IT-consultants</h1>
        </Introduction>
      </Tint>
    </Wrapper>
  )
}
