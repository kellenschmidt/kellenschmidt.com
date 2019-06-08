import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Homepage from '../components/Homepage/Homepage'
import { Context as ResponsiveContext } from 'react-responsive'
import { connect } from 'react-redux'
import fonts from '../lib/fonts'

const mapStateToProps = (state) => {
  return {
    fakeWidth: state.responsive.fakeWidth
  }
}

const Index = (props) => {
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      fonts()

      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  const size = useWindowSize()

  return (
    <>
      <Head>
        <title>Kellen Schmidt | Personal Website</title>
        <meta name="description"
          content="Hey! This is my personal website that I created from scratch to share the awesome projects I'm working on. Check it out!"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin/>
        <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin/>
        <link rel="preload" href="/static/Gilroy-Regular.woff2" as="font"/>
        <link rel="preload" href="/static/Gilroy-Medium.woff2" as="font"/>
        <link rel="preload" href="/static/Gilroy-SemiBold.woff2" as="font"/>
        <link rel="preload" href="/static/Gilroy-Bold.woff2" as="font"/>
      </Head>
      <ResponsiveContext.Provider value={{ width: size.width || props.fakeWidth || 500 }}>
        <Homepage/>
      </ResponsiveContext.Provider>
    </>
  )
}

export default connect(mapStateToProps)(Index)
