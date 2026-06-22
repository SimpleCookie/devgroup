import { useLanguage } from "../../i18n/LanguageContext"
import { SectionIntro } from "../shared/SectionIntro"

export const Projects = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e8eaed]" id="projects">
      <div className="max-w-[900px] mx-auto">
        <SectionIntro
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          marginBottom="52px"
          eyebrowMarginBottom="12px"
          titleSize="clamp(1.6rem, 3vw, 2.2rem)"
        />
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-7">
          {t.projects.categories.map((cat) => (
            <div key={cat.label}>
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(10,10,15,0.35)] mb-[14px] pb-[10px] border-b border-[#e8eaed]">
                {cat.label}
              </div>
              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border border-[#ebebeb] rounded-xl px-5 py-4 no-underline transition-all duration-[250ms] hover:border-[rgba(255,107,53,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.07)] hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-semibold text-[#0a0a0f] transition-colors duration-200 group-hover:text-[#ff6b35]">
                        {item.name}
                      </span>
                      <span className="text-[#ccc] text-sm transition-colors duration-200 group-hover:text-[#ff6b35]">
                        ↗
                      </span>
                    </div>
                    <p className="text-[13px] text-[#888] mt-1 leading-[1.5]">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
