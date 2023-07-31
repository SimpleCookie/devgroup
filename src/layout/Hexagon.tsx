import styled from "styled-components"
import "./hexagon.scss"
import { url } from "inspector"

interface Props {
  imageUrl: string
  size?: number
}

const HexagonContainer = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.866}px;
  background-color: #ccc;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`

const HexagonImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Hexagon = ({ imageUrl, size }: Props) => {

  return <HexagonContainer size={size ?? 200}>
    <HexagonImage src={imageUrl} />
  </HexagonContainer>
}
