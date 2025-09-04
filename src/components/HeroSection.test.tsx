import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '../components/HeroSection'

describe('HeroSection', () => {
  it('renders hero section with correct structure', () => {
    render(<HeroSection />)
    
    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('container', 'mx-auto', 'px-4', 'py-12', 'text-left')
  })

  it('renders main heading with animation classes', () => {
    render(<HeroSection />)
    
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
    expect(mainHeading).toHaveTextContent('InterBit Accounting')
    expect(mainHeading).toHaveClass(
      'text-[60px]', 'font-bold', 'text-gray-900', 'mb-4', 
      'opacity-0', 'animate-[slide-in_1s_ease-in-out_forwards]'
    )
  })

  it('renders secondary heading', () => {
    render(<HeroSection />)
    
    const secondaryHeading = screen.getByRole('heading', { level: 2 })
    expect(secondaryHeading).toBeInTheDocument()
    expect(secondaryHeading).toHaveTextContent('Expertiza Financiar-Contabila')
    expect(secondaryHeading).toHaveClass('text-[30px]', 'font-semibold', 'text-gray-700', 'mb-6')
  })

  it('renders description paragraphs with correct styling', () => {
    render(<HeroSection />)
    
    const contentDiv = document.querySelector('.max-w-3xl.space-y-4.text-gray-600')
    expect(contentDiv).toBeInTheDocument()
    
    // Get only the paragraphs, not other elements
    const paragraphs = contentDiv?.querySelectorAll('p')
    expect(paragraphs).toHaveLength(2)
    
    paragraphs?.forEach(paragraph => {
      expect(paragraph).toHaveClass('text-[18px]')
    })
  })

  it('includes specific business content', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/servicii de contabilitate și consultanță financiară/)).toBeInTheDocument()
    expect(screen.getByText(/înregistrată în tabloul CECCAR/)).toBeInTheDocument()
    expect(screen.getByText(/optimizarea taxelor și respectă toate obligațiile fiscale/)).toBeInTheDocument()
    expect(screen.getByText(/experiență, atenție la detalii și onestitate/)).toBeInTheDocument()
  })

  it('applies CSS animation that affects DOM rendering', () => {
    render(<HeroSection />)
    
    const animatedHeading = screen.getByRole('heading', { level: 1 })
    
    // The heading starts with opacity-0 and animates in
    expect(animatedHeading).toHaveClass('opacity-0')
    expect(animatedHeading).toHaveClass('animate-[slide-in_1s_ease-in-out_forwards]')
    
    // This animation will affect how the element is displayed in the DOM
  })

  it('uses responsive container classes that affect layout', () => {
    render(<HeroSection />)
    
    const section = document.querySelector('section')
    expect(section).toHaveClass('container', 'mx-auto')
    
    // These classes control how the content flows in the document
    expect(section).toHaveClass('px-4', 'py-12')
  })

  it('structures content with proper spacing classes', () => {
    render(<HeroSection />)
    
    const contentContainer = document.querySelector('.max-w-3xl')
    expect(contentContainer).toHaveClass('space-y-4')
    
    // This affects the vertical spacing between child elements
    const mainHeading = screen.getByRole('heading', { level: 1 })
    const secondaryHeading = screen.getByRole('heading', { level: 2 })
    
    expect(mainHeading).toHaveClass('mb-4')
    expect(secondaryHeading).toHaveClass('mb-6')
  })
})