import { motion } from 'framer-motion'
import { Home, Building2, Users, BedDouble, House } from 'lucide-react'

const categories = [
  { name: 'PG', icon: Home },
  { name: 'Hostel', icon: Building2 },
  { name: 'Flat', icon: House },
  { name: 'Sharing Room', icon: Users },
  { name: 'Apartment', icon: BedDouble },
]

export default function Categories() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Browse by category</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {categories.map((c, i) => (
          <motion.button
            key={c.name}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-white">
              <c.icon size={18} />
            </span>
            <span className="font-medium">{c.name}</span>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
