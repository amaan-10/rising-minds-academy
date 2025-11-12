import About from "@/components/About";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Faculty />
      <Footer />
    </main>
  );
}
