"use client";
import { useState } from "react";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  img1: string;
  alt: string;
  img2?: string;
  alt2?: string;
  description: string;
  link: string;
}

const portfolio: PortfolioItem[] = [
  {
    id: 1,
    img1: "/scrin1-front.png",
    alt: "desktop view",
    img2: "/scrin2-left.png",
    alt2: "mobile view",
    description:
      "In this project, the design was created, and the application was developed using React. The global state was managed with Redux Toolkit. Additionally, a Node.js + Express + MongoDB backend was implemented.",
    link: "https://t-mebel.com.ua/",
  },
  {
    id: 2,
    img1: "/scrin2-front.png",
    alt: "desktop view",
    img2: "/scrin2-2-left.png",
    alt2: "mobile view",
    description:
      "In this project, an exact replica of the Figma design was recreated using HTML and SCSS. The best practices, including mixins, modularity, and variables, were applied to ensure clean and maintainable code.",
    link: "https://tereshonkov.github.io/step-scss-reload/",
  },
  {
    id: 3,
    img1: "/html-front.png",
    alt: "HTML layout",
    description:
      "In this project, the best practices were applied for standard desktop version layout. The layout was created using HTML and CSS, ensuring a clean and maintainable code structure. The design was implemented with pixel-perfect accuracy, closely following the provided Figma design.",
    link: "https://tereshonkov.github.io/step-css/",
  },
  {
    id: 4,
    img1: "/js-front.png",
    alt: "JavaScript project",
    description:
      "In this project, the best practices of vanilla JavaScript were applied. The implementation showcases how cards can be displayed and filtered based on various props, demonstrating flexibility and efficiency in handling data without relying on external libraries.",
    link: "https://tereshonkov.github.io/step-js/",
  },
];

export default function Portfolio() {
  const [visible, setVisible] = useState<number>(2);

  const editPortfolio: PortfolioItem[] = portfolio.slice(0, visible);
  const handleLoadMore: () => void = () => {
    setVisible((prev: number) => prev + 2);
  }
  return (
    <div id="portfolio" className="flex flex-col justify-around w-screen p-[3%] min-h-[100vh]">
      <div className="flex flex-wrap gap-5 justify-center">
        {editPortfolio.map((item) => (
          <div
            key={item.id}
            className="w-[650px] shadow-lg p-5 flex flex-col gap-3 items-center justify-center bg-white rounded-lg"
          >
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <Image width={450} height={200} src={item.img1} alt={item.alt} />
              {item.img2 && (
                <Image width={130} height={200} src={item.img2} alt={item.alt2 as string} />
              )}
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-700">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-2xl bg-black text-white w-[150px] h-[40px] flex justify-center items-center cursor-pointer hover:bg-gray-800 transition"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
      {visible < portfolio.length && (<div className="self-center">
        <button onClick={handleLoadMore} className="bg-[url('/more-v.png')] bg-cover w-[80px] h-[50px] mt-5 cursor-pointer "></button>
        <p>Load More...</p>
      </div>)}
    </div>
  );
}
