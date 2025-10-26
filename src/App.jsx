import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import PopularListings from './components/PopularListings'

function App() {
  const [searchQuery, setSearchQuery] = useState({ city: '', price: '', type: '' })

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero onSearch={setSearchQuery} />
        <Categories />
        <PopularListings searchQuery={searchQuery} />
      </main>
      <footer className="mt-16 border-t bg-gray-50/60">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} CampusStay. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
