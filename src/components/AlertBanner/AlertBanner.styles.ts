import styled, { DefaultTheme, css } from 'styled-components'
import { AlertBannerVariants } from './AlertBanner'

interface ContainerProps {
  variant: AlertBannerVariants
}

const AlertBannerVariants = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success.light};
    color: ${theme.colors.success.main};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger.light};
    color: ${theme.colors.danger.main};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning.light};
    color: ${theme.colors.warning.main};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    padding: 1.4rem;
    width: 100%;
    border-radius: ${theme.border.radius.default};
    margin-top: ${theme.spacings.small};
    font-weight: ${theme.font.weigth.normal};

    svg {
      width: 2.4rem;
    }

    ${AlertBannerVariants[variant](theme)}
  `}
`
