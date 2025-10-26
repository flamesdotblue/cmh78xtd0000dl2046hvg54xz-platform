import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter } from 'lucide-react'
import PropertyCard from './PropertyCard'
import PropertyDetailModal from './PropertyDetailModal'

const DATA = [
  {
    id: 'p1',
    title: 'Sunny PG near Tech University',
    location: 'Bengaluru',
    type: 'PG',
    rent: 9500,
    amenities: ['Wi-Fi', 'AC', 'Kitchen', 'Parking'],
    available: true,
    images: ['a', 'b', 'c'],
  },
  {
    id: 'p2',
    title: 'Cozy Hostel for Girls',
    location: 'Pune',
    type: 'Hostel',
    rent: 7000,
    amenities: ['Wi-Fi', 'Kitchen'],
    available: true,
    images: ['a', 'b'],
  },
  {
    id: 'p3',
    title: '2BHK Student Flat',
    location: 'Hyderabad',
    type: 'Flat',
    rent: 16000,
    amenities: ['Wi-Fi', 'Parking'],
    available: false,
    images: ['a'],
  },
  {
    id: 'p4',
    title: 'Sharing Room near Metro',
    location: 'Delhi',
    type: 'Sharing Room',
    rent: 8500,
    amenities: ['Wi-Fi', 'AC'],
    available: true,
    images: ['a', 'b', 'c', 'd'],
  },
  {
    id: 'p5',
    title: 'Modern Apartment with Balcony',
    location: 'Mumbai',
    type: 'Apartment',
    rent: 22000,
    amenities: ['Wi-Fi', 'AC', 'Kitchen', 'Parking'],
    available: true,
    images: ['a', 'b'],
  },
]

export default function PopularListings({ searchQuery }) {
  const [filters, setFilters] = useState({ price: '', type: '', location: '', availability: '' })
  const [activeId, setActiveId] = useState(null)

  const merged = useMemo(() => {
    return {
      price: searchQuery?.price || filters.price,
      type: searchQuery?.type || filters.type,
      location: searchQuery?.city || filters.location,
      availability: filters.availability,
    }
  }, [searchQuery, filters])

  const filtered = useMemo(() => {
    return DATA.filter((d) => {
      const priceOk = merged.price ? d.rent <= Number(merged.price) : true
      const typeOk = merged.type ? d.type === merged.type : true
      const locOk = merged.location ? d.location.toLowerCase().includes(merged.location.toLowerCase()) : true
      const availOk = merged.availability ? (merged.availability === 'Available' ? d.available : !d.available) : true
      return priceOk && typeOk && locOk && availOk
    })
  }, [merged])

  return (
    <section id="listings" className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-lg font-semibold">Popular Listings</h2>
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm">
            <span className="text-gray-500"><Filter size={16} /></span>
            Filters
          </div>
          <select
            value={filters.location}
            onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">Location</option>
            <option>Bengaluru</option>
            <option>Pune</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
          <select
            value={filters.type}
            onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">Type</option>
            <option>PG</option>
            <option>Hostel</option>
            <option>Flat</option>
            <option>Sharing Room</option>
            <option>Apartment</option>
          </select>
          <select
            value={filters.availability}
            onChange={(e) => setFilters((f) => ({ ...f, availability: e.target.value }))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">Availability</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>
          <input
            value={filters.price}
            onChange={(e) => setFilters((f) => ({ ...f, price: e.target.value }))}
            placeholder="Max ₹"
            className="w-28 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <PropertyCard data={p} onOpen={() => setActiveId(p.id)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div id="roommates" className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-emerald-800">Find My Roommate</h3>
            <p className="mt-1 text-sm text-emerald-700">Create your profile with budget, preferred location, and lifestyle tags. Match and chat with fellow students.</p>
          </div>
          <div className="flex gap-2">
            <a className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700" href="#">
              Create Profile
            </a>
            <a className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50" href="#">
              Start Matching
            </a>
          </div>
        </div>
      </div>

      <div id="list-property" className="mt-6 rounded-3xl border border-sky-200 bg-sky-50/50 p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-sky-800">List Your Property</h3>
            <p className="mt-1 text-sm text-sky-700">Reach thousands of students. Upload real photos, manage bookings, and chat securely.</p>
          </div>
          <div className="flex gap-2">
            <a className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700" href="#">
              Add New Property
            </a>
            <a className="rounded-xl border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50" href="#">
              Owner Dashboard
            </a>
          </div>
        </div>
      </div>

      <PropertyDetailModal
        open={Boolean(activeId)}
        onClose={() => setActiveId(null)}
        data={DATA.find((d) => d.id === activeId) || null}
      />
    </section>
  )
}
