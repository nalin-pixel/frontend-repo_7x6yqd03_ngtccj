import React, { useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service_type: 'Overig', preferred_date: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: false, error: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: false, error: '' })
    try {
      const res = await fetch(`${apiBase}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Versturen mislukt')
      setStatus({ loading: false, ok: true, error: '' })
      setForm({ name: '', phone: '', email: '', service_type: 'Overig', preferred_date: '', message: '' })
    } catch (e) {
      setStatus({ loading: false, ok: false, error: e.message })
    }
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">Contact & Afspraak</h2>
        <form onSubmit={submit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Naam" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40" />
            <input required placeholder="Telefoon" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40" />
            <input type="email" placeholder="E-mail" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40 sm:col-span-2" />
            <select value={form.service_type} onChange={(e)=>setForm({...form, service_type: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40">
              <option>APK</option>
              <option>Auto onderhoud</option>
              <option>Diagnose</option>
              <option>Tractorreparatie</option>
              <option>Hydrauliek</option>
              <option>Onderhoud op locatie</option>
              <option>Overig</option>
            </select>
            <input placeholder="Voorkeursdatum" value={form.preferred_date} onChange={(e)=>setForm({...form, preferred_date: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40" />
            <textarea placeholder="Bericht / kenteken" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/40 sm:col-span-2" rows={4} />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button disabled={status.loading} className="px-6 py-3 rounded-md bg-[#CC0000] text-white font-semibold shadow hover:brightness-95 disabled:opacity-60">
              {status.loading ? 'Versturen…' : 'Verstuur afspraakaanvraag'}
            </button>
            {status.ok && <span className="text-green-700">Bedankt! We nemen spoedig contact op.</span>}
            {status.error && <span className="text-red-600">{status.error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
