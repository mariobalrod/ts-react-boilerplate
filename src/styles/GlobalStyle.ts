import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%; 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
    'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga","kern";
    font-variant-numeric: proportional-nums;
  }
  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;