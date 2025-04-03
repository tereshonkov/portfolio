import Image from "next/image"

export default function index() {
    return (
        <div id="stack" className="w-screen h-[100vh] flex flex-col md:flex-row items-center justify-center p-8 gap-8 lg:gap-0">
            <div className="w-1/3 flex justify-center">
                <h2 className="text-black text-center md:text-left text-4xl lg:text-5xl">Bringing designs to life with HTML, SCSS, TypeScript & React/Next.js</h2>
            </div>
            <div className="w-1/3 flex justify-center items-center flex-col gap-8">
                <div className="flex justify-center gap-8 w-full">
                    <Image className="p-1" src={"/html.png"}  width={100} height={100} alt="stack"/>
                    <Image className="p-1" src={"/css.png"}  width={100} height={100} alt="stack"/>
                </div>
                <div className="flex justify-center gap-8 w-full">
                    <Image className="p-1" src={"/ts.png"} width={100} height={100} alt="stack"/>
                    <Image className="p-1" src={"/js.png"} width={100} height={100} alt="stack"/>
                </div>
                <div className="flex justify-center gap-8 w-full">
                    <Image className="p-1" src={"/react.png"} width={100} height={100} alt="stack"/>
                    <Image className="p-1" src={"/next.png"} width={100} height={100} alt="stack"/>
                </div>
            </div>
        </div>
    )
}
