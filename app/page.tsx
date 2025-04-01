// Code: portfolio/app/page.tsx
import Portfolio from "@/components/Portfolio/Portfolio";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header2/Header2";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Header/>       
      <Hero/>
      <Portfolio/> 
      <About/>
      <Stack />
      <Contact /> 
      <Footer />
      {/* <Header2 /> */}
    </div>
  );
}
