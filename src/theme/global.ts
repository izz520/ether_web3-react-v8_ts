import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --themeBgColor:${(props) => props.theme.colors.background};
    --themeFontColor:${(props) => props.theme.colors.font};
  }
  body{
    color: var(--themeFontColor);
  }
`

export default GlobalStyle;