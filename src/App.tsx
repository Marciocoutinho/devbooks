import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import { Signin } from './pages/Auth/Signin'
import { SignUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home/Home'
import { RequireAuth } from './components/RequireAuth/RequireAuth'

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
            </Routes>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
