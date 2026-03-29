import { aboutCards } from "../aboutData"
import "./AboutCards.scss"

export const AboutCards = () => (
  <div className="about-cards">
    {aboutCards.map((card) => (
      <div className="about-cards__item" key={card.title}>
        <div className="about-cards__icon">{card.icon}</div>
        <div>
          <h4 className="about-cards__title">{card.title}</h4>
          <p className="about-cards__text">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
)
