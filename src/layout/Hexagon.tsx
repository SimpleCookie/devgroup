import styled from "styled-components"
import "./hexagon.scss"

const HexImg = styled.div<{ $url: string }>`
  background-image: url(${props => props.$url});
`
const Shape = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 0 0 -80px;
`
interface Props {
  imgUrl: string
}

export const Hexagon = ({ imgUrl }: Props) => {
  return <Shape className="hexagon">
    <div className="hexagon-in1">
      <HexImg $url={imgUrl} className="hexagon-in2" />
    </div>
  </Shape>
}
