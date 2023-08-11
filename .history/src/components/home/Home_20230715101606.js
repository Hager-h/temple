import React from 'react'
import Work from "./../work/Work"
import Portfolio from "./../portfolio/Portfolio"
import Footer from "./../footer/Footer"
import Social from "./../social/Social"
import About from "./../about/about"
import Profile from "./../Profile/Profile"
import Landing from "./../landing/landing"
import Card from "./..//landing"
export default function Home() {
  return (
    <div>
      
<Landing />
    <Work />
    <Portfolio />

    <Profile />
    <About />
    <Social />
    <Footer />
<Card />
    
    
    </div>
    )
}
