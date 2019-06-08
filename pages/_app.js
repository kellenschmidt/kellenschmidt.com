import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { setMobileDetect, mobileParser } from 'react-responsive-redux'

const heroColors = {
  blue: {
    normal: "rgb(66,128,241)",
    light: "rgb(168,167,249)",
    complement: "#4595ec",
  },
  green: {
    normal: "rgb(69,159,58)",
    light: "rgb(104,219,164)",
    complement: "#4595ec",
  },
  teal: {
    normal: "rgb(70,161,110)",
    light: "rgb(101,210,226)",
    complement: "#4595ec",
  },
  orange: {
    normal: "rgb(227,99,57)",
    light: "rgb(243,170,81)",
    complement: "#4595ec",
  },
  pink: {
    normal: "rgb(219,89,201)",
    light: "rgb(240,140,203)",
    complement: "#4595ec",
  },
  purple: {
    normal: "rgb(151,98,246)",
    light: "rgb(240,146,249)",
    complement: "#4595ec",
  },
  salmon: {
    normal: "rgb(236,89,121)",
    light: "rgb(241,150,125)",
    complement: "#4595ec",
  },
  lightblue: {
    normal: "rgb(65,151,173)",
    light: "rgb(113,194,248)",
    complement: "#4595ec",
  },
  // yellow: {
  //   normal: "rgb(142,124,38)",
  //   light: "rgb(153,200,74)",
  //   complement: "#4595ec",
  // },
  // pink: {
  //   dark: "#72006a", // #950051, __, #8c0e8f, #a5279d
  //   normal: "#d859cf",
  //   light: "#f08ed1",
  //   complement: "#4595ec",
  // },
}

const otherColors = {
  bmBlue: {
    normal: "#4595ec",
    light: "#2dc5ef",
    complement: "#4595ec",
  },
  usOrange: {
    normal: "#ef6f2d",
    light: "#efc200",
    complement: "#4595ec",
  },
  irGreen: {
    normal: "#47992d",
    light: "#6cdb80",
    complement: "#4595ec",
  },
  boldBlue: {
    normal: "#304cb2",
    light: "#304cb2",
    complement: "#4595ec",
  },
  cap1Red: {
    normal: "#d03027",
    light: "#d03027",
    complement: "#4595ec",
  },
}

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Thin.woff2);
    font-weight: 100;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-UltraLight.woff2);
    font-weight: 200;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Light.woff2);
    font-weight: 300;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Regular.woff2);
    font-weight: 400;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Medium.woff2);
    font-weight: 500;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-SemiBold.woff2);
    font-weight: 600;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Bold.woff2);
    font-weight: 700;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-ExtraBold.woff2);
    font-weight: 800;
  }
  @font-face {
    font-family: Gilroy;
    src: url(/static/Gilroy-Heavy.woff2);
    font-weight: 900;
  }

  body {
    font-family: Gilroy, sans-serif;
  }
`

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const { req, reduxStore } = ctx
    
    // do our mobile detection
    const mobileDetect = mobileParser(req)
    // set mobile detection for our responsive store
    reduxStore.dispatch(setMobileDetect(mobileDetect))

    const randomColor = Object.keys(heroColors)[Math.floor(Math.random() * Object.keys(heroColors).length)]

    return { pageProps, randomColor }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props

    const theme = {
      color: {
        ...heroColors,
        ...otherColors,
        primary: heroColors[this.props.randomColor],
        name: this.props.randomColor,
      },
      breakpoints: Object.keys(sizes).reduce((acc, label) => {
        acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16 - .02}em) {
          ${css(...args)}
        }
      `
        return acc
      }, {}),
    }
    
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle/>
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
