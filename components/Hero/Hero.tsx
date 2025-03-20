"use client";
import Image from "next/image";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: (custom:number) => ({ opacity: 1, y: 0, transition: { delay: custom * 0.5, duration: 1 } }),
};

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse sm:flex-row lg:h-[80vh] md:p-2 lg:p-4 2xl:w-full 2xl:h-[90vh]">
    <motion.div 
    animate={{ x: 0, opacity: 1 }}
    initial={{ x: -100, opacity: 0 }}
    transition={{ duration: 1 }}
    className="w-full flex flex-col justify-center gap-10  p-2 sm:p-5 sm:w-1/2 md:w-1/2">
      <motion.h1 
      variants={textAnimation}
      custom={1}
      initial="hidden"
      animate="visible"
      className="text-gray-500 text-3xl text-center sm:text-start xl:text-3xl">Crafting Modern & Responsive Web Experiences</motion.h1>
      <motion.p 
      variants={textAnimation}
      custom={2}
      initial="hidden"
      animate="visible"
      className="text-gray-500 text-xl text-center sm:text-start md:text-xl xl:text-xl">I am a Frontend Developer specializing in building fast, interactive, and user-friendly web applications with JavaScript, React, Next.js, and modern UI frameworks.</motion.p>
      <div className="flex justify-center gap-10 md:justify-start md:mt-[80px]">
        <Btn text="View Portfolio" link="#portfolio"/>
        <Btn text="Hire Me" link="#contacts"/>
      </div>
    </motion.div>
    <motion.div 
    animate={{ x: 0, opacity: 1 }}
    initial={{ x: 100, opacity: 0 }}
    transition={{ duration: 1 }}
    className="w-full shadow-2xl sm:w-1/2 md:w-1/2">
      <Image src="/hero.jpg"
        alt="Web Developer"
        width={500}  
        height={300} 
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </motion.div>
  </section>
  )
}
