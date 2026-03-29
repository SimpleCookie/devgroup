import { LogoCard, ObjectFit } from "../../../layout/LogoCard"

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
  <div className="grid grid-cols-[repeat(3,180px)] gap-4 justify-center max-sm:grid-cols-[repeat(2,160px)] max-sm:gap-3">
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
