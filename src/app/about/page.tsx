"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About isAbout={true} />
      <Footer />
    </div>
  );
};

export default AboutPage;
