import React from 'react'
import { Card, CardContent } from './ui/card'

interface Service {
  title: string;
  items: string[];
}

const services: Service[] = [
  {
    title: 'EVIDENȚĂ CONTABILĂ',
    items: [
      'Evidențierea înregistrărilor contabile primare',
      'Întocmirea documentelor primare',
      'Întocmirea balanței de verificare',
      'Întocmirea jurnalelor de TVA',
      'Întocmirea și depunerea declarațiilor fiscale lunare'
    ]
  },
  {
    title: 'SALARIZARE ȘI PERSONAL',
    items: [
      'Întocmirea statelor de salarii',
      'Întocmirea și depunerea declarații salariale',
      'Întocmirea contractelor de muncă',
      'Completarea registrului general de evidență a salariaților'
    ]
  },
  {
    title: 'CONSULTANȚĂ FISCALĂ',
    items: [
      'Consultanță în domeniul TVA',
      'Calcul impozite și contribuții',
      'Analiză cost-flow',
      'Obținerea de certificate fiscale',
      'Furnizarea celor mai utile informații fiscale'
    ]
  },
  {
    title: 'CERTIFICARE BILANȚURI',
    items: [
      'Certificarea situațiilor financiare',
      'Plăți trimestriale stabilite',
      'Cu întocmirea situației financiare'
    ]
  },
  {
    title: 'ALTE SERVICII',
    items: [
      'Înregistrare sedii sociale',
      'Servicii de mediere muncă',
      'Servicii de modificări date societate',
      'Servicii de prevenire și protecție'
    ]
  }
];

export function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/95 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-[20px] font-semibold text-[rgb(0,119,182)] mb-4 uppercase text-center">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-[15px] flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 