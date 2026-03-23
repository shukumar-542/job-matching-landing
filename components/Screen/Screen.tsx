import Image from 'next/image'
import React from 'react'
import screen from "@/public/screen.png"


const Screen = () => {
  return (
    <div className='px-3'>
        <h1 className='text-[#FFFFFF] text-4xl text-center font-bold pt-10'>Beautiful App Interface</h1>
        <p className='text-[#F1F1F2] text-center mt-1'>Explore our intuitive design crafted for a seamless job matching experience</p>

        <div>
            <Image src={screen} alt="App Screen" className='mx-auto py-16'/>
        </div>
    </div>
  )
}

export default Screen