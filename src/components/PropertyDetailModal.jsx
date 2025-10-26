import { useEffect, useState } from 'react'
import { X, IndianRupee, MapPin, Star, Wifi, Car, Snowflake, Utensils, MessageCircle, CalendarCheck2, Phone } from 'lucide-react'

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

export default function PropertyDetailModal({ open, onClose, data }) {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    if (open) setSlide(0)
  }, [open])

  if (!open || !data) return null

  const next = () => setSlide((s) => (s + 1) % data.images.length)
  const prev = () => setSlide((s) => (s - 1 + data.images.length) % data.images.length)

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 top-10 mx-auto h-[86%] w-full max-w-4xl overflow-hidden rounded-t-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium text-white">{data.type}</span>
            <h3 className="text-base font-semibold">{data.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100"><X size={18} /></button>
        </div>

        <div className="grid h-full grid-rows-[auto,1fr,auto]">
          <div className="relative h-56 w-full sm:h-72">
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button onClick={prev} className="rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white">‹</button>
              <button onClick={next} className="rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white">›</button>
            </div>
            <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-50" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[11px] text-gray-700">Owner-uploaded photo {slide + 1} / {data.images.length}</div>
            <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-sm font-semibold text-gray-900 flex items-center gap-1">
              <IndianRupee size={14} />{data.rent.toLocaleString()}/mo
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 overflow-y-auto p-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h4 className="font-semibold">Description</h4>
              <p className="mt-2 text-sm text-gray-700">
                Comfortable and safe accommodation ideal for students. Close to campus and public transit. Well-maintained with friendly neighborhood vibes.
              </p>

              <h4 className="mt-4 font-semibold">Amenities</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.amenities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2 py-1 text-xs text-gray-700">
                    {amenityIcon(a)} {a}
                  </span>
                ))}
              </div>

              <h4 className="mt-4 font-semibold">Location</h4>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={16} className="text-gray-500" /> {data.location}
              </div>
              <div className="mt-2 h-40 w-full rounded-2xl border border-gray-200 bg-[linear-gradient(45deg,#f0f9ff_10%,transparent_10%,transparent_50%,#f0f9ff_50%,#f0f9ff_60%,transparent_60%,transparent_100%)] bg-[length:12px_12px]" />
            </div>

            <div className="sm:col-span-1">
              <h4 className="font-semibold">Owner</h4>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-300 to-emerald-200" />
                <div>
                  <div className="text-sm font-medium">Anita Sharma</div>
                  <div className="text-xs text-gray-500">Verified Owner</div>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                  <MessageCircle size={16} /> Chat with Owner
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  <CalendarCheck2 size={16} /> Book Now
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
                  <Phone size={16} /> Schedule Visit
                </button>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Reviews</h4>
                <div className="mt-2 space-y-3">
                  {[1, 2].map((r) => (
                    <div key={r} className="rounded-2xl border border-gray-200 p-3">
                      <div className="flex items-center gap-2 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < 4 ? 'currentColor' : 'none'} />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-700">Great location and responsive owner. Clean rooms and reliable Wi‑Fi.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 flex items-center justify-between gap-2 border-t bg-white p-3 sm:hidden">
            <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium">
              <MessageCircle size={16} /> Chat
            </button>
            <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">
              <CalendarCheck2 size={16} /> Book
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
