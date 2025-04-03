import Image from "next/image";

export default function Header2() {
  return (
    <header id="home" className="w-screen lg:h-[100vh] bg-[url('/bg-hero.jpg')] bg-cover flex flex-col" >
      <div className="flex p-[3%] justify-between items-center">
        <nav className="sm:ml-[20%] sm:flex sm:gap-[30px] hidden">
          <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#about">About</a>
          <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#portfolio">Portfolio</a>
          <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#stack">Skils</a>
          <a className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-black after:transition-transform hover:after:scale-100 after:duration-300" href="#contacts">Contact</a>
        </nav>
        <div className="sm:flex gap-[15.33] hidden">
          <a target="_blank" href="https://t.me/dmitro90" className="bg-[url('/telegra.png')] block bg-cover w-[33px] h-[33px]"></a>
          <a target="_blank" href="https://www.linkedin.com/in/dmitro-tereshonkov/" className="bg-[url('/githu.png')] block bg-cover w-[33px] h-[33px]"></a>
          <a target="_blank" href="https://github.com/tereshonkov" className="bg-[url('/linked.png')] block bg-cover w-[33px] h-[33px]"></a>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-around sm:items-center p-10 grow-1">
        <div
          className="flex flex-col gap-[30px] sm:w-[360px] lg:w-[460px]">
          <h1
            className="text-2xl text-center sm:text-left md:text-3xl lg:text-6xl">Personalized web solutions for your business</h1>
          <p className="sm:text-xl text-center sm:text-left">Personalized web solutions for your business involve creating unique websites and web applications that perfectly align with your business needs and goals. We take into account your individual requirements and provide solutions that will help you achieve success in the online space.</p>
          <div className="flex gap-[30px] w-full justify-center md:justify-start">
            <a href="#portfolio" className="bg-black rounded-2xl p-2 w-[150px] h-[40px] text-white flex items-center justify-center cursor-pointer">Portfolio</a>
            <a href="/frontend-cv.pdf" download="cv-fe.pdf" className="bg-black rounded-2xl p-2 w-[150px] h-[40px] text-white flex items-center justify-center cursor-pointer">CV <Image className="h-[30px] w-[30px]" width={100} height={100} alt="download" src="/arcticons.png" /></a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/selfiNew.jpg" alt="hero" width={500} height={500} className="xl:w-[500px] xl:h-[500px] rounded-full w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px]" />
        </div>
      </div>
    </header>
  )
}
