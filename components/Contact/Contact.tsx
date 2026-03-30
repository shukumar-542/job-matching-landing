import play from "@/public/palyStore.png"
import app from "@/public/appStore.png"
import about from "@/public/contact.png"
import Image from "next/image"

const Contact = () => {
    return (

        <div className="py-12" id="contact">
            <div className="mx-3 bg-[#15202E] shadow-md rounded-md ">
                <div className="lg:flex justify-between items-center gap-5 lg:ml-8 ">
                    <div className="w-full p-5">
                        <h1 className="text-[#E47B35] font-medium text-[28px] md:text-[38px]">Bereit für den nächsten Karriereschritt?</h1>
                        <p>Schließen Sie sich Tausenden von Installateuren und Unternehmen an, die MesseMatch bereits nutzen, um erfolgreiche Partnerschaften aufzubauen.</p>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start  mt-5">
                            <Image src={play} alt="Play Store" className="w-40 mr-4 inline-block" />
                            <Image src={app} alt="Apple Store" className="w-40  mr-4 inline-block" />
                        </div>
                    </div>
                    <div className="w-full flex justify-end ">
                        <Image src={about} alt="About App" className="lg:h-137.5 " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact