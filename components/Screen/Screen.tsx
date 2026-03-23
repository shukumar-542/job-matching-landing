import Image from 'next/image'
import React from 'react'
import screen from "@/public/screen.png"
import HeadingText from '../Shared/HeadingText/HeadingText'


const Screen = () => {
  return (
    <div className='px-3'>
        <HeadingText 
            title="Beautiful App Interface"
            description="Explore our intuitive design crafted for a seamless job matching experience"
        />
        <div>
            <Image src={screen} alt="App Screen" className='mx-auto py-8 md:py-16'/>
        </div>
    </div>
  )
}

export default Screen