import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global'

import { Search } from './pages/Search'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
