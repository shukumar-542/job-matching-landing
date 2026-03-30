import React from 'react'
import HeadingText from '../Shared/HeadingText/HeadingText'
import phone from "@/public/aboutApp.png"
import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'
const AboutApp = () => {
    return (
        <div className='container mx-auto px-3' id='about'>
            <HeadingText
                title="Über unsere MesseMatch-App"
                description="die erste Auftragsvermittlungsplattform mit Swoom Funktion, die speziell für Talente im Messe-und Veranstaltungsbranche entwickelt wurde."
            />

            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mt-10 md:mt-20'>
                <div className='space-y-6 '>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4 '>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Sofortiges Matching</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Ein Match entsteht, wenn sowohl der Monteur den Auftrag des Auftraggebers als auch der Auftraggeber das Profil des interessierten Monteurs nach rechts Swoomt, erst dann wird die Kommunikation zwischen beiden freigeschaltet</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Verifizierte Unternehmen</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Arbeiten Sie mit vertrauenswürdigen, geprüften Unternehmen der Messe-und Veranstaltungsbranche in Deutschland, Österreich, Italien, Spanien und Frankreich zusammen.</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Karriereentwicklung</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Sichern Sie sich Premium-Angebote und fördern Sie Ihre Karriere mit flexiblen Abonnementplänen.</p>

                    </div>
                    {/* Feature 1 */}
                    <div className='border border-[#894A20] rounded-xl shadow-2xl bg-[#15202E] px-5 py-4'>
                        <div className='flex items-center gap-2 font-medium text-xl'>
                           <FaCircleCheck className='text-[#E47B35]' /> 
                           <p>Direkter Chat</p>
                        </div>
                        <p className='text-[#F1F1F2] text-[10px] md:text-[14px] mt-1'>Chatten Sie direkt mit Unternehmen. Keine Zwischenhändler, keine Verzögerungen, einfach direkte Kommunikation.</p>

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