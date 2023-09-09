import { ReactComponent as BookIcon } from '../../icons/book.svg'
import { Container } from './Logo.styles'

export function Logo() {
  return (
    <Container>
      <BookIcon />
      <span>DevBooks</span>
    </Container>
  )
}
