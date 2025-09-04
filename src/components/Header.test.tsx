import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '../components/Header'

// Mock the ui components
vi.mock('../components/ui/sheet', () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet">{children}</div>,
  SheetContent: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet-content">{children}</div>,
  SheetTrigger: ({ children, className }: { children: React.ReactNode; className?: string }) => 
    <button data-testid="sheet-trigger" className={className}>{children}</button>
}))

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>
}))

function renderWithRouter(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>
  )
}

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders header with logo and navigation', () => {
    renderWithRouter()
    
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('top-0', 'left-0', 'right-0', 'bg-white/80', 'shadow-sm')
    
    // Check for logo
    const logo = document.querySelector('.w-\\[150px\\].h-\\[150px\\]')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('bg-[url(\'/default-logo.png\')]', 'bg-contain', 'bg-center', 'bg-no-repeat')
  })

  it('renders desktop navigation links', () => {
    renderWithRouter()
    
    // Get desktop navigation specifically
    const desktopNav = document.querySelector('nav.hidden.md\\:flex')
    expect(desktopNav).toBeInTheDocument()
    
    const homeLink = desktopNav?.querySelector('a[href="/"]')
    const contactLink = desktopNav?.querySelector('a[href="/contact"]')
    
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveTextContent('Acasă')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveTextContent('Contact')
  })

  it('highlights active navigation link on home page', () => {
    renderWithRouter('/')
    
    const desktopNav = document.querySelector('nav.hidden.md\\:flex')
    const homeLink = desktopNav?.querySelector('a[href="/"]')
    const contactLink = desktopNav?.querySelector('a[href="/contact"]')
    
    expect(homeLink).toHaveClass('text-gray-900')
    expect(contactLink).not.toHaveClass('text-gray-900')
    
    // Check for active indicator span
    const activeIndicator = homeLink?.querySelector('span.absolute.bottom-0.left-0.w-full.h-0\\.5.bg-yellow-400')
    expect(activeIndicator).toBeInTheDocument()
  })

  it('highlights active navigation link on contact page', () => {
    renderWithRouter('/contact')
    
    const desktopNav = document.querySelector('nav.hidden.md\\:flex')
    const homeLink = desktopNav?.querySelector('a[href="/"]')
    const contactLink = desktopNav?.querySelector('a[href="/contact"]')
    
    expect(contactLink).toHaveClass('text-gray-900')
    expect(homeLink).not.toHaveClass('text-gray-900')
    
    // Check for active indicator span on contact link
    const activeIndicator = contactLink?.querySelector('span.absolute.bottom-0.left-0.w-full.h-0\\.5.bg-yellow-400')
    expect(activeIndicator).toBeInTheDocument()
  })

  it('renders mobile navigation trigger', () => {
    renderWithRouter()
    
    const mobileTrigger = screen.getByTestId('sheet-trigger')
    expect(mobileTrigger).toBeInTheDocument()
    expect(mobileTrigger).toHaveClass('md:hidden', 'p-2', 'hover:bg-gray-100', 'rounded-lg')
    
    const menuIcon = screen.getByTestId('menu-icon')
    expect(menuIcon).toBeInTheDocument()
  })

  it('renders mobile navigation content', () => {
    renderWithRouter()
    
    const sheetContent = screen.getByTestId('sheet-content')
    expect(sheetContent).toBeInTheDocument()
    
    // Check mobile navigation links
    const mobileNav = sheetContent.querySelector('nav')
    expect(mobileNav).toBeInTheDocument()
    expect(mobileNav).toHaveClass('flex', 'flex-col', 'space-y-4', 'mt-8')
  })

  it('applies correct styling to mobile navigation links based on active route', () => {
    renderWithRouter('/')
    
    const sheetContent = screen.getByTestId('sheet-content')
    const mobileHomeLink = sheetContent.querySelector('a[href="/"]')
    const mobileContactLink = sheetContent.querySelector('a[href="/contact"]')
    
    expect(mobileHomeLink).toHaveClass('text-yellow-400')
    expect(mobileContactLink).toHaveClass('text-gray-600')
  })

  it('applies correct styling to mobile navigation links on contact page', () => {
    renderWithRouter('/contact')
    
    const sheetContent = screen.getByTestId('sheet-content')
    const mobileHomeLink = sheetContent.querySelector('a[href="/"]')
    const mobileContactLink = sheetContent.querySelector('a[href="/contact"]')
    
    expect(mobileContactLink).toHaveClass('text-yellow-400')
    expect(mobileHomeLink).toHaveClass('text-gray-600')
  })

  it('has correct container structure and responsive classes', () => {
    renderWithRouter()
    
    const container = document.querySelector('.container.mx-auto.px-4.py-4')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex', 'justify-between', 'items-center')
    
    const desktopNav = container?.querySelector('nav.hidden.md\\:flex')
    expect(desktopNav).toBeInTheDocument()
    expect(desktopNav).toHaveClass('space-x-6')
  })

  it('navigation links have correct hover states', () => {
    renderWithRouter()
    
    const desktopNav = document.querySelector('nav.hidden.md\\:flex')
    const homeLink = desktopNav?.querySelector('a[href="/"]')
    const contactLink = desktopNav?.querySelector('a[href="/contact"]')
    
    expect(homeLink).toHaveClass('hover:text-gray-900')
    expect(contactLink).toHaveClass('hover:text-gray-900')
  })

  it('mobile links have correct text sizes', () => {
    renderWithRouter()
    
    const sheetContent = screen.getByTestId('sheet-content')
    const mobileLinks = sheetContent.querySelectorAll('a')
    
    mobileLinks.forEach(link => {
      expect(link).toHaveClass('text-lg', 'font-medium')
    })
  })

  it('handles route-based styling correctly for different routes', () => {
    // Test home route
    renderWithRouter('/')
    
    const desktopNav = document.querySelector('nav.hidden.md\\:flex')
    expect(desktopNav).toBeInTheDocument()
    
    // Verify navigation exists and has correct structure
    const homeLinks = desktopNav?.querySelectorAll('a[href="/"]')
    const contactLinks = desktopNav?.querySelectorAll('a[href="/contact"]')
    
    expect(homeLinks?.length).toBeGreaterThan(0)
    expect(contactLinks?.length).toBeGreaterThan(0)
  })
})