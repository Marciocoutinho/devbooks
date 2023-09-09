import { InputHTMLAttributes, forwardRef } from 'react'
import { Container } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, ...props },
  ref
) {
  return (
    <Container error={Boolean(error)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} ref={ref} />
      {error && <p>{error}</p>}
    </Container>
  )
})
