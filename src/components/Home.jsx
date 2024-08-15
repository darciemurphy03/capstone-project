import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <div className="min-h-screen flex flex-col">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
