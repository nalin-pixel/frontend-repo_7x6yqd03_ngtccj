import React from 'react'
import Hero from './components/Hero'
import USPs from './components/USPs'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'
import { Menu } from 'lucide-react'

function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Top navigation with glass + gradient border */}
      <header className="sticky top-0 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b" style={{borderImage: 'linear-gradient(90deg, #CC0000 0%, #333333 100%) 1'}} />
          <div className="mx-auto max-w-7xl px-6 py-3 relative flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-gradient-to-br from-[#CC0000] to-[#a00000] shadow-inner shadow-black/10" />
              <span className="font-bold tracking-tight">V.O.F. Van Bladel</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#home" className="hover:text-[#CC0000] transition">Home</a>
              <a href="#diensten" className="hover:text-[#CC0000] transition">Diensten</a>
              <a href="#verkoop" className="hover:text-[#CC0000] transition">Verkoop</a>
              <a href="#contact" className="hover:text-[#CC0000] transition">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-[#CC0000] text-white font-semibold text-sm shadow hover:brightness-95 transition">Afspraak maken</a>
              <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(v=>!v)} aria-label="Menu"><Menu size={18} /></button>
            </div>
          </div>
          {open && (
            <div className="md:hidden bg-white/90 backdrop-blur border-b">
              <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-2 text-sm">
                <a href="#home" onClick={()=>setOpen(false)} className="py-1">Home</a>
                <a href="#diensten" onClick={()=>setOpen(false)} className="py-1">Diensten</a>
                <a href="#verkoop" onClick={()=>setOpen(false)} className="py-1">Verkoop</a>
                <a href="#contact" onClick={()=>setOpen(false)} className="py-1">Contact</a>
                <a href="#contact" onClick={()=>setOpen(false)} className="mt-2 inline-flex px-4 py-2 rounded-lg bg-[#CC0000] text-white font-semibold text-sm">Afspraak maken</a>
              </div>
            </div>
          )}
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

      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(204,0,0,0.12),transparent)]" />
        <div className="bg-[#111]/90 text-white py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-md bg-[#CC0000]" />
              <p className="text-sm/none">© {new Date().getFullYear()} V.O.F. Van Bladel</p>
            </div>
            <p className="text-sm text-gray-300">Auto • APK • Tractorreparatie • Onderdelen</p>
          </div>
        </div>
      </footer>

      {/* Floating mobile CTA */}
      <a href="#contact" className="fixed sm:hidden bottom-4 right-4 px-4 py-3 rounded-full shadow-lg bg-[#CC0000] text-white font-semibold">Afspraak</a>
    </div>
  )
}

export default App
