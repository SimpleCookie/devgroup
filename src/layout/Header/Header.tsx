import "./Header.scss"
import type { CSSProperties } from "react"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

export const Header = () => (
  <header className="hero">
    <div className="hero__grid" />
    <div
      className="hero__orb"
      style={{
        "--orb-top": "-8%",
        "--orb-left": "15%",
        "--orb-size": "480px",
        "--orb-delay": "0s",
      } as CSSProperties}
    />
    <div
      className="hero__orb"
      style={{
        "--orb-top": "55%",
        "--orb-left": "65%",
        "--orb-size": "320px",
        "--orb-delay": "3s",
      } as CSSProperties}
    />
    <div
      className="hero__orb"
      style={{
        "--orb-top": "35%",
        "--orb-left": "-8%",
        "--orb-size": "280px",
        "--orb-delay": "6s",
      } as CSSProperties}
    />
    <div className="hero__content">
      <div className="hero__badge">⚡ IT Consulting &amp; Development</div>
      <h1 className="hero__title">
        We build the technology<br />
        behind <span className="hero__title-accent">growing businesses</span>
      </h1>
      <p className="hero__sub">
        Devgroup delivers modern IT solutions — from web and mobile development
        to strategic consulting. We work closely with you from idea to launch.
      </p>
      <div className="hero__actions">
        <a className="hero__primary" href="mailto:info@devgroup.se">Get in touch →</a>
        <button className="hero__secondary" onClick={() => scrollTo("about")}>Learn more</button>
      </div>
    </div>
  </header>
)
