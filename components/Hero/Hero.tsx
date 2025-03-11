import Image from "next/image"
import Btn from "../Btn/Btn"

export default function Hero() {
  return (
    <section id="hero" className="flex h-[85vh]">
    <div className="w-[50vw] flex flex-col justify-center gap-10 shadow-2xl pl-10">
      <h1 className="text-gray-500 text-4xl">Crafting Modern & Responsive Web Experiences</h1>
      <p className="text-gray-500 text-2xl">I'm a Frontend Developer specializing in building fast, interactive, and user-friendly web applications with JavaScript, React, Next.js, and modern UI frameworks.</p>
      <div className="flex gap-10">
        <Btn text="View Portfolio" link="#portfolio"/>
        <Btn text="Hire Me" link="#contacts"/>
      </div>
    </div>
    <div className="w-[50vw] shadow-2xl">
      <Image src="/hero.jpg"
        alt="Web Developer"
        width={500}  
        height={300} 
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  </section>
  )
}
