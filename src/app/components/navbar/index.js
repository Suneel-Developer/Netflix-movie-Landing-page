"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 w-full px-4 lg:px-20 z-10 ${
        isScrolled ? " bg-[#101010] text-white z-50" : "bg-[rgba(0,0,0,.33)]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Image
            src="/assets/Logo.png"
            alt="My Image"
            width={100}
            height={200}
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="relative group text-lg">
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d90429] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#" className="relative group text-lg">
            Installation Tutorial
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d90429] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#" className="relative group text-lg">
            Channels List
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d90429] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <button className="bg-[#d90429] rounded px-4 py-2 hidden md:block">
          ORDER NOW
        </button>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ======================================= On Mobile Screen */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 bg-gray-900 w-4/5 z-50 h-screen p-4">
          <button
            className="absolute top-4 right-4 focus:outline-none text-lg"
            onClick={closeMobileMenu}
          >
            <RxCross2 />
          </button>
          <div className="flex items-center mb-4 mt-10">
            <Image
              src="/assets/Logo.png"
              alt="My Image"
              width={100}
              height={200}
            />
          </div>
          <div className="flex flex-col items-left space-y-4 py-4">
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Installation Tutorial
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Channels List
            </Link>
          </div>
          <button className=" items-start w-32 p-2 rounded mt-5 bg-[#d90429] ">
            ORDER NOW
          </button>
        </div>
      )}
    </div>
  );
}
