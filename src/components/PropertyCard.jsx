import { useState } from 'react'
import { MapPin, Wifi, Car, Snowflake, Utensils, Heart, MessageCircle } from 'lucide-react'

const amenityIcon = (a) => {
  switch (a) {
    case 'Wi-Fi':
      return <Wifi size={16} />
    case 'AC':
      return <Snowflake size={16} />
    case 'Kitchen':
      return <Utensils size={16} />
    case 'Parking':
      return <Car size={16} />
    default:
      return null
  }
}

export default function PropertyCard({ data, onOpen }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <button onClick={onOpen} className="relative h-40 w-full overflow-hidden">
        <div className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-1.5 text-xs text-gray-700 backdrop-blur">
          ₹{data.rent.toLocaleString()}/mo
        </div>
        <div className="absolute left-3 top-3 z-10 rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium text-white">
          {data.type}
        </div>
        <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-50" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-2 text-[11px] text-gray-600 text-center">
          Real owner-uploaded photos display here
        </div>
      </button>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="line-clamp-1 font-semibold text-gray-900">{data.title}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={14} className="text-gray-500" /> {data.location}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {data.amenities.map((a) => (
            <span key={a} className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2 py-1 text-xs text-gray-700">
              {amenityIcon(a)} {a}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={onOpen} className="rounded-xl border border-gray-200 px-3 py-1.5 text-sm font-medium hover:bg-gray-50">View Details</button>
            <button className="rounded-xl border border-gray-200 px-3 py-1.5 text-sm font-medium hover:bg-gray-50">💬 Chat</button>
          </div>
          <button
            aria-label="save"
            onClick={() => setSaved((s) => !s)}
            className={`inline-flex items-center gap-1 rounded-xl px-2 py-1.5 text-sm ${saved ? 'text-rose-600' : 'text-gray-600'} hover:bg-rose-50`}
          >
            <Heart size={16} fill={saved ? 'currentColor' : 'none'} /> Save
          </button>
        </div>
      </div>
    </div>
  )
}
