import React from 'react'

const Card = ({ tone = 'red', title, desc, onCta }) => (
  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className={"h-40 " + (tone === 'red' ? 'bg-gradient-to-br from-[#CC0000] to-[#a00000]' : 'bg-gradient-to-br from-[#222] to-[#333]')} />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#111]">{title}</h3>
      <p className="mt-2 text-[#333333]/80">{desc}</p>
      <button onClick={onCta} className={"mt-5 px-5 py-2.5 rounded-xl font-semibold transition shadow " + (tone === 'red' ? 'bg-[#CC0000] text-white hover:brightness-95 shadow-[#CC0000]/20' : 'bg-[#111] text-white hover:bg-black')}>Afspraak plannen</button>
    </div>
    <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
      <div className={"absolute -right-24 -top-24 size-56 rounded-full blur-3xl opacity-20 " + (tone==='red'?'bg-white':'bg-[#CC0000]')} />
    </div>
  </div>
)

const Services = ({ onCta }) => {
  return (
    <section id="diensten" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#111]">Onze diensten</h2>
          <p className="text-sm text-[#333333]/70">APK, onderhoud, diagnose, hydrauliek en meer</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card tone="red" title="Auto Service" desc="APK, groot/klein onderhoud, bandenservice en diagnose. Moderne apparatuur, vakkundige monteurs." onCta={onCta} />
          <Card tone="dark" title="Landbouwmechanisatie" desc="Tractorreparatie, hydrauliek, motoren en onderhoud op locatie. Snel en doortastend, ook in het seizoen." onCta={onCta} />
        </div>
      </div>
    </section>
  )
}

export default Services
