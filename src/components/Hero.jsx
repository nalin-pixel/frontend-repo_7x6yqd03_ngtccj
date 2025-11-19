import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#CC0000]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#333333]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CC0000]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="text-xs tracking-[0.2em] font-semibold text-gray-500 uppercase">Lokale V.O.F. sinds jaren</motion.p>
          <motion.h1 initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.12}} className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111]">
            V.O.F. Van Bladel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-[#a00000]">Auto & Landbouwmechanisatie</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-5 text-lg text-[#333333]/80 leading-relaxed max-w-xl">
            Uw vertrouwde partner voor APK, onderhoud en specialistische reparaties aan personenauto’s
            én zware landbouwmachines. Betrouwbaar, eerlijk en met echte familiewaarden.
          </motion.p>

          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.28}} className="mt-8 flex flex-wrap gap-4">
            <button onClick={onPrimaryClick} className="px-6 py-3 rounded-xl bg-[#CC0000] text-white font-semibold shadow-lg shadow-[#CC0000]/20 hover:brightness-95 transition">
              Bekijk Onze Diensten
            </button>
            <button onClick={onSecondaryClick} className="px-6 py-3 rounded-xl bg-white text-[#111] font-semibold border border-gray-200 hover:bg-gray-50 transition">
              Direct Afspraak Maken
            </button>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.18}} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop" alt="Auto service" className="rounded-2xl shadow-xl object-cover h-56 w-full" />
            <img src="https://images.unsplash.com/photo-1761509597296-5b3e49bab611?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcmFjdG9yJTIwc2VydmljZXxlbnwwfDB8fHwxNzYzNTQyMzI5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tractor service" className="rounded-2xl shadow-xl object-cover h-56 w-full" />
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" alt="Werkplaats" className="rounded-2xl shadow-xl object-cover h-56 w-full col-span-2" />
          </div>
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CC0000]/10 to-transparent blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
