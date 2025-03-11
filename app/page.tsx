// Code: portfolio/app/page.tsx
import Portfolio from "@/components/Portfolio/Portfolio";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Header/>
      <Hero/>
      <Portfolio/> //User can see the projects and functionality
      <About/>
      <Stack />
      <Contact /> //User can send a message
      <Footer />
    </div>
  );
}
