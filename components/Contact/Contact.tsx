import play from "@/public/palyStore.png"
import app from "@/public/appStore.png"
import about from "@/public/contact.png"
import Image from "next/image"

const Contact = () => {
    return (

        <div className="py-12">
            <div className="mx-3 bg-[#15202E] shadow-md rounded-md ">
                <div className="lg:flex justify-between items-center gap-5 lg:ml-8 ">
                    <div className="w-full p-5">
                        <h1 className="text-[#E47B35] text-2xl">Ready to Transform Your Career?</h1>
                        <p>Join thousands of installers and companies already using MesseMatch to build successful partnerships</p>
                        <div className="flex  mt-5">
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