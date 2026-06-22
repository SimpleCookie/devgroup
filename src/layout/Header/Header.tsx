import { useLanguage } from "../../i18n/LanguageContext"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

interface OrbProps { top: string; left: string; size: string; delay: string }
const Orb = ({ top, left, size, delay }: OrbProps) => (
  <div
    className="absolute rounded-full [background:radial-gradient(circle,rgba(255,107,53,0.45)_0%,transparent_70%)] blur-[72px] animate-header-float"
    style={{ top, left, width: size, height: size, animationDelay: delay }}
  />
)

export const Header = () => {
  const { t } = useLanguage()
  const h = t.header
  return (
    <header className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden px-6 pt-[120px] pb-20 before:content-[''] before:absolute before:inset-0 before:[background:radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,107,53,0.18)_0%,transparent_55%),radial-gradient(ellipse_50%_40%_at_85%_90%,rgba(40,60,150,0.15)_0%,transparent_55%)]">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:64px_64px]" />
      <Orb top="-8%" left="15%" size="480px" delay="0s" />
      <Orb top="55%" left="65%" size="320px" delay="3s" />
      <Orb top="35%" left="-8%" size="280px" delay="6s" />
      <div className="relative z-10 text-center max-w-[860px] mx-auto animate-header-fade-up">
        <div className="inline-flex items-center gap-2 bg-[rgba(255,107,53,0.1)] border border-[rgba(255,107,53,0.28)] rounded-[100px] py-[6px] px-[18px] mb-9 text-[#ff9060] text-xs font-bold tracking-[0.08em] uppercase">
          {h.badge}
        </div>
        <h1 className="text-[clamp(2.6rem,_7.5vw,_5.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-white mb-7">
          {h.h1Part1}<br />
          {h.h1Part2}{" "}
          <span className="bg-gradient-to-br from-[#ff6b35] to-[#ffcc70] bg-clip-text text-transparent">
            {h.h1Highlight}
          </span>
        </h1>
        <p className="text-[clamp(1rem,_2.5vw,_1.2rem)] text-white/50 max-w-[560px] mx-auto mb-[52px] leading-[1.72]">
          {h.subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            className="bg-[#ff6b35] text-white py-[15px] px-9 rounded-lg text-base font-bold no-underline transition-all duration-200 tracking-[0.01em] hover:bg-[#e05a28] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,107,53,0.3)]"
            href="mailto:info@devgroup.se"
          >
            {h.ctaPrimary}
          </a>
          <button
            className="bg-transparent text-white/70 py-[15px] px-9 rounded-lg text-base font-semibold border border-white/[0.14] cursor-pointer transition-all duration-200 hover:border-white/[0.38] hover:text-white hover:-translate-y-0.5"
            onClick={() => scrollTo("case-study")}
          >
            {h.ctaSecondary}
          </button>
        </div>
      </div>
    </header>
  )
}
