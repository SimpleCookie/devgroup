import { Navbar } from "./layout/Navbar"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"
import { LanguageProvider } from "./i18n/LanguageContext"

function App() {
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
