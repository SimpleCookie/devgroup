import { Hexagon, ObjectFit } from "../../layout/Hexagon"

export interface HexagonProps {
  image: string
  alt: string
  objectFit: ObjectFit
}

interface Props {
  hexagons: HexagonProps[]
  size: number
}

export const HexagonGrid = ({ hexagons, size }: Props) => {
  return (
    <div className="hexagon-grid">
      {hexagons.map((hexagon, index) => {
        return <Hexagon
          key={hexagon.image}
          imageUrl={hexagon.image}
          size={size}
          objectFit={hexagon.objectFit}
        />
      })}
    </div>
  )
}
