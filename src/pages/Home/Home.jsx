import React from 'react'
import Header from '../../components/Header/Header'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
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
