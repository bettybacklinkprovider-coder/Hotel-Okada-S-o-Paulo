import {FormEvent, useEffect, useState} from 'react';
import {CheckCircle2, MessageCircle, Phone, X} from 'lucide-react';
import {HOTEL_INFO, ROOM_CATEGORIES, SPECIAL_OFFERS, buildWhatsAppBookingLink} from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

export function BookingModal({isOpen, initialSubject, onClose}: BookingModalProps) {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [selection, setSelection] = useState(initialSubject || ROOM_CATEGORIES[0].name);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setSelection(initialSubject);
    }
    setSubmitted(false);
    setError('');
  }, [initialSubject, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsAppMessage = [
    `Hello Hotel Okada, I would like to request a booking inquiry.`,
    `Selection: ${selection}`,
    guestName ? `Guest Name: ${guestName}` : '',
    checkIn ? `Check-in: ${checkIn}` : '',
    checkOut ? `Check-out: ${checkOut}` : '',
    `Guests: ${guests}`,
    notes ? `Notes: ${notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setError('Please enter your name so our reception team can address your inquiry.');
      return;
    }
    if (guestEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail.trim())) {
      setError('Please enter a valid email address or leave it blank to send via WhatsApp.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF9F6] border border-[#E6E2D8] w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E6E2D8]">
          <div>
            <p className="text-xs font-medium text-[#8C6D3F]">Hotel Okada · República, São Paulo</p>
            <h2 id="booking-modal-title" className="font-serif text-3xl font-semibold text-[#181715] mt-1">
              Reservation Inquiry
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking dialog"
            className="w-10 h-10 inline-flex items-center justify-center text-[#5C574E] hover:text-[#181715] border border-[#E6E2D8] hover:bg-[#F3F1EC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 space-y-5">
            <div className="flex items-start gap-3 text-[#15803D]">
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#181715]">
                  Inquiry Prepared for {guestName}
                </h3>
                <p className="text-sm text-[#5C574E] mt-1 leading-relaxed">
                  To confirm live room availability and current nightly rates directly with Hotel Okada reception, send
                  your inquiry via WhatsApp or call us immediately.
                </p>
              </div>
            </div>

            <div className="bg-[#F3F1EC] border border-[#E6E2D8] p-4 text-sm text-[#181715] space-y-1.5">
              <p>
                <span className="text-[#5C574E]">Selection:</span> {selection}
              </p>
              <p>
                <span className="text-[#5C574E]">Guests:</span> {guests}
              </p>
              {checkIn && (
                <p className="tabular-nums">
                  <span className="text-[#5C574E]">Dates:</span> {checkIn} {checkOut ? `to ${checkOut}` : ''}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsAppBookingLink(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white px-5 py-3 text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
              <a
                href={HOTEL_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[#181715] text-[#181715] hover:bg-[#F3F1EC] px-5 py-3 text-sm font-medium transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-6 space-y-4" noValidate>
            {error && (
              <div className="bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] px-4 py-3 text-sm" role="alert">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="booking-selection" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                Room Category or Package
              </label>
              <select
                id="booking-selection"
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                className="w-full bg-white border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
              >
                <optgroup label="Room Categories">
                  {ROOM_CATEGORIES.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Special Offers & Packages">
                  {SPECIAL_OFFERS.map((offer) => (
                    <option key={offer.id} value={offer.title}>
                      {offer.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                  Full Name *
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-white border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                  Email Address
                </label>
                <input
                  id="booking-email"
                  type="email"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="guest@example.com"
                  className="w-full bg-white border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="booking-checkin" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                  Check-in Date
                </label>
                <input
                  id="booking-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white border border-[#D8D2C5] px-3 py-2.5 text-sm text-[#181715] tabular-nums focus:outline-none focus:border-[#8C6D3F]"
                />
              </div>
              <div>
                <label htmlFor="booking-checkout" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                  Check-out Date
                </label>
                <input
                  id="booking-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white border border-[#D8D2C5] px-3 py-2.5 text-sm text-[#181715] tabular-nums focus:outline-none focus:border-[#8C6D3F]"
                />
              </div>
              <div>
                <label htmlFor="booking-guests" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                  Guests
                </label>
                <select
                  id="booking-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white border border-[#D8D2C5] px-3 py-2.5 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-notes" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                Special Requests or Arrival Notes
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Preferred arrival time, room preferences, or package questions..."
                className="w-full bg-white border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#181715] hover:bg-[#2F2C27] text-[#FAF9F6] px-5 py-3 text-sm font-medium transition-colors cursor-pointer"
              >
                Prepare Booking Inquiry
              </button>
              <a
                href={buildWhatsAppBookingLink(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
