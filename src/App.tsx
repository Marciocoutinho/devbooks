import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import { RequireAuth } from './components/RequireAuth/RequireAuth'

import { Signin } from './pages/Auth/Signin'
import { SignUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'
import { MyBooks } from './pages/MyBooks'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route
                path="/Home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/livros"
                element={
                  <RequireAuth>
                    <Books />
                  </RequireAuth>
                }
              />
              <Route
                path="/livros/:bookId"
                element={
                  <RequireAuth>
                    <BookDetail />
                  </RequireAuth>
                }
              />
              <Route
                path="/meus-livros"
                element={
                  <RequireAuth>
                    <MyBooks />
                  </RequireAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
