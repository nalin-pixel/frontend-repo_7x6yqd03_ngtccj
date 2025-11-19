import React, { useRef } from 'react'
import Hero from './components/Hero'
import USPs from './components/USPs'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  const dienstenRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="bg-white text-[#333333]">
      {/* Simple top bar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#CC0000]" />
            <span className="font-bold tracking-tight">V.O.F. Van Bladel</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-[#CC0000]">Home</a>
            <a href="#diensten" className="hover:text-[#CC0000]">Diensten</a>
            <a href="#verkoop" className="hover:text-[#CC0000]">Verkoop</a>
            <a href="#contact" className="hover:text-[#CC0000]">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-md bg-[#CC0000] text-white font-semibold text-sm">Afspraak maken</a>
        </div>
      </header>

      <main id="home">
        <Hero onPrimaryClick={() => document.getElementById('diensten')?.scrollIntoView({behavior:'smooth'})}
              onSecondaryClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} />
        <USPs />
        <Services onCta={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} />
        <Products />
        <Contact />
      </main>

      <footer className="bg-[#333333] text-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} V.O.F. Van Bladel. Alle rechten voorbehouden.</p>
          <p className="text-sm text-gray-300">Auto • APK • Tractorreparatie • Onderdelen</p>
        </div>
      </footer>
    </div>
  )
}

export default App
