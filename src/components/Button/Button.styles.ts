import styled, { DefaultTheme, css } from 'styled-components'

type ButtonColors = 'primary' | 'secondary'
type ButtonSizes = 'small' | 'large'
type ButtonVariants = 'default' | 'outlined'

const buttonFullWidth = () => css`
  width: 100%;
`

const buttonSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.2rem;
    padding: 0 ${theme.spacings.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 4.6rem;
    font-weight: bold;
    padding: 0 ${theme.spacings.xsmall};
  `
}

const buttonVariant = {
  default: (color: ButtonColors, theme: DefaultTheme) => css`
    background-color: ${theme.colors[color]};
    color: ${theme.colors.white};
  `,
  outlined: (color: ButtonColors, theme: DefaultTheme) => css`
    background-color: transparent;
    border: 0.2rem solid ${theme.colors[color]};
    color: ${theme.colors[color]};
  `
}

interface ButtonProps {
  variant?: ButtonVariants
  color?: ButtonColors
  size?: ButtonSizes
  fullWidth?: boolean
}

export const Button = styled.button<ButtonProps>`
  ${({
    theme,
    variant = 'default',
    color = 'primary',
    size = 'large',
    fullWidth = false
  }) => css`
    display: block;
    border-radius: ${theme.border.radius.default};
    border: 0;
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
    }

    ${buttonVariant[variant](color, theme)}
    ${buttonSize[size](theme)}
    ${fullWidth && buttonFullWidth()}
  `}
`
