import { ReactNode } from 'react'

import { Header } from '../../components/Header'

import { Container, Main } from './MainLayout.styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>
    </Container>
  )
}
