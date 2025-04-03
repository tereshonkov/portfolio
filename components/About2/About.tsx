

export default function About() {
  return (
    <div id="about" className="flex flex-col gap-5 md:flex-row sm:p-8 space-x-5 justify-center items-center w-screen md:min-h-[100vh]  p-3">
        <div className="flex flex-col gap-5 lg:justify-between w-full lg:min-h-[400px] md:min-h-[500px] md:justify-around ">
            <h2 className="lg:text-4xl xl:text-5xl xl:w-[80%] md:text-left md:text-3xl text-2xl text-center ">When you choose to work with me, you can expect:</h2>
            <div className="flex flex-col gap-2 ">
            <p className="lg:text-xl text-l text-center md:text-left">A fully responsive web page that looks great on all devices.</p>
            <p className="lg:text-xl text-l text-center md:text-left">The implementation of cutting-edge technologies and best development practices.</p>
            <p className="lg:text-xl text-l text-center md:text-left">Optimized application performance for fast loading times.</p>
            <p className="lg:text-xl text-l text-center md:text-left">Comprehensive support during all development stages, and continued assistance even after project  completion</p>
            </div>
        </div>
        <div className="bg-black w-[70%] h-[1px] md:w-[1px] xl:min-h-[800px] lg:min-h-[700px] md:min-h-[500px] "></div>
        <div className="sm:flex flex-col gap-5 justify-between w-full md:h-1/2 hidden md:min-h-[500px] md:justify-around ">
            <h2 className="lg:text-4xl md:text-3xl xl:text-5xl text-2xl text-center md:text-left ">I am an experienced web developer specializing in creating modern and efficient web applications.</h2>
            <p className="lg:text-xl text-l text-center md:text-left ">I have a deep understanding of web development and utilize best practices to create high-quality products. I understand the importance of responsive design and performance optimization, so my websites look great on all devices and load quickly.</p>
            <p className="lg:text-xl text-l text-center md:text-left ">I am always striving to continuously develop and learn new technologies to provide my clients with the most up-to-date solutions. I am ready to help you bring your ideas to life and create a web application that meets your needs.</p>
        </div>
    </div>
  )
}
