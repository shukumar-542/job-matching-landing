import Image from 'next/image'
import screen from "@/public/screen.png"
import HeadingText from '../Shared/HeadingText/HeadingText'


const Screen = () => {
  return (
    <div className='px-3' id='screen'>
        <HeadingText 
            title="Die App auf einen Blick"
            description="Aufträge finden. Monteure und Veranstaltungsbau-Firmen verbinden. Schnell, einfach unkompliziert-mit nur einem Swoom"
        />
        <div>
            <Image src={screen} alt="App Screen" className='mx-auto py-8 md:py-16'/>
        </div>
    </div>
  )
}

export default Screen