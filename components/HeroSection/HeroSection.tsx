import heroImage from "@/public/hero.png"
import paly from "@/public/palyStore.png"
import apple from "@/public/appStore.png"
import star from "@/public/star.png"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div id="home" className="container mx-auto px-3" >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                <div className="relative">
                    <h1 className="text-white text-4xl xl:text-5xl font-bold ">Swoom dich zu deinem perfekten Auftrag</h1>
                    <p className="text-[#babaca]  text-sm xl:text-md leading-5 mt-5">MesseMatch ist die revolutionäre Auftragsbörse im Swoom Stil die talentierte Monteure mit Top-Auftraggebern im Bereich Messe und Veranstaltungsbau verbinden.
                        Swoomen, Matchen und Auftrag sichern!</p>

                    <div className="mt-5 space-y-3">
                        <Image src={paly} alt="Play Store" className="w-40  mr-4 inline-block" />
                        <Image src={apple} alt="Apple Store" className="w-40  mr-4 inline-block" />
                    </div>
                    <div className="absolute right-1/3 hidden lg:block">
                        <Image src={star} alt="Star Rating" className="w-16 mt-4" />
                    </div>
                </div>
                <div className="">
                    <Image src={heroImage} alt="Hero Image" className="mx-auto w-full  " />
                </div>
            </div>

        </div>
    )
}

export default HeroSection