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
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }

  return (
    <div style={containerStyle}>
      {hexagons.map(hexagon => (
        <Hexagon
          key={hexagon.image}
          imageUrl={hexagon.image}
          size={size}
          objectFit={hexagon.objectFit}
        />
      ))}
    </div>
  )
}
