import styled from "styled-components"
import { theme } from "../layout/theme"

const Wrapper = styled.div`
  background-color: ${theme.default.secondary};
  color: ${theme.default.textOnSecondary}
`

export const Home = () => {
  return (
    <Wrapper>
      <main className="md:container md:mx-auto">
        Mains
      </main>
    </Wrapper>
  )
}
