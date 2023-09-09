import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo/Logo'

import {
  Container,
  FormContainer,
  Heading,
  LogoContainer,
  InputContainer
} from '../Auth.styles'
import { useAuth } from '../../../hooks/useAuth'

const validationSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z
    .string()
    .min(1, { message: 'Email é obrigatório' })
    .email({ message: 'Insira um email válido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
})

type SignUpForm = z.infer<typeof validationSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpForm>({
    resolver: zodResolver(validationSchema)
  })

  const { signUp } = useAuth()

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    await signUp(data)
  }

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Heading>
          <h1>Cadastre-se de graça</h1>
          <p>
            Já tenho uma conta{' '}
            <Link color="secondary" to="/">
              Entrar
            </Link>
          </p>
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              id="name"
              label="Nome Completo"
              type="text"
              error={errors.name?.message}
              {...register('name')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              id="email"
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              id="password"
              label="Senha"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </InputContainer>

          <Button fullWidth>Cadastrar</Button>
        </form>
      </FormContainer>
    </Container>
  )
}
