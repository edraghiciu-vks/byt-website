import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export function ParallaxBackground() {
  return (
    <Parallax 
      className="absolute inset-0" 
      speed={-50}
    >
      <div 
        className="absolute inset-0 w-full h-full bg-[url('/pen.jpeg')] bg-cover bg-center"
        style={{ transform: 'scale(1.2)' }}
      />
      <div className="absolute inset-0 bg-white/40" />
    </Parallax>
  )
} 