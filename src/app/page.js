"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";
import Header from "./components/header";
import About from "./components/About";
// import { TimelineDemo } from "./components/Timeline";
import Track from "./components/Track";
import Rules from "./components/Rules";
// import Versions from "./components/Versions";
import Sponsor from "./components/Sponsor";
import Pateron from "./components/Pateron";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Convenor from './components/Convenor';
import Prizes from './components/Prizes';
import Coordinator from './components/Coordinator';
import Communit from './components/Communit';
import Chief from './components/Chief';
import Supported from './components/Supported';
import { EmberParticles } from './components/EmberParticles';

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <div className="relative bg-[rgb(236,236,221)] z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/bg2.jpg')] before:bg-no-repeat before:bg-center before:-z-10 before:bg-cover before:bg-fixed before:brightness-[30%] ">
        <div className="fixed inset-0 z-0">
          <EmberParticles containerId="ember-container" />
        </div>
        {/* <h1>{isClient ? 'This is never prerendered' : 'Prerende red'}</h1> */}
        <Header />
        <About />
        <Track />
        <Rules />
        {/* <Versions/> */}
        <Prizes />
        <Sponsor />
        <Chief />
        <Pateron />
        <Convenor />
        <Coordinator />
        <Supported />
        <Team />
        <Communit />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
