import styled from "styled-components"
import "./hexagon.scss"

export type ObjectFit = "cover" | "contain"
interface Props {
  imageUrl: string
  size?: number
  objectFit: ObjectFit
}

const HexagonContainer = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.866}px;
  background-color: #ccc;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 5px;
`

const HexagonImage = styled.img<{ objectFit: ObjectFit }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit};
`

export const Hexagon = ({ imageUrl, size, objectFit }: Props) => {

  return <HexagonContainer size={size ?? 200}>
    <HexagonImage src={imageUrl} objectFit={objectFit} />
  </HexagonContainer>
}
