import { SectionIntro } from "../../shared/SectionIntro"
import { useLanguage } from "../../../i18n/LanguageContext"

export const ServicesHeader = () => {
  const { t } = useLanguage()
  return (
    <SectionIntro
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      subtitle={t.services.subtitle}
      subtitleMaxWidth="480px"
    />
  )
}
