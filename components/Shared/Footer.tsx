import logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const navLinks = [
    { name: "Heim", path: "#home" },
    { name: "Über uns", path: "#about" },
    { name: "So funktioniert es", path: "#how-it-works" },
    { name: "Bildschirm", path: "#screen" },
    { name: "Kontakt", path: "#contact" },
  ];


  return (
    <div className="bg-[#1A283A]">
      <div className=" border-b border-[#FFFFFF]">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Logo" className="h-24 object-contain " />

        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 py-5">
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
        Copyright 2026 MesseMatch. Alle Rechte vorbehalten.
      </p>
    </div>
  )
}

export default Footer