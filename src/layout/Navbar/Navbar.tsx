import { useEffect, useState } from "react"
import { logoOrangeWhite } from "../../imgs"
import "./Navbar.scss"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <img
        className="navbar__logo"
        src={logoOrangeWhite}
        alt="Devgroup"
        height={34}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="navbar__links">
        <button className="navbar__link" onClick={() => scrollTo("about")}>About</button>
        <button className="navbar__link" onClick={() => scrollTo("services")}>Services</button>
        <button className="navbar__link" onClick={() => scrollTo("customers")}>Customers</button>
        <a className="navbar__contact" href="mailto:info@devgroup.se">Get in touch</a>
      </div>
    </nav>
  )
}
