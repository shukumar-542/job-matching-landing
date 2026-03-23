import React from 'react'
import HeadingText from '../Shared/HeadingText/HeadingText'
import { MdPhoneIphone } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const HowItWork = () => {
    return (
        <div id='how-it-works' className='container mx-auto p-3'>
            <HeadingText
                title="How It Works"
                description="Getting started is simple. Follow these four easy steps to find your perfect job match."
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 md:my-20'>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center'>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <MdPhoneIphone />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Download & Sign Up</h2>
                    <p className='text-[#F1F1F2]'>Download the app from App Store or Google Play and create your profile in minutes.</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center'>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <IoMdCheckmarkCircleOutline />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Set Your Preferences</h2>
                    <p className='text-[#F1F1F2]'>Choose your ideal job location, project duration, and desired compensation range.</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center'>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <CiHeart />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Start Swiping</h2>
                    <p className='text-[#F1F1F2]'>Browse job opportunities and swipe right on positions that interest you.</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center'>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <FaRegComment />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Match & Connect</h2>
                    <p className='text-[#F1F1F2]'>When both parties swipe right, it's a match! Start chatting and arrange your project.</p>
                </div>

            </div>

        </div>
    )
}

export default HowItWork