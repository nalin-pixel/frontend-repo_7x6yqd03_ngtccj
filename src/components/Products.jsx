import React, { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-[#333333] border border-gray-200">{children}</span>
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
    <section id="verkoop" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#333333]">Actuele Voorraad: Onderdelen & Machines</h2>
            <p className="text-[#333333]/70 mt-2">Een selectie van de nieuwste of belangrijkste items.</p>
          </div>
          <a href="#contact" className="text-[#CC0000] font-semibold hover:underline">Volledige lijst</a>
        </div>

        {loading && <p className="text-[#333333]/70">Laden…</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              {p.image_url ? (
                <img src={p.image_url} alt={p.title} className="h-40 w-full object-cover" />
              ) : (
                <div className="h-40 w-full bg-gray-100 flex items-center justify-center text-gray-400">Geen foto</div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#333333]">{p.title}</h3>
                  <Badge>{p.category || 'Diversen'}</Badge>
                </div>
                {p.description && <p className="mt-2 text-[#333333]/80 text-sm">{p.description}</p>}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[#333333] font-semibold">{p.price ? `€ ${p.price.toFixed(0)}` : 'Prijs op aanvraag'}</span>
                  <a href="#contact" className="text-[#CC0000] font-semibold hover:underline text-sm">Meer info aanvragen</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
