import { ServiceCard } from "../ServiceCard"
import { servicesData } from "../servicesData"
import { ServicesHeader } from "../ServicesHeader"

export const Services = () => (
  <section className="py-[120px] px-6 bg-white" id="services">
    <ServicesHeader />
    <div className="grid grid-cols-2 gap-6 max-w-[900px] mx-auto max-sm:grid-cols-1">
      {servicesData.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  </section>
)
