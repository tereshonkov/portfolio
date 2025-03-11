// Code: Portfolio - Portfolio Section
"use client";
import { useState } from "react";
import Btn from "../Btn/Btn";
import Modal from "../Modal/Modal";
// import Image from "next/image";

interface Arr {
  title: string;
  description: string;
  image: string;
  id: number;
}

const arrayItems : Arr[] = [
  {
    title: "Dekstop version HTML/CSS",
    description: "This is a pet project for desktop versions, written in basic HTML5 and CSS. The project does not include responsiveness or JavaScript—it is presented as an understanding of the fundamentals of page layout.",
    image: "/portfolio1.png",
    id: 1,
  },
  {
    title: "React comercial project",
    description: "This is a commercial project built with React, leveraging React Router for seamless navigation and SCSS for a sleek, modern design. The application delivers a dynamic and engaging user experience, combining efficiency with stylish aesthetics.",
    image: "/portfolio2.png",
    id: 2,
  },
  {
    title: "Vanilla JavaScript project decstop-version",
    description: "A sleek desktop pet project built with pure vanilla JavaScript, featuring dynamic card filtering and content updates. The project offers an intuitive, smooth user experience with real-time content changes",
    image: "/portfolio3.png",
    id: 3,
  },
  {
    title: "Responsive project SCSS/HTML",
    description: "A responsive project built with SCSS, HTML, and modular design principles. Developed from Figma designs to ensure pixel-perfect accuracy. Utilized NPM packages for efficient development and smooth user experience across all devices",
    image: "/portfolio4.png",
    id: 4,
  },
];


export default function Portfolio() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idEl, setIdEL] = useState<number>(0);
  const openModal = (id: number): void => {
    setShowModal(true);
    setIdEL(id); 
  }
  const closeModal = (): void => {
    setShowModal(false);  
  }
  return (
    <section id="portfolio" className="flex flex-col gap-10 mt-15 mb-15 p-20">
    <div className="flex gap-8 flex-wrap justify-center">
      {arrayItems.map((el) => (
              <div key={el.id} className="w-[40%] h-[600px] shadow-2xl shadow-violet-500/50 flex flex-col justify-around items-center ">
                <h2 className="text-gray-500 text-2xl">{el.title}</h2>
              {/* <Image src={el.image} width={500} height={500} alt={el.title}/> */}
              <Btn text="See Details" onCLick={() => {openModal(el.id)}}/>
              </div>
      ))}
      {showModal && <Modal array={arrayItems} id={idEl} closeModal={closeModal}/>}
      </div>
  </section>
  )
}
