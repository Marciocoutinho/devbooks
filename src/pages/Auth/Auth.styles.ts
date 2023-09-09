import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.large};
    height: 100vh;
  `}
`
export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    width: 100%;

    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
export const LogoContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`
export const Heading = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    h1 {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const InputContainer = styled.div`
  ${({ theme }) => css`
    & + & {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
