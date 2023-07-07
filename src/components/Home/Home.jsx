import React from 'react'
import Body from '../Body/Body'
import Header from '../Header/Header'
import HeroBanner from '../HeroBanner/HeroBanner'
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className="home">
      <Header />
      <HeroBanner />
    </div>
    </>
  )
}

export default Home
