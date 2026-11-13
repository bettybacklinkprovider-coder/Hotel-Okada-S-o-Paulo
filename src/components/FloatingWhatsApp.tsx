import {MessageCircle} from 'lucide-react';
import {buildWhatsAppBookingLink} from '../data/hotelData';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppBookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp (+55 11 5461-9665)"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white px-4 py-3 shadow-lg transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F] focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">WhatsApp Booking</span>
    </a>
  );
}
