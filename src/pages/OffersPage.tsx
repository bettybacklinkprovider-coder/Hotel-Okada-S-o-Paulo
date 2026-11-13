import {useState} from 'react';
import {Check, MessageCircle} from 'lucide-react';
import {SPECIAL_OFFERS, SpecialOffer, buildWhatsAppBookingLink} from '../data/hotelData';
import {HotelImage} from '../components/HotelImage';

interface OffersPageProps {
  onOpenBooking: (subject?: string) => void;
}

const OFFER_FILTERS: Array<{key: 'all' | SpecialOffer['category']; label: string}> = [
  {key: 'all', label: 'All Packages'},
  {key: 'leisure', label: 'Weekend & Family'},
  {key: 'extended', label: 'Extended Stay'},
  {key: 'business', label: 'Business'},
  {key: 'seasonal', label: 'Seasonal'},
];

export function OffersPage({onOpenBooking}: OffersPageProps) {
  const [filter, setFilter] = useState<'all' | SpecialOffer['category']>('all');

  const visibleOffers =
    filter === 'all' ? SPECIAL_OFFERS : SPECIAL_OFFERS.filter((offer) => offer.category === filter);

  return (
    <div>
      {/* Header */}
      <section className="bg-[#F3F1EC] border-b border-[#E6E2D8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
            Special Offers &amp; Packages
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#181715]">
            Exclusive Stay Packages in São Paulo
          </h1>
          <p className="text-base sm:text-lg text-[#5C574E] leading-relaxed max-w-3xl">
            Discover curated packages for weekend getaways, extended city stays, romantic celebrations, family trips,
            and business travel. All package rates and seasonal terms are confirmed directly with Hotel Okada
            reservations.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5C574E]">
              Editable pricing placeholders: confirm live rates directly via WhatsApp or front desk.
            </p>

            <div className="flex flex-wrap items-center gap-1.5 bg-[#F3F1EC] p-1 border border-[#E6E2D8]">
              {OFFER_FILTERS.map((item) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleOffers.map((offer) => (
              <article
                id={offer.id}
                key={offer.id}
                className="bg-white border border-[#E6E2D8] flex flex-col justify-between transition-colors hover:border-[#CFC8B9]"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#EFECE4] overflow-hidden">
                    <HotelImage
                      src={offer.image}
                      alt={offer.imageAlt}
                      fallbackTitle={offer.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-xs font-medium text-[#8C6D3F]">{offer.priceNote}</p>
                    <h2 className="font-serif text-3xl font-semibold text-[#181715]">{offer.title}</h2>
                    <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed">{offer.description}</p>

                    <div className="pt-3 border-t border-[#EFECE4] space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5C574E]">
                        Included Facilities
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {offer.includedFacilities.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-[#35322C]">
                            <Check className="w-4 h-4 text-[#8C6D3F] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F3F1EC] border border-[#E6E2D8] p-4 text-xs text-[#5C574E] leading-relaxed">
                      <span className="font-semibold text-[#181715]">Booking Conditions: </span>
                      {offer.bookingConditions}
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(offer.title)}
                    className="flex-1 min-w-[160px] py-3 px-5 text-sm font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Explore Offer
                  </button>
                  <a
                    href={buildWhatsAppBookingLink(
                      `Hello Hotel Okada, I would like details and rates for the ${offer.title}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
