import { useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  useEffect(() => {
    api
      .get('/books')
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  return <h1>Home Page</h1>
}
