import dayjs from "dayjs"
import styled from "styled-components"
import { theme } from "../globals/theme"

const Wrapper = styled.div`
  background-color: ${theme.default.primary};
  color: ${theme.default.textOnPrimary};
  height: 10vh;
`

export const Footer = () => {
  const year = dayjs().year()

  return (
    <Wrapper className="flex">
      <footer className="md:container md:mx-auto text-center self-center">
        <div>© {year} Devgroup. All rights reserved.</div>
        <small>Logotype by Maria Skogen. Website by Marcus Ekström</small>
      </footer>
    </Wrapper>
  )
}
