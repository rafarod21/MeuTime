import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';

import { FootballContextProvider } from './contexts/FootballContext';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <FootballContextProvider>
          <Router />
        </FootballContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
