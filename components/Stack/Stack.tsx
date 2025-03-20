"use client";
import { motion } from "framer-motion";

const initial = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6, // Сделает появление более плавным
      ease: "easeOut",
    },
  }),
  hidden: { opacity: 0, scale: 0.5, x: 100 },
};

export default function Stack() {
  return (
    <motion.section 
    initial="hidden"
    variants={initial}
    whileInView="visible"
    className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-10 p-2">
    <div style={{backgroundImage: "url('/html.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/css.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/javascript.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/react.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/nextjs.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
  </motion.section>
  )
}
