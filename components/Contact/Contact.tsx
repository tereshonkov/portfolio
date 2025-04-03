// Code: Contact component


export default function Contact() {

  
  return (
    <section id="contacts" className=" flex flex-col gap-5 p-2 items-center justify-center  shadow-violet-500 bg-[url('/bg-portfolio.jpg')] bg-cover">
    <h2 className="text-black text-3xl md:text-4xl">Send a Message</h2>
    <div className="flex gap-10 p-5">
      <a  style={{ backgroundImage: "url('/telegram.png')" }} className="bg-cover w-[50px] h-[50px]" target="_blank" href="https://t.me/dmitro90"></a>
      <a style={{ backgroundImage: "url('/linkedin.png')" }} className="bg-cover w-[50px] h-[50px]" target="_blank" href="https://www.linkedin.com/in/dmitro-tereshonkov/"></a>
      <a style={{ backgroundImage: "url('/github.png')" }} className="bg-cover w-[50px] h-[50px]" target="_blank" href="https://github.com/tereshonkov"></a>
    </div>
  </section>
  )
}
