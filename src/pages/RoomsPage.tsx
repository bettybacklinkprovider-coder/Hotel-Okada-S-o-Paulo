import {useState} from 'react';
import {Check, Clock, MessageCircle, Users} from 'lucide-react';
import {HOTEL_INFO, ROOM_CATEGORIES, RoomCategory, buildWhatsAppBookingLink} from '../data/hotelData';
import {HotelImage} from '../components/HotelImage';
import {PhotoGallery} from '../components/PhotoGallery';

interface RoomsPageProps {
  onOpenBooking: (subject?: string) => void;
}

const ROOM_FILTERS: Array<{key: 'all' | RoomCategory['category']; label: string}> = [
  {key: 'all', label: 'All Categories'},
  {key: 'suite', label: 'Suites'},
  {key: 'executive', label: 'Executive'},
  {key: 'family', label: 'Family'},
  {key: 'standard', label: 'Standard'},
];

export function RoomsPage({onOpenBooking}: RoomsPageProps) {
  const [filter, setFilter] = useState<'all' | RoomCategory['category']>('all');

  const visibleRooms =
    filter === 'all' ? ROOM_CATEGORIES : ROOM_CATEGORIES.filter((room) => room.category === filter);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#F3F1EC] border-b border-[#E6E2D8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
              Hotel Okada · São Paulo
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#181715]">
              Rooms &amp; Accommodation
            </h1>
            <p className="text-base sm:text-lg text-[#5C574E] leading-relaxed">
              Thoughtfully designed guest rooms in República combining quiet comfort, natural tones, and direct
              reservation support via WhatsApp or phone.
            </p>
          </div>

          {/* Check-in / Check-out & Occupancy Policy Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white border border-[#E6E2D8] p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-[#5C574E]">Check-In Time</p>
                <p className="text-sm font-semibold text-[#181715] mt-0.5 tabular-nums">
                  {HOTEL_INFO.checkInTime}
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E6E2D8] p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-[#5C574E]">Check-Out Time</p>
                <p className="text-sm font-semibold text-[#181715] mt-0.5 tabular-nums">
                  {HOTEL_INFO.checkOutTime}
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E6E2D8] p-4 flex items-start gap-3">
              <Users className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-[#5C574E]">Guest Occupancy</p>
                <p className="text-sm font-semibold text-[#181715] mt-0.5">1 to 4 Guests per Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Catalogue */}
      <section className="py-16 lg:py-24 border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5C574E]">
              Showing <span className="font-semibold text-[#181715] tabular-nums">{visibleRooms.length}</span>{' '}
              accommodation {visibleRooms.length === 1 ? 'category' : 'categories'}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 bg-[#F3F1EC] p-1 border border-[#E6E2D8]">
              {ROOM_FILTERS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setFilter(item.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    filter === item.key
                      ? 'bg-[#181715] text-[#FAF9F6]'
                      : 'text-[#5C574E] hover:text-[#181715]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {visibleRooms.map((room) => (
              <article
                id={room.id}
                key={room.id}
                className="bg-white border border-[#E6E2D8] grid grid-cols-1 lg:grid-cols-12 overflow-hidden transition-colors hover:border-[#CFC8B9]"
              >
                <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-[#EFECE4] overflow-hidden">
                  <HotelImage
                    src={room.image}
                    alt={room.imageAlt}
                    fallbackTitle={room.name}
                    className={`w-full h-full object-cover ${
                      room.id === 'standard-urban-room' ? 'object-right' : 'object-center'
                    }`}
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs text-[#6E675C]">
                        {room.occupancy} · {room.bedConfig} · {room.areaLabel}
                      </p>
                      <span className="text-xs font-medium text-[#8C6D3F]">{room.priceLabel}</span>
                    </div>

                    <h2 className="font-serif text-3xl font-semibold text-[#181715]">{room.name}</h2>
                    <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed">{room.fullDescription}</p>

                    <div className="pt-2 border-t border-[#EFECE4]">
                      <p className="text-xs font-medium text-[#5C574E] mb-3">{room.checkInOut}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.facilities.map((facility) => (
                          <li key={facility} className="flex items-center gap-2 text-sm text-[#35322C]">
                            <Check className="w-4 h-4 text-[#8C6D3F] shrink-0" />
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(room.name)}
                      className="px-6 py-3 text-sm font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Book Now
                    </button>
                    <a
                      href={buildWhatsAppBookingLink(
                        `Hello Hotel Okada, I would like to check availability and rates for the ${room.name}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Book via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Lightbox */}
      <section id="gallery" className="py-16 lg:py-24 bg-[#F3F1EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
}
