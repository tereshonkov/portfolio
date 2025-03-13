

export default function Stack() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-10 p-2">
    <div style={{backgroundImage: "url('/html.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/css.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/javascript.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/react.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
    <div style={{backgroundImage: "url('/nextjs.png')"}} className="bg-cover w-[50px] h-[50px] object-fill lg:w-[60px] lg:h-[60px]"></div>
  </section>
  )
}
