// Code: Button component
"use client";

interface BtnProps {
  text: string;
  link?: string;
  onCLick?: () => void;
}

export default function Btn({text, link, onCLick}: BtnProps) {
    return (
        <>
            <a onClick={onCLick} href={link} className="flex justify-center items-center p-2 rounded-2xl bg-violet-500 text-white w-[150px] hover:shadow-xl hover:bg-violet-400 cursor-pointer">{text}</a>
        </>
    )
}
