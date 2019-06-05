import React from 'react'
import Head from 'next/head';
import Homepage from '../components/Homepage/Homepage'

export default () => (
  <>
    <Head>
      <title>Kellen Schmidt | Personal Website</title>
      <meta name="description"
        content="Hey! This is my personal website that I created from scratch to share the awesome projects I'm working on. Check it out!"/>
      <link href="https://fonts.googleapis.com/css?family=Muli|Permanent+Marker|Rock+Salt" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Homepage/>
  </>
)
