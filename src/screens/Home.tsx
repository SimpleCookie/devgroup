import styled from "styled-components"
import { theme } from "../globals/theme"
import { About, Customers } from "../sections"

const Wrapper = styled.div`
  background-color: ${theme.default.secondary};
  color: ${theme.default.textOnSecondary};
  min-height: 40vh;
`

export const Home = () => {
  return (
    <Wrapper>
      <main className="md:container md:mx-auto">
        <About />
        <Customers />
      </main>
    </Wrapper>
  )
}
