import React from 'react'

const Services = ({ onCta }) => {
  return (
    <section id="diensten" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        {/* Auto */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="h-40 bg-[#CC0000]" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#333333]">Auto Service</h2>
            <p className="mt-2 text-[#333333]/80">APK, groot/klein onderhoud, bandenservice en diagnose. Moderne apparatuur, vakkundige monteurs.</p>
            <button onClick={onCta} className="mt-5 px-5 py-2.5 rounded-md bg-[#CC0000] text-white font-semibold hover:brightness-95">Afspraak plannen</button>
          </div>
        </div>
        {/* Landbouw */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="h-40 bg-[#333333]" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#333333]">Landbouwmechanisatie</h2>
            <p className="mt-2 text-[#333333]/80">Tractorreparatie, hydrauliek, motoren en onderhoud op locatie. Snel en doortastend, ook in het seizoen.</p>
            <button onClick={onCta} className="mt-5 px-5 py-2.5 rounded-md bg-[#333333] text-white font-semibold hover:brightness-95">Afspraak plannen</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
