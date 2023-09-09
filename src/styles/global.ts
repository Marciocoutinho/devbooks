import { createGlobalStyle, css } from 'styled-components'

//Template Literals 1.6rem = 16px, 1rem = 10px, 0.1rem = 1px
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      #root,
      body {
        font: 1.6rem ${theme.font.family};
        color: ${theme.colors.blue};
      }
    `}
`
