import dayjs from "dayjs"
import styled from "styled-components"
import { logoOrangeWhite } from "../imgs"

const Wrapper = styled.footer`
  background: #060609;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 52px 40px;

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`

const Right = styled.div`
  text-align: right;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const CopyText = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 13px;
`

const Credit = styled.div`
  color: rgba(255, 255, 255, 0.18);
  font-size: 12px;
  margin-top: 5px;
`

export const Footer = () => {
  const year = dayjs().year()
  return (
    <Wrapper>
      <Inner>
        <div>
          <img src={logoOrangeWhite} alt="Devgroup" height={30} />
        </div>
        <Right>
          <CopyText>© {year} Devgroup AB. All rights reserved.</CopyText>
          <Credit>Logotype by Maria Skogen &middot; Website by Marcus Ekström</Credit>
        </Right>
      </Inner>
    </Wrapper>
  )
}
