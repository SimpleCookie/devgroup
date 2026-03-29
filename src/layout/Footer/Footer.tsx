import dayjs from "dayjs"
import { logoOrangeWhite } from "../../imgs"
import "./Footer.scss"

export const Footer = () => {
  const year = dayjs().year()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <img src={logoOrangeWhite} alt="Devgroup" height={30} />
        </div>
        <div className="footer__right">
          <div className="footer__copy">© {year} Devgroup AB. All rights reserved.</div>
          <div className="footer__credit">Logotype by Maria Skogen &middot; Website by Marcus Ekström</div>
          <div className="footer__links">
            <a className="footer__link" href="https://github.com/SimpleCookie" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="footer__link" href="https://kvadrat.se" target="_blank" rel="noopener noreferrer">Kvadrat</a>
            <a className="footer__link" href="mailto:info@devgroup.se">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
