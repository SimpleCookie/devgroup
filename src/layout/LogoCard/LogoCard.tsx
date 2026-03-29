import "./LogoCard.scss"

export type ObjectFit = "cover" | "contain"

interface Props {
  imageUrl: string
  name: string
  objectFit: ObjectFit
  padding?: boolean
}
export const LogoCard = ({ imageUrl, name, objectFit, padding = false }: Props) => (
  <div className="logo-card">
    <div className={`logo-card__media${padding ? " is-padded" : ""}`}>
      <img className="logo-card__img" src={imageUrl} alt={name} style={{ objectFit }} />
    </div>
    <span className="logo-card__name">{name}</span>
  </div>
)

