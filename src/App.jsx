import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import AppRouter from './components/AppRouter/AppRouter'
import { createGlobalStyle } from 'styled-components'

const theme = {
  color: {
    blue: {
      normal: "#4595ec",
      light: "#2dc5ef",
    },
    orange: {
      normal: "#ef6f2d",
      light: "#efc200",
    },
    salmon: {
      normal: "#ec5d55",
      light: "#f29c61",
    },
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Thin.otf);
    font-weight: 100;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-UltraLight.otf);
    font-weight: 200;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Light.otf);
    font-weight: 300;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Regular.ttf);
    font-weight: 400;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Medium.ttf);
    font-weight: 500;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-SemiBold.otf);
    font-weight: 600;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Bold.ttf);
    font-weight: 700;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-ExtraBold.otf);
    font-weight: 800;
  }
  @font-face {
    font-family: Gilroy;
    src: url(Gilroy-Heavy.ttf);
    font-weight: 900;
  }

  body {
    font-family: Gilroy;
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
