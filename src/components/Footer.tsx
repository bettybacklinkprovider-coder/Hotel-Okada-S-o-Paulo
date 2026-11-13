import {Link} from 'react-router-dom';
import {MapPin, MessageCircle, Phone} from 'lucide-react';
import {HOTEL_INFO, buildWhatsAppBookingLink} from '../data/hotelData';

export function Footer() {
  return (
    <footer className="bg-[#181715] text-[#EDE9E0] border-t border-[#2B2823]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2B2823]">
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="font-serif text-3xl font-semibold tracking-tight text-[#FAF9F6] inline-block">
              Hotel Okada
            </Link>
            <p className="text-sm text-[#B8B2A6] leading-relaxed max-w-md">
              Welcoming urban hospitality in the heart of República, São Paulo. Thoughtful rooms, attentive 24-hour
              reception, and direct personal reservation support.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#9A7B4F] uppercase">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#D6D0C4]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-white transition-colors">
                  Rooms &amp; Accommodation
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">
                  Special Offers &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#9A7B4F] uppercase">
              Location &amp; Reservations
            </h3>
            <ul className="space-y-3 text-sm text-[#D6D0C4]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9A7B4F] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li>
                <a
                  href={HOTEL_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#9A7B4F] shrink-0" />
                  <span>{HOTEL_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#86EFAC] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Direct WhatsApp Booking</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9C968A]">
          <p>&copy; {new Date().getFullYear()} Hotel Okada. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={HOTEL_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF9F6] transition-colors"
            >
              Directions to Hotel Okada
            </a>
            <span aria-hidden="true">·</span>
            <Link to="/contact#reviews" className="hover:text-[#FAF9F6] transition-colors">
              Guest Reviews
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
