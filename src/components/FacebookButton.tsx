import React from 'react'

export function FacebookButton() {
  return (
    <div className="sticky bottom-6 left-0 z-50 w-fit pl-6">
      <a 
        href="https://www.facebook.com/InterBit"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-[15px] bg-white p-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="#1877F2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"/>
        </svg>
        <span className="text-[18px] text-[rgb(71,138,201)] font-medium">Follow us on Facebook</span>
      </a>
    </div>
  )
} 