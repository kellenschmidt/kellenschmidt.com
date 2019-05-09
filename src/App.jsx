import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import AppRouter from './components/AppRouter/AppRouter'
import { createGlobalStyle } from 'styled-components'

const theme = {

}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-ExtraBold.otf);
    font-weight: bold;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Light.otf);
    font-weight: normal;
  }

  body {
    font-family: Gilroy;
    overflow: hidden;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Router>
            <AppRouter />
          </Router>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
