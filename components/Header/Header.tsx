// Code: Header component
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = (): void => setIsMobile(!isMobile);
  return (
    <header className="p-6 flex items-center justify-between">
    <motion.p 
    animate={{ scale: [0.5, 1] }}
    transition={{ duration: 1 }}
    className="font-[--font-trade-winds]  text-gray-500 text-l cursor-pointer hover:text-violet-500 md:text-2xl">DMYTRO</motion.p>
    <div onClick={handleMobile} className="flex flex-col gap-1 w-[30px] cursor-pointer md:hidden">
      <span className="bg-violet-500 h-[1px] w-full"></span>
      <span className="bg-violet-500 h-[1px] w-full"></span>
      <span className="bg-violet-500 h-[1px] w-full"></span>
    </div>
    <ul className="items-center justify-center gap-5 hidden md:flex">
      <a href="#home" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Home</a>
      <a href="#portfolio" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Portfolio</a>
      <a href="#about" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">About Me</a>
      <a href="#contacts" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Contacts</a>
    </ul>
    {isMobile && <div className="bg-violet-500 w-screen h-screen fixed top-0 left-0">
      <div onClick={handleMobile} className="flex w-[30px] relative top-5 left-[90vw] cursor-pointer">
        <span className="bg-amber-50 h-[1px] w-full absolute left-0 top-0 rotate-45"></span>
        <span className="bg-amber-50 h-[1px] w-full absolute left-0 top-0 rotate-135"></span>
      </div>
      <ul className="flex flex-col items-center justify-center gap-5 w-full h-full">
      <a onClick={handleMobile} href="#home" className="relative text-amber-50 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Home</a>
      <a onClick={handleMobile} href="#portfolio" className="relative text-amber-50 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Portfolio</a>
      <a onClick={handleMobile} href="#about" className="relative text-amber-50 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">About Me</a>
      <a onClick={handleMobile} href="#contacts" className="relative text-amber-50 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Contacts</a>
      <a onClick={handleMobile} href="#comments" className="relative text-amber-50 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Comments</a>
    </ul>
      </div>}
  </header>
  )
}
