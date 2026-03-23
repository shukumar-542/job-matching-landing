import React from 'react'
import HeadingText from '../Shared/HeadingText/HeadingText'
import phone from "@/public/aboutApp.png"
import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'
const AboutApp = () => {
    return (
        <div className='container mx-auto px-3'>
            <HeadingText
                title="About Our App"
                description="The first Tinder-style job matching platform designed specifically for Exhibition Stand Installers"
            />

            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mt-10 md:mt-20'>
                <div className='space-y-6'>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Instant Matching</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Swipe right on jobs you love. Get matched instantly with companies looking for your skills.</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Instant Matching</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Swipe right on jobs you love. Get matched instantly with companies looking for your skills.</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Instant Matching</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Swipe right on jobs you love. Get matched instantly with companies looking for your skills.</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Instant Matching</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Swipe right on jobs you love. Get matched instantly with companies looking for your skills.</p>

                    </div>
                </div>
                <div className=''>
                    <Image src={phone} alt="About App" className=' mx-auto w-full object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default AboutApp