import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes';
import GlobalStyle from 'styles/GlobalStyle';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h2>App</h2>
    </ThemeProvider>
  );
}

export default App;
