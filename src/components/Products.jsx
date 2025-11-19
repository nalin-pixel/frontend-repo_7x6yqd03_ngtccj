import React, { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-[#333333] border border-gray-200">{children}</span>
)

const Skeleton = () => (
  <div className="animate-pulse bg-white rounded-2xl border border-gray-200 overflow-hidden">
    <div className="h-40 bg-gray-100" />
    <div className="p-5 space-y-3">
      <div className="h-5 w-2/3 bg-gray-100 rounded" />
      <div className="h-4 w-full bg-gray-100 rounded" />
      <div className="h-4 w-1/2 bg-gray-100 rounded" />
    </div>
  </div>
)

const Products = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${apiBase}/api/products?limit=6`)
        if (!res.ok) throw new Error('Kon producten niet laden')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="verkoop" className="relative bg-gray-50 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_300px_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#111]">Actuele Voorraad</h2>
            <p className="text-[#333333]/70 mt-2">Onderdelen en machines, zorgvuldig geselecteerd.</p>
          </div>
          <a href="#contact" className="text-[#CC0000] font-semibold hover:underline">Volledige lijst</a>
        </div>

        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length:6}).map((_,i)=>(<Skeleton key={i} />))}
          </div>
        )}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <div key={idx} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
                {p.image_url ? (
                  <div className="relative">
                    <img src={p.image_url} alt={p.title} className="h-40 w-full object-cover" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-40 w-full bg-gray-100 flex items-center justify-center text-gray-400">Geen foto</div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#111]">{p.title}</h3>
                    <Badge>{p.category || 'Diversen'}</Badge>
                  </div>
                  {p.description && <p className="mt-2 text-[#333333]/80 text-sm line-clamp-2">{p.description}</p>}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#111] font-semibold">{p.price ? `€ ${p.price.toFixed(0)}` : 'Prijs op aanvraag'}</span>
                    <a href="#contact" className="text-[#CC0000] font-semibold hover:underline text-sm">Meer info</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
