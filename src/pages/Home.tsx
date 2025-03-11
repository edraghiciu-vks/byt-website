import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import { FacebookButton } from '../components/FacebookButton'
import { Services } from '../components/Services'
import { HeroSection } from '../components/HeroSection'
import { ParallaxBackground } from '../components/ParallaxBackground'

function Home() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <section className="relative py-24 overflow-hidden">
            <ParallaxBackground />
            <Services />
          </section>
          <FacebookButton />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default Home;
