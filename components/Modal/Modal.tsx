"use client";
import Image from "next/image";
interface Item {
    id: number;
    title: string;
    description: string;
    image?: string;
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
                <div className="border border-solid border-black md:w-[80vw] md:h-[80vh] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl flex justify-around items-center">
                    <div>
                        {/* <Image src={el.image} width={} height={}/> */}
                    </div>
                    <div className="flex flex-col gap-5 md:w-[50%] h-[90vh] justify-end md:justify-center p-2">
                        <button onClick={closeModal} className="absolute top-5 right-5 text-3xl text-gray-500 cursor-pointer">X</button>
                        <h1 className="text-gray-500 text-x md:text-4xl">{el.title}</h1>
                        <p className="text-gray-500 text-xs md:text-l">{el.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}
