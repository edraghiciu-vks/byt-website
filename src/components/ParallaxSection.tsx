import React, { useEffect, useRef } from 'react';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const parallaxSpeed = 0.4; // Adjust this value to control parallax intensity

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const offset = scrollPercentage * parallaxSpeed * 100;
      
      section.style.setProperty('--scroll-offset', `${offset}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax(); // Initial update

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24">
      {children}
    </section>
  );
} 