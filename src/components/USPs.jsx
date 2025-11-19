import React from 'react'
import { Wrench, Tractor, Handshake } from 'lucide-react'

const Item = ({ icon: Icon, title, text }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition group">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#CC0000]/10 text-[#CC0000] flex items-center justify-center group-hover:bg-[#CC0000]/15">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-[#111]">{title}</h3>
    </div>
    <p className="mt-3 text-[#333333]/80 leading-relaxed">{text}</p>
  </div>
)

const USPs = () => {
  return (
    <section className="relative bg-gray-50 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111]">Waarom klanten voor ons kiezen</h2>
          <span className="text-xs font-semibold tracking-widest text-[#CC0000] uppercase">Betrouwbaar & Lokaal</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Item icon={Wrench} title="Dubbele expertise" text="Gecertificeerd in zowel personenauto’s als landbouwmachines, van APK tot hydrauliek." />
          <Item icon={Tractor} title="Landbouwspecialist" text="Ervaring met tractoren en oogstmachines. Diagnostiek, motoren en onderhoud op locatie." />
          <Item icon={Handshake} title="Familiewaarden" text="Betrouwbaar, eerlijk en lokaal. Transparante communicatie en afspraak is afspraak." />
        </div>
      </div>
    </section>
  )
}

export default USPs
