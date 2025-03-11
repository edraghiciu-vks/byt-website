import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="top-0 left-0 right-0 bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/default-logo.png" alt="InterBit Accounting Logo" className="w-[150px] h-[150px] object-contain" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`text-gray-600 hover:text-gray-900 font-medium relative ${
              isActive('/') ? 'text-gray-900' : ''
            }`}
          >
            Acasă
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform translate-y-1" />
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`text-gray-600 hover:text-gray-900 font-medium relative ${
              isActive('/contact') ? 'text-gray-900' : ''
            }`}
          >
            Contact
            {isActive('/contact') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform translate-y-1" />
            )}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link 
                to="/" 
                className={`text-lg font-medium ${
                  isActive('/') ? 'text-yellow-400' : 'text-gray-600'
                }`}
              >
                Acasă
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg font-medium ${
                  isActive('/contact') ? 'text-yellow-400' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
