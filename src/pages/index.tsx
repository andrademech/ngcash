import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>My first Next Aplication</h1>
      <p>It was build and worked!</p>
    </Container>
  )
}

export default Home
