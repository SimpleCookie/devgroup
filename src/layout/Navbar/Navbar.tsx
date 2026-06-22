import { useEffect, useState } from "react"
import { logoOrangeWhite } from "../../imgs"
import { useLanguage } from "../../i18n/LanguageContext"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const linkClass =
  "bg-transparent border-0 text-white/60 text-sm font-medium cursor-pointer p-0 transition-colors duration-200 tracking-[0.01em] hover:text-white"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-10 h-[68px] flex items-center justify-between transition-all duration-300 max-sm:px-5${scrolled ? " bg-[rgba(10,10,15,0.92)] backdrop-blur-[20px] border-b border-white/[0.07]" : ""
        }`}
    >
      <img
        className="cursor-pointer h-[34px] w-auto"
        src={logoOrangeWhite}
        alt="Devgroup"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="flex gap-9 items-center max-md:gap-5">
        <div className="flex gap-9 items-center max-md:gap-5 max-[560px]:hidden">
          <button className={linkClass} onClick={() => scrollTo("about")}>{t.nav.about}</button>
          <button className={linkClass} onClick={() => scrollTo("services")}>{t.nav.services}</button>
          <button className={linkClass} onClick={() => scrollTo("customers")}>{t.nav.customers}</button>
          <button className={linkClass} onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
        </div>
        <div className="flex items-center gap-[2px]">
          <button
            className={`bg-transparent border-0 text-[11px] font-bold cursor-pointer px-[7px] py-[3px] rounded tracking-[0.07em] transition-colors duration-200 ${lang === 'en' ? 'text-white bg-white/[0.1]' : 'text-white/35 hover:text-white/60'}`}
            onClick={() => setLang('en')}
          >EN</button>
          <span className="text-white/20 text-[10px] select-none">|</span>
          <button
            className={`bg-transparent border-0 text-[11px] font-bold cursor-pointer px-[7px] py-[3px] rounded tracking-[0.07em] transition-colors duration-200 ${lang === 'sv' ? 'text-white bg-white/[0.1]' : 'text-white/35 hover:text-white/60'}`}
            onClick={() => setLang('sv')}
          >SV</button>
        </div>
        <a
          className="bg-[#ff6b35] text-white py-[9px] px-[22px] rounded-[7px] text-sm font-bold no-underline transition-all duration-200 tracking-[0.01em] hover:bg-[#e05a28] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,107,53,0.35)] max-[560px]:hidden"
          href="mailto:info@devgroup.se"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  )
}
