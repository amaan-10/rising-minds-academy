"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Faculty />
      <Footer />
    </div>
  );
}
