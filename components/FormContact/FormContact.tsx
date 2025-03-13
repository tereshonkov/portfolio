"use client";
import { useState } from "react";

interface ContactProps {
    name: string; 
    email: string;
    message: string;
  }

export default function FormContact() {
    const [inputValue, setInputValue] = useState<ContactProps>({
        name: "",
        email: "",
        message: "",
      });
      const [arr, setArr] = useState<Array<ContactProps>>([]);
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setArr([...arr, inputValue]);
        setInputValue({name: "", email: "", message: ""});
      }
      console.log(arr);
  return (
    <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col gap-5 w-full p-1 sm:p-5 md:w-[60%] lg:w-[60%]" action="#">
    <input
     className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500 text-center" 
     type="text" 
     placeholder="Name" 
     value={inputValue.name}
     onChange={(e) => setInputValue({...inputValue, name: e.target.value})}
     />
    <input 
    className="outline-none p-3 rounded-2xl border-2 border-gray-500 focus:border-violet-500 text-center" 
    type="email" 
    placeholder="Email" 
    value={inputValue.email}
    onChange={(e) => setInputValue({...inputValue, email: e.target.value})}
    />
    <textarea className="p-3 rounded-2xl border-2 border-gray-500 outline-none focus:border-violet-500 text-center" 
    placeholder="Message"
    value={inputValue.message}
    onChange={(e) => setInputValue({...inputValue, message: e.target.value})}>
    </textarea>
    <button className="p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer self-center">Send</button>
  </form>
  )
}
