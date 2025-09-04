import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ParallaxSection } from '../components/ParallaxSection'

describe('ParallaxSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders section with correct styling and children', () => {
    const testContent = <div data-testid="test-content">Test Content</div>
    
    render(<ParallaxSection>{testContent}</ParallaxSection>)
    
    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative', 'py-24')
    
    const content = screen.getByTestId('test-content')
    expect(content).toBeInTheDocument()
  })

  it('attaches scroll event listener on mount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    
    render(<ParallaxSection><div>Content</div></ParallaxSection>)
    
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { passive: true }
    )
  })

  it('removes scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    
    const { unmount } = render(<ParallaxSection><div>Content</div></ParallaxSection>)
    
    unmount()
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
  })

  it('creates section element with ref for DOM manipulation', () => {
    const { container } = render(<ParallaxSection><div>Content</div></ParallaxSection>)
    
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative', 'py-24')
  })

  it('handles component with multiple children', () => {
    const children = (
      <>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <span data-testid="child-3">Child 3</span>
      </>
    )
    
    render(<ParallaxSection>{children}</ParallaxSection>)
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument()
    expect(screen.getByTestId('child-2')).toBeInTheDocument()
    expect(screen.getByTestId('child-3')).toBeInTheDocument()
  })

  it('applies correct CSS classes for positioning', () => {
    render(<ParallaxSection><div>Content</div></ParallaxSection>)
    
    const section = document.querySelector('section')
    expect(section).toHaveClass('relative')
    expect(section).toHaveClass('py-24')
  })

  it('renders children within section element', () => {
    const testChild = <p data-testid="paragraph">Test paragraph</p>
    
    render(<ParallaxSection>{testChild}</ParallaxSection>)
    
    const section = document.querySelector('section')
    const paragraph = screen.getByTestId('paragraph')
    
    expect(section?.contains(paragraph)).toBe(true)
  })

  it('creates DOM structure for scroll-based interactions', () => {
    render(<ParallaxSection><div>Scroll content</div></ParallaxSection>)
    
    // The component creates a section that can be referenced for scroll calculations
    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    
    // Should have relative positioning for CSS property manipulation
    expect(section).toHaveClass('relative')
  })
})