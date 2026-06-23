import { useEffect } from "react"
import { Navbar } from "./layout/Navbar"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"
import { LanguageProvider } from "./i18n/LanguageContext"

function App() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return

    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      } else if (attempts < 20) {
        attempts++
        requestAnimationFrame(tryScroll)
      }
    }
    tryScroll()
  }, [])

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <Header />
        <Home />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
