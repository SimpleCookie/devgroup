import { Navbar } from "./layout/Navbar"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
