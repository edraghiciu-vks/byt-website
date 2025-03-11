import React from 'react'

export function ContactInfo() {
  return (
    <div className="w-full lg:w-1/2 p-8">
      <div className="text-left">
        <h2 className="text-[40px] font-bold mb-4">Contactează-ne</h2>
        <p className="text-[18px] text-gray-600 mb-8">
          Suntem aici pentru a vă oferi suport contabil de încredere!
        </p>
        <div className="h-1 w-32 bg-yellow-400 mb-8"></div>
        
        <div className="space-y-6">
          <div>
            <span className="text-[22px] font-bold">Telefon</span>:
            <a href="tel:+40723576893" className="ml-2 hover:text-yellow-600 underline text-[22px]">
              +40 723 576 893
            </a>
          </div>
          
          <div>
            <span className="text-[22px] font-bold">Adresa</span>:
            <span className="ml-2 text-[22px]">
              B-dul Energeticienilor nr.9-11, parter, ap.P14, București, Sector 3, CP. 032091
            </span>
          </div>
          
          <div>
            <span className="text-[22px] font-bold">Mail</span>:
            <a href="mailto:office@byt.ro" className="ml-2 hover:text-yellow-600 underline text-[22px]">
              office@byt.ro
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 