// Code: Header component

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
    <p className="font-[--font-trade-winds]  text-gray-500 text-2xl cursor-pointer hover:text-violet-500">DMITRO - <span className="text-violet-500">Web development</span></p>
    <ul className="flex items-center justify-center gap-5">
      <a href="#home" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Home</a>
      <a href="#portfolio" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Portfolio</a>
      <a href="#about" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">About Me</a>
      <a href="#contacts" className="relative text-gray-500 p-2 rounded-2xl cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-0 after:bg-violet-500 after:transition-transform hover:after:scale-100 after:duration-300">Contacts</a>
    </ul>
  </header>
  )
}
