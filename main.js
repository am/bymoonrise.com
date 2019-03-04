import suncalc from 'suncalc'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    background-color: black;
  }
`

const Footer = () => {
  const { rise } = suncalc.getMoonTimes(new Date(), 41.3851, 2.1734);
  const noteEl = document.querySelector('#moonrise-text')
  const hour = rise.toLocaleString(
    'en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )
  return (
    <p>barcelona - moonrise at {hour}</p>
  )
}

const Content = props => {
  const content = [
    { url: 'https://instagram.fopo3-1.fna.fbcdn.net/vp/87fe4f6eea4e2be0c504c560a84aecfd/5D02E8D3/t51.2885-15/sh0.08/e35/s640x640/51190401_608875389560437_2064615769528808919_n.jpg?_nc_ht=instagram.fopo3-1.fna.fbcdn.net' },
  ]
  const Section = styled.section`
    h2 {
      font-size: 3em;
    }
  `
  const list = content.map(section => {
    const { url } = section
    return (
      <Section>
        <h2>This is a awesome title here.</h2>
        <img alt="" src={ url }/>
      </Section>
    )
  })
  return (
    <main>{ list }</main>
  )
}

const Header = () => {
  const Header = styled.header`
    h1 {
      font-size: 2em;
      text-align: center;
    }
  `
  return (
    <Header>
      <h1>by moonrise</h1>
    </Header>
  )
}

const Container = styled.div`
`

const app = document.getElementById('app')
ReactDOM.render(
  <Container>
    <GlobalStyle />
    <Header />
    <Content />
    <Footer />
  </Container>
  , app)
