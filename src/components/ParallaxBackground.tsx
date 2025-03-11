import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import penImg from '../assets/pen.jpeg'

export function ParallaxBackground() {
  return (
    <Parallax 
      className="absolute inset-0" 
      speed={-50}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${penImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.2)' 
        }}
      />
      <div className="absolute inset-0 bg-white/40" />
    </Parallax>
  )
} 