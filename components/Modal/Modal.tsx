"use client";
import Image from "next/image";

interface Item {
    id: number;
    title: string;
    description: string;
    image: string;
    imageTwo?: string;
    url: string;
}

interface ModalProps {
    id: number;
    closeModal: () => void;
    array: Item[];
}

export default function Modal({ id, closeModal, array }: ModalProps) {
    return (
        <>
            {array.filter((item) => item.id === id).map((el) => (
                <div key={el.id} className="fixed top-0 left-0 w-full h-full bg-grray-500 bg-opacity-90 flex justify-center items-center">
                <div className="border border-solid border-black h-[50%] md:w-[80vw] md:h-[80vh] lg:h-[60vh] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl flex justify-around items-center ">
                    <div className="flex g-1 flex-col items-center md:flex-col lg:flex-row">
                        <Image src={el.image} width={300} height={300} alt="decstop"/>
                        {el.imageTwo && <Image src={el.imageTwo} width={100} height={100} alt="mobile"/>}
                    </div>
                    <div className="flex flex-col gap-5 w-[90vw] md:w-[50%] h-[30vh] justify-end md:justify-center p-2">
                        <button onClick={closeModal} className="absolute top-5 right-5 text-3xl text-gray-500 cursor-pointer">X</button>
                        <h1 className="text-gray-500 text-x md:text-4xl">{el.title}</h1>
                        <p className="text-gray-500 text-xs md:text-l">{el.description}</p>
                        <a href={el.url} className="text-gray-500 text-l md:text-l">{el.url}</a>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}
