"use client";
import { useState } from "react";
interface ContactProps {
  name: string; 
  email: string;
  message: string;
}

export default function Contact() {
  const [inputValue, setInputValue] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });
  const [arr, setArr] = useState<Array<ContactProps>>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArr([...arr, inputValue]);
  }
  console.log(inputValue);
  
  return (
    <section id="contacts" className="flex flex-col gap-5 mt-15 mb-15 p-20 items-center shadow-2xl shadow-violet-500">
    <h2 className="text-gray-500 text-4xl">Send a Message</h2>
    <div className="flex gap-10 p-20">
      <a  style={{ backgroundImage: "url('/telegram.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
      <a style={{ backgroundImage: "url('/linkedin.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
      <a style={{ backgroundImage: "url('/github.png')" }} className="bg-cover w-[50px] h-[50px]" href=""></a>
    </div>
    <p className="text-gray-500 text-2xl">Let’s bring your web app or landing page to life! Get in touch with me today!</p>
    <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col gap-5 w-[50%] p-10" action="#">
      <input
       className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500" 
       type="text" 
       placeholder="Name" 
       value={inputValue.name}
       onChange={(e) => setInputValue({...inputValue, name: e.target.value})}
       />
      <input 
      className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500" 
      type="email" 
      placeholder="Email" 
      value={inputValue.email}
      onChange={(e) => setInputValue({...inputValue, email: e.target.value})}
      />
      <textarea className="p-3 rounded-2xl border-2 border-gray-500 outline-none focus:border-violet-500" 
      placeholder="Message"
      value={inputValue.message}
      onChange={(e) => setInputValue({...inputValue, message: e.target.value})}>
      </textarea>
      <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-center">Send</button>
    </form>
  </section>
  )
}
