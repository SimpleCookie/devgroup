import React from "react"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
