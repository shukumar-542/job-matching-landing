import heroImage from "@/public/hero.png"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div id="home" className="container mx-auto px-3" >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            <div className="">
                <h1 className="text-white text-4xl xl:text-5xl font-bold ">Find Your Perfect Job Match with a Swipe</h1>
                <p className="text-[#babaca]  text-sm xl:text-md leading-5 mt-5">MesseMatch is the revolutionary Tinder-style job matching platform connecting Exhibition Stand Installers with premium companies across Germany. Swipe, match, and build your career.</p>
            </div>
            <div className="">
                <Image src={heroImage} alt="Hero Image" className="mx-auto w-full  " />
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection