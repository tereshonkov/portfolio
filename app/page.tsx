export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <header className="p-6 flex items-center justify-between">
      <p className="text-gray-500 text-2xl cursor-pointer hover:text-violet-500">DMITRO - Logo</p>
          <ul className="flex items-center justify-center gap-5">
            <li className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Home</li>
            <li className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Portfolio</li>
            <li className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">About Me</li>
            <li className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Contacts</li>
          </ul>
      </header>
      <section className="hero flex">
        <div className="w-[50vw] h-[85vh]">Text & Button</div>
        <div className="w-[50vw] h-[85vh]">IMG-Photo</div>
      </section>
    </div>
  );
}
