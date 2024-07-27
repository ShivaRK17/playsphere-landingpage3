import './App.css'
import Hero from './sections/Hero'
import WhoAreWe from './sections/WhoAreWe'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import PartnerWithUs from './sections/PartnerWithUs'
import Footer from './sections/Footer'
import News from './sections/NewsLetter'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { useEffect, useState } from 'react'

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);
  return (
    <>
       {init && <Particles options={particlesOptions} />}
      <Hero />
      <WhoAreWe />
      <Features />
      <HowItWorks />
      <PartnerWithUs />
      <News />
      <Footer />
    </>
  )
}

export default App
