import React from 'react'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 text-left">
      <h1 className="text-[60px] font-bold text-gray-900 mb-4 opacity-0 animate-[slide-in_1s_ease-in-out_forwards]">
        InterBit Accounting
      </h1>
      <h2 className="text-[30px] font-semibold text-gray-700 mb-6">Expertiza Financiar-Contabila</h2>
      <div className="max-w-3xl space-y-4 text-gray-600">
        <p className="text-[18px]">
          InterBit Accounting oferă servicii de contabilitate și consultanță financiară adaptate nevoilor fiecărui client. 
          Cu o echipă ideală și dinamică, înregistrată în tabloul CECCAR, garantăm profesionalism, transparență și soluții eficiente.
        </p>
        <p className="text-[18px]">
          Ne asigurăm că partenerii noștri economisesc bani prin optimizarea taxelor și respectă toate obligațiile fiscale. 
          Valorile noastre - experiență, atenție la detalii și onestitate - ne definesc în fiecare colaborare.
        </p>
      </div>
    </section>
  )
} 