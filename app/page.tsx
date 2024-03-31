"use client"
import "@/app/styles/main.scss"
import Projects from "@/app/components/Projects";
import Navbar from "@/app/components/Navbar";
import Aboutme from "@/app/components/Aboutme";
import Home from "@/app/components/Home";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
      <>
          <Navbar />
          <Home />
          <Aboutme />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </>
  );
}
