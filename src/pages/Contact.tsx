import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Findus } from '../components/Findus'
import { ContactInfo } from '../components/ContactInfo'
import { LocationMap } from '../components/LocationMap'

function Contact() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main>
        <Findus />
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <LocationMap />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
