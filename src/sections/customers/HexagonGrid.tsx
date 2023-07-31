import { Hexagon } from "../../layout/Hexagon"

interface HexagonProps {
  image: string
  alt: string
}

interface Props {
  hexagons: HexagonProps[]
}

export const HexagonGrid = ({ hexagons }: Props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {hexagons.map(hexagon => (
        <Hexagon key={hexagon.image} imageUrl={hexagon.image} size={200} />
      ))}
    </div>
  )
}
