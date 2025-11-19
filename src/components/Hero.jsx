import React from 'react'

const Hero = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#CC0000]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gray-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">Lokale V.O.F. sinds jaren</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#333333]">
            V.O.F. Van Bladel
            <span className="block text-[#CC0000]">Auto & Landbouwmechanisatie</span>
          </h1>
          <p className="mt-5 text-lg text-[#333333]/80 leading-relaxed">
            Uw vertrouwde partner voor APK, onderhoud en specialistische reparaties aan personenauto’s
            én zware landbouwmachines. Betrouwbaar, eerlijk en met echte familiewaarden.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onPrimaryClick} className="px-6 py-3 rounded-md bg-[#CC0000] text-white font-semibold shadow hover:brightness-95 transition">
              Bekijk Onze Diensten
            </button>
            <button onClick={onSecondaryClick} className="px-6 py-3 rounded-md bg-white text-[#333333] font-semibold border border-gray-300 hover:bg-gray-50 transition">
              Direct Afspraak Maken
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop" alt="Auto service" className="rounded-xl shadow object-cover h-52 w-full" />
            <img src="https://images.unsplash.com/photo-1761509597296-5b3e49bab611?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcmFjdG9yJTIwc2VydmljZXxlbnwwfDB8fHwxNzYzNTQyMzI5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tractor service" className="rounded-xl shadow object-cover h-52 w-full" />
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" alt="Werkplaats" className="rounded-xl shadow object-cover h-52 w-full col-span-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
