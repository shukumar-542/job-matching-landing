import React from 'react'
import Screen from '../Screen/Screen'
import HowItWork from '../HowItWork/HowItWork'
import AboutApp from '../AboutApp/AboutApp'

const HomePage = () => {
  return (
    <div className='bg-[#1A283A] min-h-[75vh] '>
      <div className='container mx-auto'>
        <h1 className='text-white text-4xl font-bold py-10'>Welcome to JobMatchInn</h1>
        <AboutApp/>
        <HowItWork/>
        <Screen />
      </div>
    </div>
  )
}

export default HomePage