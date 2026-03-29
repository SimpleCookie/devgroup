import styled from "styled-components"

export type ObjectFit = "cover" | "contain"

interface Props {
  imageUrl: string
  size?: number
  objectFit: ObjectFit
  padding?: boolean
}

const HexOuter = styled.div<{ size: number }>`
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size * 0.866}px;
  background: linear-gradient(135deg, #ff6b35, #ff9a4d);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) translateY(-8px);
    filter: drop-shadow(0 16px 32px rgba(255, 107, 53, 0.45));
  }
`

const HexInner = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  background: #fff;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const HexImg = styled.img<{ $objectFit: ObjectFit }>`
  width: 100%;
  height: 100%;
  object-fit: ${(p) => p.$objectFit};
`

export const Hexagon = ({ imageUrl, size = 200, objectFit, padding }: Props) => (
  <HexOuter size={size}>
    <HexInner>
      <HexImg
        src={imageUrl}
        $objectFit={objectFit}
        style={padding ? { padding: "14px" } : undefined}
      />
    </HexInner>
  </HexOuter>
)
