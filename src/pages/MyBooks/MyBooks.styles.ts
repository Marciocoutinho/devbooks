import styled, { css } from 'styled-components'
import { clampText } from '../../styles/clampText'

export const Container = styled.div``

export const BookContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    margin-top: 1.6rem;
    margin-bottom: 6.4rem;
    flex-wrap: wrap;
  `}
`

export const Book = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    img {
      height: 16rem;
      width: 12rem;
      object-fit: fill;
      border-radius: ${theme.border.radius.small};
      box-shadow:
        0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
    }
    h2 {
      font-size: ${theme.font.sizes.medium};
      margin-top: ${theme.spacings.xxsmall};
      margin-bottom: 0.4rem;

      ${clampText(2)}
    }
    h3 {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: normal;
    }
  `}
`
