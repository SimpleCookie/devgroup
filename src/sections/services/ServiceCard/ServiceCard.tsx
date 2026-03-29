import { ServiceItem } from "../servicesData"
import "./ServiceCard.scss"

interface Props {
  service: ServiceItem
}

export const ServiceCard = ({ service }: Props) => (
  <div className="service-card">
    <div className="service-card__icon">{service.icon}</div>
    <h3 className="service-card__title">{service.title}</h3>
    <p className="service-card__text">{service.text}</p>
  </div>
)
