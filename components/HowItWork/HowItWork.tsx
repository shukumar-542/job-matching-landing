import React from 'react'
import HeadingText from '../Shared/HeadingText/HeadingText'
import { MdPhoneIphone } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const HowItWork = () => {
    return (
        <div id='how-it-works ' className='container mx-auto p-3'>
            <HeadingText
                title="So funktioniert es"
                description="Der Einstieg ist ganz einfach. Befolgen Sie diese vier einfachen Schritte, um den perfekten Job für sich zu finden."
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 md:my-20'>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300'>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <MdPhoneIphone />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Herunterladen & Registrieren</h2>
                    <p className='text-[#F1F1F2]'>Laden Sie die App aus dem App Store oder Google Play herunter und erstellen Sie Ihr Profil in wenigen Minuten.</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center  hover:shadow-2xl transition-shadow duration-300 '>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <IoMdCheckmarkCircleOutline />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Legen Sie Ihre Präferenzen fest</h2>
                    <p className='text-[#F1F1F2]'>Wählen Sie Ihren idealen Arbeitsort, die Projektdauer und die gewünschte Vergütungsspanne.</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300  '>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <CiHeart />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Jetzt Swoomen</h2>
                    <p className='text-[#F1F1F2]'>Durchstöbern Sie Stellenangebote und Swoomen Sie bei Positionen, die Sie interessieren, nach rechts..</p>
                </div>
                <div className='bg-[#15202E] flex flex-col items-center px-5 py-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300 '>
                    <p className='bg-[#E47B35] inline-block p-3 rounded-xl text-white text-2xl'>
                        <FaRegComment />
                    </p>
                    <h2 className='text-[#FFFFFF] text-[18px] font-bold text-center py-5'>Match & Connect</h2>
                    <p className='text-[#F1F1F2]'>Wenn beide Parteien nach rechts Swoomen, ist es ein Match! Fangt an zu chatten und euer Projekt zu besprechen.</p>
                </div>

            </div>

        </div>
    )
}

export default HowItWork