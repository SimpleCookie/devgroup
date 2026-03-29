import { Navbar } from "./layout/Navbar"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
