import React from 'react'
import Screen from '../Screen/Screen'
import HowItWork from '../HowItWork/HowItWork'
import AboutApp from '../AboutApp/AboutApp'
import HeroSection from '../HeroSection/HeroSection'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <div className='bg-[#1A283A] min-h-[75vh] '>
      <div className='container mx-auto'>
        <HeroSection/>
        <AboutApp/>
        <HowItWork/>
        <Screen />
        <Contact/>
      </div>
    </div>
  )
}

export default HomePage