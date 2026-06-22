import { LogoCard, ObjectFit } from "../../../layout/LogoCard"

export interface LogoCardProps {
  image: string
  name: string
  objectFit: ObjectFit
  padding?: boolean
  href?: string
}

interface Props {
  logos: LogoCardProps[]
}

export const LogoGrid = ({ logos }: Props) => (
  <div className="grid grid-cols-[repeat(3,180px)] gap-4 justify-center max-sm:grid-cols-[repeat(2,160px)] max-sm:gap-3">
    {logos.map((logo) => {
      const card = (
        <LogoCard
          key={logo.image}
          imageUrl={logo.image}
          name={logo.name}
          objectFit={logo.objectFit}
          padding={logo.padding}
        />
      )
      return logo.href ? (
        <a
          key={logo.image}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {card}
        </a>
      ) : card
    })}
  </div>
)
