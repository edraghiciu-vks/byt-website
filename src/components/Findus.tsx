import React from 'react'

interface FindStep {
  image: string;
  title: string;
  emoji: string;
}

const steps: FindStep[] = [
  {
    image: "./1.jpg",
    title: "Vedere Stradală",
    emoji: "🏢"
  },
  {
    image: "/2.jpg",
    title: "Fațada Clădirii",
    emoji: "🏗️"
  },
  {
    image: "/3.jpg",
    title: "De la intrare dreapta pe hol",
    emoji: "🚪"
  },
  {
    image: "/4.jpg",
    title: "Intrare Birou",
    emoji: "🚪"
  }
];

export function Findus() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <span>Găsește-ne Ușor</span>
            <span>📍</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mulți clienți ne-au spus că nu ne găsesc imediat. Aici sunt câteva imagini care te vor ajuta!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
                  <span>{step.emoji}</span>
                  <span>{step.title}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 