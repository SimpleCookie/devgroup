import React from "react"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Home } from "./screens/Home"
import { useFetch } from "./hooks/useFetch"
import "./app.scss"

function App() {

  const { data, error, loading } = useFetch<String>("https://jsonplaceholder.typicode.com/posts")
  if (error) return <div>Error</div>
  if (loading) return <div>Loading...</div>
  if (data) console.log(data)

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
