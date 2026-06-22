import { SectionIntro } from "../../shared/SectionIntro"
import { useLanguage } from "../../../i18n/LanguageContext"

export const CustomersHeader = () => {
  const { t } = useLanguage()
  return (
    <SectionIntro
      eyebrow={t.customers.eyebrow}
      title={t.customers.title}
      subtitle={t.customers.subtitle}
      tone="dark"
      subtitleMarginTop="14px"
      titleMarginBottom="0"
    />
  )
}
