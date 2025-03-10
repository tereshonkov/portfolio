import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <header className="p-6 flex items-center justify-between">
        <p className="font-[--font-trade-winds]  text-gray-500 text-2xl cursor-pointer hover:text-violet-500">DMITRO - <span className="text-violet-500">Web development</span></p>
        <ul className="flex items-center justify-center gap-5">
          <a href="#home" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Home</a>
          <a href="#portfolio" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Portfolio</a>
          <a href="#about" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">About Me</a>
          <a href="#contacts" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Contacts</a>
        </ul>
      </header>
      <section className="hero flex h-[85vh]">
        <div className="w-[50vw] flex flex-col justify-center gap-10 shadow-2xl pl-10">
          <h1 className="text-gray-500 text-4xl">Crafting Modern & Responsive Web Experiences</h1>
          <p className="text-gray-500 text-2xl">I'm a Frontend Developer specializing in building fast, interactive, and user-friendly web applications with JavaScript, React, Next.js, and modern UI frameworks.</p>
          <div className="flex gap-10">
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer">View Portfolio</button>
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer">Hire Me</button>
          </div>
        </div>
        <div className="w-[50vw] shadow-2xl">
          <Image src="/hero.jpg"
            alt="Web Developer"
            width={500}  // Це можна змінити
            height={300} // Це можна змінити
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>
      <section id="portfolio" className="flex flex-col gap-10 mt-15 mb-15 p-20">
        {/* <h2 className="text-gray-500 text-4xl self-center">MY PORTFOLIO</h2> */}
        <div className="flex gap-30 flex-wrap justify-center">
          <div className="w-[40%] h-[600px] shadow-2xl shadow-violet-500/50 flex justify-center p-20">
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-end">See Details</button>
          </div>
          <div className="w-[40%] h-[600px] shadow-2xl shadow-violet-500/50 flex justify-center p-20">
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-end">See Details</button>
          </div>
          <div className="w-[40%] h-[600px] shadow-2xl shadow-violet-500/50 flex justify-center p-20">
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-end">See Details</button>
          </div>
          <div className="w-[40%] h-[600px] shadow-2xl shadow-violet-500/50 flex justify-center p-20">
            <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-end">See Details</button>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col gap-10 mt-15 mb-15 p-20 shadow-2xl">
        <h2 className="relative text-gray-500 text-4xl self-center after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-violet-500 after:scale-100">About Me</h2>
        <p className="text-gray-500 text-2xl">Hello! I'm a passionate Frontend Developer with a strong focus on building responsive and dynamic web applications. I have a solid foundation in HTML, CSS, and SCSS, and I enjoy crafting user-friendly interfaces with modern technologies like Tailwind CSS. I specialize in creating interactive and performant websites using JavaScript and React, and I'm always excited to dive deeper into the world of frontend development.</p>
        <p className="text-gray-500 text-2xl">I have commercial experience in building a React application that is currently being used by a company. This project allowed me to enhance my skills in real-world conditions and understand the importance of maintaining and optimizing software products in a business environment.</p>
        <p className="text-gray-500 text-2xl">Recently, I have also started exploring Node.js (basic knowledge) for backend development, and I am currently working with Next.js to build fast, SEO-friendly, and scalable web applications. My goal is to continue growing my skills in both frontend and backend development, creating seamless and high-quality user experiences.</p>
      </section>
      <section id="contacts" className="flex flex-col gap-10 mt-15 mb-15 p-20 items-center shadow-2xl shadow-violet-500">
        <div className="flex gap-10 p-20">
          <a  style={{ backgroundImage: "url('/telegram.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
          <a style={{ backgroundImage: "url('/linkedin.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
          <a style={{ backgroundImage: "url('/github.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
        </div>
        <form className="flex flex-col gap-5 w-[50%] p-10" action="#">
          <input className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500" type="text" placeholder="Name" />
          <input className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500" type="email" placeholder="Email" />
          <textarea className="p-3 rounded-2xl border-2 border-gray-500 outline-none focus:border-violet-500" placeholder="Message"></textarea>
          <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-center">Send</button>
        </form>
      </section>
    </div>
  );
}
