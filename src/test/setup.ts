import '@testing-library/jest-dom'

// Mock Leaflet since it requires a browser environment
const mockMap = {
  setView: vi.fn().mockReturnThis(),
  remove: vi.fn(),
  removeControl: vi.fn(),
  zoomControl: {}
}

const mockTileLayer = {
  addTo: vi.fn()
}

const mockMarker = {
  addTo: vi.fn().mockReturnThis(),
  on: vi.fn()
}

global.L = {
  map: vi.fn(() => mockMap),
  tileLayer: vi.fn(() => mockTileLayer),
  marker: vi.fn(() => mockMarker),
  Icon: {
    Default: {
      prototype: {},
      mergeOptions: vi.fn()
    }
  }
} as any

// Mock window.open
global.open = vi.fn()

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn((cb) => {
  setTimeout(cb, 0)
  return 0
})

// Mock window.addEventListener
Object.defineProperty(window, 'addEventListener', {
  writable: true,
  value: vi.fn()
})

Object.defineProperty(window, 'removeEventListener', {
  writable: true,
  value: vi.fn()
})

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = vi.fn(() => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  toJSON: vi.fn()
}))

// Mock innerHeight and innerWidth
Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 1024
})

Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1280
})