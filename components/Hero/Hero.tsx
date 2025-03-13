import Image from "next/image"
import Btn from "../Btn/Btn"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse sm:flex-row lg:h-[80vh] md:p-2 lg:p-4 2xl:w-full 2xl:h-[70vh]">
    <div className="w-full flex flex-col justify-center gap-10 shadow-2xl p-2 sm:p-5 sm:w-1/2 md:w-1/2">
      <h1 className="text-gray-500 text-3xl text-center sm:text-start xl:text-5xl">Crafting Modern & Responsive Web Experiences</h1>
      <p className="text-gray-500 text-xl text-center sm:text-start md:text-2xl xl:text-3xl">I am a Frontend Developer specializing in building fast, interactive, and user-friendly web applications with JavaScript, React, Next.js, and modern UI frameworks.</p>
      <div className="flex justify-center gap-10 md:justify-start">
        <Btn text="View Portfolio" link="#portfolio"/>
        <Btn text="Hire Me" link="#contacts"/>
      </div>
    </div>
    <div className="w-full shadow-2xl sm:w-1/2 md:w-1/2">
      <Image src="/hero.jpg"
        alt="Web Developer"
        width={500}  
        height={300} 
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  </section>
  )
}
