import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { LocationMap } from '../components/LocationMap'

// Mock the leaflet CSS import
vi.mock('leaflet/dist/leaflet.css', () => ({}))

// Mock Leaflet completely
vi.mock('leaflet', () => ({
  default: {
    map: vi.fn(() => ({
      setView: vi.fn().mockReturnThis(),
      remove: vi.fn(),
      removeControl: vi.fn(),
      zoomControl: {}
    })),
    tileLayer: vi.fn(() => ({
      addTo: vi.fn()
    })),
    marker: vi.fn(() => ({
      addTo: vi.fn().mockReturnThis(),
      on: vi.fn()
    })),
    Icon: {
      Default: {
        prototype: {},
        mergeOptions: vi.fn()
      }
    }
  }
}))

describe('LocationMap', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders map container with correct DOM structure', () => {
    render(<LocationMap />)
    
    // Check for the main container
    const container = document.querySelector('.w-full.lg\\:w-1\\/2.relative')
    expect(container).toBeInTheDocument()
  })

  it('creates map element with correct id and classes', () => {
    render(<LocationMap />)
    
    // Check for the map element with id="map"
    const mapElement = document.getElementById('map')
    expect(mapElement).toBeInTheDocument()
    expect(mapElement).toHaveClass('w-full', 'h-[450px]', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'relative', 'z-0')
  })

  it('renders decorative yellow circle element', () => {
    render(<LocationMap />)
    
    // Check for the yellow decorative circle
    const yellowCircle = document.querySelector('.w-64.h-64.rounded-full.bg-yellow-400')
    expect(yellowCircle).toBeInTheDocument()
    expect(yellowCircle).toHaveClass('absolute', '-top-25', '-left-8', 'z-10', 'opacity-70')
  })

  it('creates proper layering with z-index classes', () => {
    render(<LocationMap />)
    
    const yellowCircle = document.querySelector('.bg-yellow-400')
    const mapElement = document.getElementById('map')
    
    expect(yellowCircle).toHaveClass('z-10')
    expect(mapElement).toHaveClass('z-0')
    
    // Yellow circle should be above the map
  })

  it('has responsive layout classes', () => {
    render(<LocationMap />)
    
    const container = document.querySelector('.w-full.lg\\:w-1\\/2')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('relative')
  })

  it('sets up DOM structure for map integration', () => {
    render(<LocationMap />)
    
    // The component should create the DOM structure needed for Leaflet
    const mapContainer = document.getElementById('map')
    expect(mapContainer).toBeInTheDocument()
    
    // Should have correct dimensions
    expect(mapContainer).toHaveClass('h-[450px]')
    expect(mapContainer).toHaveClass('w-full')
  })

  it('applies proper overflow and border radius for map display', () => {
    render(<LocationMap />)
    
    const mapElement = document.getElementById('map')
    expect(mapElement).toHaveClass('overflow-hidden')
    expect(mapElement).toHaveClass('rounded-lg')
    expect(mapElement).toHaveClass('shadow-lg')
  })

  it('creates positioned decorative element that affects layout', () => {
    render(<LocationMap />)
    
    const decorativeElement = document.querySelector('.absolute.-top-25.-left-8')
    expect(decorativeElement).toBeInTheDocument()
    expect(decorativeElement).toHaveClass('w-64', 'h-64', 'rounded-full')
  })
})