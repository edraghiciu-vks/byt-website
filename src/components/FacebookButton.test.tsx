import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FacebookButton } from '../components/FacebookButton'

describe('FacebookButton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders Facebook button with correct structure', () => {
    render(<FacebookButton />)
    
    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', 'https://www.facebook.com/InterBit')
    expect(button).toHaveAttribute('target', '_blank')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct CSS classes for positioning and styling', () => {
    render(<FacebookButton />)
    
    const container = document.querySelector('.sticky.bottom-6.left-0.z-50')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('w-fit', 'pl-6')
    
    const button = screen.getByRole('link')
    expect(button).toHaveClass(
      'flex', 'items-center', 'gap-[15px]', 'bg-white', 'p-3', 
      'rounded-lg', 'shadow-xl', 'hover:shadow-2xl', 'transition-shadow', 
      'duration-300', 'border', 'border-gray-100'
    )
  })

  it('renders Facebook icon SVG with correct attributes', () => {
    render(<FacebookButton />)
    
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('width', '50')
    expect(svg).toHaveAttribute('height', '50')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveAttribute('fill', '#1877F2')
    
    const path = svg?.querySelector('path')
    expect(path).toBeInTheDocument()
  })

  it('renders correct button text', () => {
    render(<FacebookButton />)
    
    const text = screen.getByText('Follow us on Facebook')
    expect(text).toBeInTheDocument()
    expect(text).toHaveClass('text-[18px]', 'text-[rgb(71,138,201)]', 'font-medium')
  })

  it('creates a sticky positioned element that affects DOM layout', () => {
    render(<FacebookButton />)
    
    const stickyContainer = document.querySelector('.sticky')
    expect(stickyContainer).toBeInTheDocument()
    
    // Verify positioning classes that affect DOM layout
    expect(stickyContainer).toHaveClass('bottom-6', 'left-0', 'z-50')
  })

  it('has proper accessibility attributes for external link', () => {
    render(<FacebookButton />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveAttribute('target', '_blank')
    
    // Link should be accessible
    expect(link).toBeVisible()
  })

  it('renders with hover interaction classes', () => {
    render(<FacebookButton />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('hover:shadow-2xl')
    expect(link).toHaveClass('transition-shadow')
    expect(link).toHaveClass('duration-300')
  })

  it('creates fixed layout structure that affects page flow', () => {
    render(<FacebookButton />)
    
    // The sticky positioning affects document flow
    const container = document.querySelector('.sticky')
    expect(container).toBeInTheDocument()
    
    // Should have z-index for layering
    expect(container).toHaveClass('z-50')
    
    // Should have proper spacing
    expect(container).toHaveClass('pl-6')
  })
})