import styled from "styled-components"
import { LogoCard, ObjectFit } from "../../layout/LogoCard"

export interface LogoCardProps {
  image: string
  name: string
  objectFit: ObjectFit
  padding?: boolean
}

interface Props {
  logos: LogoCardProps[]
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 16px;
  justify-content: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 160px);
    gap: 12px;
  }
`

export const LogoGrid = ({ logos }: Props) => (
  <Grid>
    {logos.map((logo) => (
      <LogoCard
        key={logo.image}
        imageUrl={logo.image}
        name={logo.name}
        objectFit={logo.objectFit}
        padding={logo.padding}
      />
    ))}
  </Grid>
)
