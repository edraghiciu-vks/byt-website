import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export function LocationMap() {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([44.412919, 26.149752], 17)

    // Add a clean, minimal tile layer with CartoDB's Positron style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '©OpenStreetMap, ©CartoDB',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    // Add a marker
    const marker = L.marker([44.412919, 26.149752]).addTo(map)
    marker.on('click', () => {
      window.open('https://maps.app.goo.gl/JSb8XPh4QxQUz4b89', '_blank')
    })

    // Disable zoom controls for a cleaner look
    map.removeControl(map.zoomControl)

    // Clean up on unmount
    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className="w-full lg:w-1/2 relative">
      <div className="w-64 h-64 rounded-full bg-yellow-400 absolute -top-25 -left-8 z-10 opacity-70" />
      <div 
        id="map" 
        className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg relative z-0"
      />
    </div>
  )
} 