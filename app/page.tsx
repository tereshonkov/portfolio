// Code: portfolio/app/page.tsx
import Portfolio from "@/components/Portfolio/Portfolio";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header2/Header2";
import About2 from "@/components/About2/About";
import Portfolio2 from "@/components/Portfolio2/Portfolio";
import Stack2 from "@/components/Stack2";

export default function Home() {
  return (
    <div className="w-full m-0 overflow-x-hidden">
      <Header2 />
      <About2 />
      <Portfolio2 />
      <Stack2 />
      <Contact />
      <Footer/>
    </div>
  );
}
