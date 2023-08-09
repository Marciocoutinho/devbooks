import { useState } from 'react'
import { useParams } from 'react-router-dom'

export interface BookState {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

export function BookDetail() {
  const [book, setBook] = useState<BookState | null>(null)
  const params = useParams()

  const { bookId } = params

  console.log({ bookId })

  return <h1>Detalhes do Livro</h1>
}
