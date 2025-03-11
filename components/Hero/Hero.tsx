import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="flex h-[85vh]">
    <div className="w-[50vw] flex flex-col justify-center gap-10 shadow-2xl pl-10">
      <h1 className="text-gray-500 text-4xl">Crafting Modern & Responsive Web Experiences</h1>
      <p className="text-gray-500 text-2xl">I'm a Frontend Developer specializing in building fast, interactive, and user-friendly web applications with JavaScript, React, Next.js, and modern UI frameworks.</p>
      <div className="flex gap-10">
        <a href="#portfolio" className="flex justify-center items-center p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer">View Portfolio</a>
        <a href="#contacts" className="flex justify-center items-center p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer">Hire Me</a>
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
