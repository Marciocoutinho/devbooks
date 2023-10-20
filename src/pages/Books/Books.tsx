import { useSearchParams } from 'react-router-dom'

import { MainLayout } from '../../layouts/MainLayout'

import { useBooksQuery } from '../../hooks/useBooksQuery'

import { BookCard } from '../../components/BookCard'

import { BooksList } from './Books.styles'
import { BookLoader } from './BookLoader'

export function Books() {
  const params = useSearchParams()
  const [searchParams] = params
  const q = searchParams.get('q') as string

  const { data, isLoading } = useBooksQuery({
    search: q,
    maxResults: 20
  })

  return (
    <MainLayout>
      <h1>Resultado da Busca</h1>

      <BooksList>
        {data && !isLoading ? (
          data.items.map((item) => (
            <li key={item.id}>
              <BookCard book={item} />
            </li>
          ))
        ) : (
          <BookLoader />
        )}
      </BooksList>
    </MainLayout>
  )
}
