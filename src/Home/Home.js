import React from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Header from '../components/Header/Header'
import Projects from '../Projects/Projects'
import Technology from '../Technology/Technology'



const Home = () => {
  return (
     <>
       <Header/>
       <AboutMe/>
       <Technology/>
       <Projects/>
     </>
  )
}

export default Home