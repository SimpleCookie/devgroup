import dayjs from "dayjs"
import styled from "styled-components"
import { theme } from "../globals/theme"

const Wrapper = styled.div`
  background-color: ${theme.default.primary};
  color: ${theme.default.textOnPrimary};
  height: 10vh;
  line-height: 10vh;
`

export const Footer = () => {
  const year = dayjs().year()

  return (
    <Wrapper>
      <footer className="md:container md:mx-auto text-center ">
        © {year} Devgroup. All rights reserved.{" "}
      </footer>
    </Wrapper>
  )
}
