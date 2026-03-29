import { useEffect, useState } from "react"
import styled from "styled-components"
import { logoOrangeWhite } from "../imgs"

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 40px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background: ${(p) => (p.$scrolled ? "rgba(10, 10, 15, 0.92)" : "transparent")};
  backdrop-filter: ${(p) => (p.$scrolled ? "blur(20px)" : "none")};
  border-bottom: ${(p) =>
    p.$scrolled ? "1px solid rgba(255,255,255,0.07)" : "none"};

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 560px) {
    display: none;
  }
`

const NavLink = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.2s;
  letter-spacing: 0.01em;

  &:hover {
    color: #fff;
  }
`

const ContactBtn = styled.a`
  background: #ff6b35;
  color: white;
  padding: 9px 22px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: #e05a28;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
  }
`

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
    <Nav $scrolled={scrolled}>
      <img
        src={logoOrangeWhite}
        alt="Devgroup"
        height={34}
        style={{ cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <NavLinks>
        <NavLink onClick={() => scrollTo("about")}>About</NavLink>
        <NavLink onClick={() => scrollTo("services")}>Services</NavLink>
        <NavLink onClick={() => scrollTo("customers")}>Customers</NavLink>
        <ContactBtn href="mailto:info@devgroup.se">Get in touch</ContactBtn>
      </NavLinks>
    </Nav>
  )
}
