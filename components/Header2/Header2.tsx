import Image from "next/image"

export default function Header2() {
  return (
    <header className="w-[100vw] h-[100vh] bg-[url('/bg-hero.jpg')] bg-cover flex flex-col" >
        <div className="flex p-[3%] justify-between items-center">
        <nav className="ml-[20%] flex gap-[30px]">
            <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#about">About</a>
            <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#portfolio">Portfolio</a>
            <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#skils">Skils</a>
            <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#contacts">Contact</a>
        </nav>
        <div className="flex gap-[15.33]">
            <a target="_blank" href="https://t.me/dmitro90" className="bg-[url('/telegra.png')] block bg-cover w-[33px] h-[33a"></a>
            <a target="_blank" href="https://www.linkedin.com/in/dmitro-tereshonkov/" className="bg-[url('/githu.png')] block bg-cover w-[33px] h-[33px]"></a>
            <a target="_blank" href="https://github.com/tereshonkov" className="bg-[url('/linked.png')] block bg-cover w-[33px] h-[33px]"></a>
        </div>
        </div>
        <div className="flex items-center gap-[20%]">
          <div className="flex flex-col gap-[30px] ml-[20%] mt-[10%] w-[460px]">
            <h1 className="text-6xl">Personalized web solutions for your business</h1>
            <p className="text-xl">Personalized web solutions for your business involve creating unique websites and web applications that perfectly align with your business's needs and goals. We take into account your individual requirements and provide solutions that will help you achieve success in the online space.</p>
            <div className="flex gap-[30px]">
              <button className="bg-black rounded-2xl p-2 w-[150px] text-white flex items-center justify-center cursor-pointer">Portfolio</button>
              <button className="bg-black rounded-2xl p-2 w-[150px] text-white flex items-center justify-center cursor-pointer">CV <img src="/arcticons.png"/></button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[10%]">
            <Image src="/selfiNew.jpg" alt="hero" width={500} height={500} className="w-[500px] h-[500px] rounded-full"/>
          </div>
        </div>
    </header>
  )
}
