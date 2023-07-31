import { useEffect, useState } from "react"

/**
 * Example usage:
  const App = () => {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts")
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (data) <div>{JSON.stringify(data)}</div>
  }
*/

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setData(undefined)
      setError(undefined)
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { loading, error, data }
}
