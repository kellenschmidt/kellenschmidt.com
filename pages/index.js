import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Homepage from '../components/Homepage/Homepage'
import { Context as ResponsiveContext } from 'react-responsive'
import { connect } from 'react-redux'

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
        <link href="https://fonts.googleapis.com/css?family=Muli|Permanent+Marker|Rock+Salt" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ResponsiveContext.Provider value={{ width: size.width || props.fakeWidth || 500 }}>
        <Homepage/>
      </ResponsiveContext.Provider>
    </>
  )
}

export default connect(mapStateToProps)(Index)
