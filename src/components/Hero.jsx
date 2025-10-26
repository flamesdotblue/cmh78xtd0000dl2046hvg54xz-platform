import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Building2, IndianRupee, MapPin } from 'lucide-react'

export default function Hero({ onSearch }) {
  const [city, setCity] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch({ city, price, type })
    const el = document.getElementById('listings')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.2),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.18),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Find your perfect student stay and the ideal roommate
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Explore verified PGs, hostels, and apartments near your campus. List your property, chat safely, and book with confidence.
          </p>
          <form onSubmit={submit} className="mt-6 rounded-2xl border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                <MapPin size={16} className="text-gray-500" />
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City or college"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                <IndianRupee size={16} className="text-gray-500" />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Max rent / month"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                <Building2 size={16} className="text-gray-500" />
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-transparent text-sm outline-none">
                  <option value="">Any type</option>
                  <option value="PG">PG</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Flat">Flat</option>
                  <option value="Sharing Room">Sharing Room</option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                <Search size={16} />
                Search Properties
              </button>
              <a href="#roommates" className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100">
                Find My Roommate
              </a>
              <a href="#list-property" className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100">
                List Property
              </a>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto h-72 w/full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm sm:h-96">
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
              <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-sky-50" />
              <div className="rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-50" />
              <div className="col-span-2 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-50 flex items-center justify-center text-xs text-gray-600 px-4 text-center">
                Real property photos appear here when owners upload. No AI-generated images.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
