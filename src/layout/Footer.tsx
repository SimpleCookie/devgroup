import dayjs from "dayjs"
import styled from "styled-components"
import { theme } from "./theme"

const Wrapper = styled.div`
  background-color: ${theme.default.primary};
  color: ${theme.default.textOnPrimary}
`

export const Footer = () => {
  const year = dayjs().year()

  return (
    <Wrapper>
      <footer className="md:container md:mx-auto">
        © {year} Devgroup. All rights reserved.{" "}
      </footer>
    </Wrapper>
  )
}
