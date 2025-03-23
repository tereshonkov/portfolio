// Code: Portfolio - Portfolio Section
"use client";
import { useState } from "react";
import Btn from "../Btn/Btn";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";
import Image from "next/image";

interface Arr {
  title: string;
  description: string;
  image: string;
  imageTwo?: string;
  url: string;
  id: number;
}

const arrayItems : Arr[] = [
  {
    title: "Dekstop version HTML/CSS",
    description: "This is a pet project for desktop versions, written in basic HTML5 and CSS. The project does not include responsiveness or JavaScript—it is presented as an understanding of the fundamentals of page layout.",
    image: "/html-front.png",
    url: "https://tereshonkov.github.io/step-css/",
    id: 1,
  },
  {
    title: "Responsive react project",
    description: "This is a commercial project built with React, leveraging React Router for seamless navigation and SCSS for a sleek, modern design. The application delivers a dynamic and engaging user experience, combining efficiency with stylish aesthetics.",
    image: "/scrin1-front.png",
    imageTwo: "/scrin2-left.png",
    url: "https://t-mebel.com.ua/",
    id: 2,
  },
  {
    title: "JavaScript project decstop-version",
    description: "A sleek desktop pet project built with pure vanilla JavaScript, featuring dynamic card filtering and content updates. The project offers an intuitive, smooth user experience with real-time content changes",
    image: "/js-front.png",
    url: "https://tereshonkov.github.io/tereshonkov.github.step-js/",
    id: 3,
  },
  {
    title: "Responsive project SCSS/HTML",
    description: "A responsive project built with SCSS, HTML, and modular design principles. Developed from Figma designs to ensure pixel-perfect accuracy. Utilized NPM packages for efficient development and smooth user experience across all devices",
    image: "/scrin2-front.png",
    imageTwo: "/scrin2-2-left.png",
    url: "https://tereshonkov.github.io/step-scss-reload/",
    id: 4,
  },
];

const initial = {
  visible: (i:number) => ({
    opacity: 1,
    x: 0,
    transition : {
      delay: i * 0.2,
      duration: 1,
      ease: "easeInOut"
    }
}),
hidden: { opacity: 0, x: 100 },
};


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
    <section id="portfolio" className="flex flex-col gap-1 mt-10 mb-2 p-[5%]">
    <div className="flex gap-4 flex-wrap justify-center">
      {arrayItems.map((el, i) => (
              <motion.div 
              variants={initial}
              initial="hidden"
              whileInView="visible"
              custom={i}
              key={el.id} className="w-[70%] h-[300px] shadow-2xl rounded-2xl shadow-violet-500/50 flex flex-col justify-around items-center sm:h-[400px] sm:w-[60%] md:w-[40%] lg:h-[500px]">
                <h2 className="text-gray-500 text-l text-center md:xl lg:text-2xl xl:text-3xl">{el.title}</h2>
              <Image src={el?.image} width={500} height={500} alt={el.title} style={{objectFit:"fill", width:"100%", height:"60%"}}/>
              <Btn text="See Details" onClick={() => {openModal(el.id)}}/>
              </motion.div>
      ))}
      {showModal && <Modal array={arrayItems} id={idEl} closeModal={closeModal}/>}
      </div>
  </section>
  )
}
