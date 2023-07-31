import styled from "styled-components"
import "./hexagon.scss"
import React from "react"

export type ObjectFit = "cover" | "contain"
interface Props {
  imageUrl: string
  size?: number
  objectFit: ObjectFit
  padding?: boolean
}

const HexagonContainer = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.866}px;
  background-color: chocolate;
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
const Stroke = styled.div<{ size: number }>`
  position: absolute;
  background: #555;
  top: ${(props) => props.size / 2}px;
  left: ${(props) => props.size / 2}px;
  width: calc(100% - ${(props) => props.size}px);
  height: calc(100% - ${(props) => props.size}px);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
`

export const Hexagon = ({ imageUrl, size, objectFit, padding }: Props) => {

  return <HexagonContainer size={size ?? 200}>
    <Stroke size={4}>
      <HexagonImage src={imageUrl} objectFit={objectFit} style={padding ? { padding: "5px" } : undefined} />
    </Stroke>
  </HexagonContainer>
}
