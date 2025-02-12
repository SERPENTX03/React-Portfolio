import About from "@/components/About";
import Navbar from "@/components/Navbar";
import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import Hero from '@/components/hero/Hero'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
