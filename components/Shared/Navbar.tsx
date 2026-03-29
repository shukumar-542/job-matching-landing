"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import logo from "@/public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Heim", path: "#home" },
    { name: "Über uns", path: "#about" },
    { name: "HSo funktioniert es", path: " " },
    { name: "Bildschirm", path: "#screen" },
    { name: "Kontakt", path: "#contact" },
  ];

  return (
    <nav className="bg-[#1A283A] text-white sticky top-0 z-50 px-3">
      {/* Main Navbar */}
      <div className="container mx-auto   py-2 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={200} height={200} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-[#E47B35] px-5 py-2 rounded-lg hover:bg-[#d6702d] transition">
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#1A283A] z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <HiX size={28} className="text-white" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg hover:text-[#E47B35] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Button */}
          <button className="bg-[#E47B35] text-white px-6 py-2 rounded-lg mt-4">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;