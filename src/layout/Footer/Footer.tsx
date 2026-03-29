import dayjs from "dayjs"
import { logoOrangeWhite } from "../../imgs"

export const Footer = () => {
  const year = dayjs().year()
  const linkClass = "text-white/30 text-xs no-underline transition-colors duration-200 hover:text-[#ff6b35]"
  return (
    <footer className="bg-[#060609] border-t border-white/[0.06] py-[52px] px-10 max-sm:py-10 max-sm:px-5">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <div>
          <img src={logoOrangeWhite} alt="Devgroup" className="h-[30px] w-auto" />
        </div>
        <div className="text-right max-sm:text-left">
          <div className="text-white/30 text-[13px]">© {year} Devgroup AB. All rights reserved.</div>
          <div className="text-white/[0.18] text-xs mt-[5px]">Logotype by Maria Skogen &middot; Website by Marcus Ekström</div>
          <div className="flex gap-5 mt-3 justify-end max-sm:justify-start">
            <a className={linkClass} href="https://github.com/SimpleCookie" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className={linkClass} href="https://kvadrat.se" target="_blank" rel="noopener noreferrer">Kvadrat</a>
            <a className={linkClass} href="mailto:info@devgroup.se">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
