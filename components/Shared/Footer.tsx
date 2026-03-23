import logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Screen", path: "/screen" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-[#1A283A]">
      <div className=" border-b border-[#FFFFFF]">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Logo" className="h-24 object-contain " />

        </div>
        <div className="flex justify-center items-center gap-5 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-[#FFFFFF] py-5">
        Copyright 2026 MesseMatch all rights reserved
      </p>
    </div>
  )
}

export default Footer