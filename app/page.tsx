"use client"
import Projects from "@/app/components/Projects";
import Navbar from "@/app/components/Navbar";
import Aboutme from "@/app/components/Aboutme";
import Timeline from "@/app/components/Timeline";
import Process from "@/app/components/Process";
import FAQ from "@/app/components/FAQ";
import Home from "@/app/components/Home";
import Counter from "@/app/components/Counter";
import AIEstimator from "@/app/components/AIEstimator";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import SocialSidebar from "@/app/components/SocialSidebar";
import CustomCursor from "@/app/components/CustomCursor";
import { useEffect } from "react";
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
            <CustomCursor />
            <SocialSidebar />
            <Navbar />
            <Home />
            <Counter />
            <Aboutme />
            <Timeline />
            <Process />
            <AIEstimator />
            <Skills />
            <Projects />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
}
