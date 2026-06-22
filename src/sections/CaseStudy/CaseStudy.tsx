import { imgLantmateriet } from "../../imgs"
import { useLanguage } from "../../i18n/LanguageContext"
import { SectionIntro } from "../shared/SectionIntro"

export const CaseStudy = () => {
  const { t } = useLanguage()
  const cs = t.caseStudy

  const meta = [
    { label: cs.metaClient, value: cs.metaClientValue },
    { label: cs.metaPeriod, value: cs.metaPeriodValue },
    { label: cs.metaStack, value: cs.metaStackValue },
  ]

  return (
    <section className="bg-white py-[100px] px-6 border-b border-[#e8eaed]" id="case-study">
      <div className="max-w-[900px] mx-auto">
        <SectionIntro
          eyebrow={cs.eyebrow}
          title={cs.title}
          align="left"
          marginBottom="52px"
          eyebrowMarginBottom="16px"
          titleSize="clamp(1.75rem, 3.5vw, 2.6rem)"
          titleLineHeight="1.2"
          titleMarginBottom="0"
        />
        <div className="grid grid-cols-[1fr_240px] gap-12 items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className="text-[#555] text-base leading-[1.8] mb-8">{cs.body}</p>
            <blockquote className="border-l-[3px] border-[#ff6b35] pl-5 py-1 my-6">
              <p className="text-[#444] text-[15px] italic leading-[1.75]">"{cs.quote}"</p>
              <cite className="text-[#aaa] text-[13px] font-semibold not-italic mt-3 block">{cs.quoteAuthor}</cite>
            </blockquote>
            <a
              href="https://www.kvadrat.se/om-kvadrat/aktuellt/vi-bytte-sveriges-pantbrevssystem/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[6px] text-[#ff6b35] font-semibold text-sm mt-4 hover:underline"
            >
              {cs.linkText}
            </a>
          </div>

          <div className="bg-[#0d1117] rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-center bg-white/[0.06] rounded-xl py-5 px-4">
              <img
                src={imgLantmateriet}
                alt="Lantmäteriet"
                className="max-h-[48px] max-w-full object-contain"
              />
            </div>
            {meta.map(({ label, value }) => (
              <div key={label}>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/30 mb-[5px]">
                  {label}
                </div>
                <div className="text-white/80 text-[13px] font-medium leading-[1.5]">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
