import { LogoCard, ObjectFit } from "../../../layout/LogoCard"
import "./LogoGrid.scss"

export interface LogoCardProps {
  image: string
  name: string
  objectFit: ObjectFit
  padding?: boolean
}

interface Props {
  logos: LogoCardProps[]
}

export const LogoGrid = ({ logos }: Props) => (
  <div className="logo-grid">
    {logos.map((logo) => (
      <LogoCard
        key={logo.image}
        imageUrl={logo.image}
        name={logo.name}
        objectFit={logo.objectFit}
        padding={logo.padding}
      />
    ))}
  </div>
)
