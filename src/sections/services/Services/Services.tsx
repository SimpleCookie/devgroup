import { ServiceCard } from "../ServiceCard"
import { servicesData } from "../servicesData"
import { ServicesHeader } from "../ServicesHeader"
import "./Services.scss"

export const Services = () => (
  <section className="services" id="services">
    <ServicesHeader />
    <div className="services__grid">
      {servicesData.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  </section>
)
