import { ServiceCard } from "../ServiceCard"
import { ServicesHeader } from "../ServicesHeader"
import { useLanguage } from "../../../i18n/LanguageContext"

export const Services = () => {
  const { t } = useLanguage()
  return (
    <section className="py-[120px] px-6 bg-[#f6f8fa] border-b border-[#e8eaed]" id="services">
      <ServicesHeader />
      <div className="grid grid-cols-2 gap-6 max-w-[900px] mx-auto max-sm:grid-cols-1">
        {t.services.items.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}
