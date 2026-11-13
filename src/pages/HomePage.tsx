import {Link} from 'react-router-dom';
import {
  ArrowRight,
  BedDouble,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wifi,
} from 'lucide-react';
import {
  FacilityItem,
  HOTEL_FACILITIES,
  HOTEL_INFO,
  IMAGES,
  ROOM_CATEGORIES,
  SPECIAL_OFFERS,
  buildWhatsAppBookingLink,
} from '../data/hotelData';
import {HotelImage} from '../components/HotelImage';
import {ReviewsSection} from '../components/ReviewsSection';

interface HomePageProps {
  onOpenBooking: (subject?: string) => void;
}

function FacilityIcon({name}: {name: FacilityItem['iconName']}) {
  const iconClass = 'w-5 h-5 text-[#8C6D3F]';
  switch (name) {
    case 'wifi':
      return <Wifi className={iconClass} strokeWidth={1.75} />;
    case 'bed':
      return <BedDouble className={iconClass} strokeWidth={1.75} />;
    case 'sparkles':
      return <Sparkles className={iconClass} strokeWidth={1.75} />;
    case 'clock':
      return <Clock className={iconClass} strokeWidth={1.75} />;
    case 'shield':
      return <ShieldCheck className={iconClass} strokeWidth={1.75} />;
    case 'mapPin':
      return <MapPin className={iconClass} strokeWidth={1.75} />;
  }
}

export function HomePage({onOpenBooking}: HomePageProps) {
  const featuredRooms = ROOM_CATEGORIES.filter((room) => room.featuredOnHome);
  const featuredOffers = SPECIAL_OFFERS.filter((offer) => offer.featuredOnHome);

  return (
    <div>
      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[560px] lg:min-h-[680px] flex items-end bg-[#181715] text-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0">
          <HotelImage
            src={IMAGES.hero}
            alt="Hotel Okada architectural exterior and warm illuminated entrance in São Paulo"
            fallbackTitle="Hotel Okada — São Paulo"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#D5B582]">
              República · São Paulo, Brazil
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-white">
              Welcome to Hotel Okada
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9E0] leading-relaxed max-w-xl">
              An intimate urban sanctuary on Rua Rego Freitas. Experience quiet, thoughtfully appointed rooms,
              attentive 24-hour reception, and effortless access to the cultural heart of São Paulo.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-[#FAF9F6] text-[#181715] hover:bg-[#EFECE4] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B582]"
              >
                Book Your Stay
              </button>

              <a
                href={buildWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86EFAC]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About Our Hotel */}
      <section className="py-20 lg:py-28 border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">About Our Hotel</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181715] leading-tight">
                Calm Hospitality in Central São Paulo
              </h2>
              <p className="text-base text-[#4A453E] leading-relaxed">
                Positioned in the vibrant República district at {HOTEL_INFO.address}, Hotel Okada offers travelers a
                restful counterpoint to the energy of South America’s largest metropolis. Whether arriving for business
                meetings, cultural performances, or a family city break, guests are welcomed with sincere personal
                attention.
              </p>
              <p className="text-base text-[#4A453E] leading-relaxed">
                Steps from historic São Paulo architecture, dining neighborhoods, and major metro connections, our
                property focuses on the essentials done well: peaceful sleep, reliable connectivity, daily
                housekeeping, and round-the-clock front desk care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-[#181715]">
                <Link
                  to="/rooms#gallery"
                  className="inline-flex items-center gap-2 font-medium border-b border-[#181715] pb-1 hover:text-[#8C6D3F] hover:border-[#8C6D3F] transition-colors"
                >
                  <span>Explore Photo Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-medium text-[#5C574E] hover:text-[#181715] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#8C6D3F]" />
                  <span>View Map &amp; Directions</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <div className="sm:col-span-2 aspect-[16/10] bg-[#EFECE4] overflow-hidden border border-[#E6E2D8]">
                <HotelImage
                  src={IMAGES.lounge}
                  alt="Hotel Okada sunlit guest lounge and seating area"
                  fallbackTitle="Guest Lounge"
                  className="w-full h-full object-cover object-right"
                />
              </div>
              <div className="aspect-[4/3] bg-[#EFECE4] overflow-hidden border border-[#E6E2D8]">
                <HotelImage
                  src={IMAGES.deluxeSuite}
                  alt="Hotel Okada king guest bedroom overlooking São Paulo"
                  fallbackTitle="Guest Suites"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F3F1EC] border border-[#E6E2D8] p-6 flex flex-col justify-between">
                <span className="text-xs font-medium text-[#8C6D3F]">Location</span>
                <div className="space-y-2 mt-4">
                  <p className="font-serif text-2xl font-semibold text-[#181715]">República, SP</p>
                  <p className="text-xs text-[#5C574E] leading-relaxed">{HOTEL_INFO.address}</p>
                </div>
                <a
                  href={HOTEL_INFO.phoneHref}
                  className="text-xs font-medium text-[#181715] hover:text-[#8C6D3F] mt-4 inline-block tabular-nums"
                >
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Rooms & Accommodation */}
      <section className="py-20 lg:py-28 bg-[#F3F1EC] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
                Rooms &amp; Accommodation
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181715]">
                Spaces Designed for Quiet Rest
              </h2>
              <p className="text-base text-[#5C574E] leading-relaxed">
                Select from our guest room categories tailored for solo executives, couples, and visiting families.
              </p>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#181715] border-b border-[#181715] pb-1 hover:text-[#8C6D3F] hover:border-[#8C6D3F] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>All Room Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <article
                key={room.id}
                className="bg-[#FAF9F6] border border-[#E6E2D8] flex flex-col justify-between transition-colors hover:border-[#CFC8B9]"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EFECE4]">
                    <HotelImage
                      src={room.image}
                      alt={room.imageAlt}
                      fallbackTitle={room.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs text-[#6E675C]">
                      {room.occupancy} · {room.bedConfig}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-[#181715]">{room.name}</h3>
                    <p className="text-sm text-[#5C574E] leading-relaxed">{room.shortDescription}</p>
                    <p className="text-xs font-medium text-[#8C6D3F] pt-1">{room.priceLabel}</p>
                    <p className="text-xs text-[#5C574E]">
                      {room.facilities.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <Link
                    to={`/rooms#${room.id}`}
                    className="flex-1 text-center py-2.5 px-4 text-xs font-medium border border-[#181715] text-[#181715] hover:bg-[#181715] hover:text-[#FAF9F6] transition-colors whitespace-nowrap"
                  >
                    View Details
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.name)}
                    className="flex-1 py-2.5 px-4 text-xs font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Hotel Facilities & Amenities */}
      <section className="py-20 lg:py-28 border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
              Hotel Facilities &amp; Amenities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181715]">
              Thoughtful Stay Essentials
            </h2>
            <p className="text-base text-[#5C574E] leading-relaxed">
              Every stay at Hotel Okada includes dependable core hospitality services crafted around comfort and
              convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-white border border-[#E6E2D8] overflow-hidden flex flex-col transition-colors hover:border-[#CFC8B9]"
              >
                <div className="aspect-[16/10] bg-[#EFECE4] overflow-hidden">
                  <HotelImage
                    src={facility.image}
                    alt={facility.imageAlt}
                    fallbackTitle={facility.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03] ${
                      facility.objectPosition || 'object-center'
                    }`}
                  />
                </div>
                <div className="p-6 sm:p-7 space-y-3 flex-1">
                  <div className="w-10 h-10 bg-[#F3F1EC] border border-[#E6E2D8] flex items-center justify-center">
                    <FacilityIcon name={facility.iconName} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#181715]">{facility.title}</h3>
                  <p className="text-sm text-[#5C574E] leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Special Offers & Packages */}
      <section className="py-20 lg:py-28 bg-[#F3F1EC] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
                Special Offers &amp; Packages
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181715]">
                Curated Stays for Every Journey
              </h2>
              <p className="text-base text-[#5C574E] leading-relaxed">
                Explore flexible arrangements for weekend getaways, extended stays, romantic visits, and family travel.
              </p>
            </div>
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#181715] border-b border-[#181715] pb-1 hover:text-[#8C6D3F] hover:border-[#8C6D3F] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredOffers.map((offer) => (
              <article
                key={offer.id}
                className="bg-[#FAF9F6] border border-[#E6E2D8] grid grid-cols-1 sm:grid-cols-12 overflow-hidden transition-colors hover:border-[#CFC8B9]"
              >
                <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto bg-[#EFECE4] overflow-hidden">
                  <HotelImage
                    src={offer.image}
                    alt={offer.imageAlt}
                    fallbackTitle={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[#8C6D3F]">{offer.priceNote}</p>
                    <h3 className="font-serif text-2xl font-semibold text-[#181715]">{offer.title}</h3>
                    <p className="text-sm text-[#5C574E] leading-relaxed">{offer.summary}</p>
                  </div>
                  <div className="pt-2">
                    <Link
                      to={`/offers#${offer.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors whitespace-nowrap"
                    >
                      <span>Explore Offer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Reviews & Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ReviewsSection compact />
        </div>
      </section>
    </div>
  );
}
