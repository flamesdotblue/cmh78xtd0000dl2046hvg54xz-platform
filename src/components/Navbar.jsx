import { Home, Building2, User, LogIn } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-white shadow-sm">
              <Home size={18} />
            </div>
            <span className="font-semibold tracking-tight">CampusStay</span>
          </motion.div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#listings" className="hover:text-gray-900">Find Property</a>
          <a href="#list-property" className="hover:text-gray-900">List Property</a>
          <a href="#roommates" className="hover:text-gray-900">Find Roommate</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
            <User size={16} />
            Sign up
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            <LogIn size={16} />
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
