import React from 'react'
import { Wrench, Tractor, Handshake } from 'lucide-react'

const Item = ({ icon: Icon, title, text }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 text-[#CC0000] flex items-center justify-center">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-[#333333]">{title}</h3>
    </div>
    <p className="mt-3 text-[#333333]/80 leading-relaxed">{text}</p>
  </div>
)

const USPs = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
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
