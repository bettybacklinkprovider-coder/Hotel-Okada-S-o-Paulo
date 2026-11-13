import {FormEvent, useState} from 'react';
import {CheckCircle2, ExternalLink, MapPin, MessageCircle, Navigation, Phone} from 'lucide-react';
import {HOTEL_INFO, buildWhatsAppBookingLink} from '../data/hotelData';
import {ReviewsSection} from '../components/ReviewsSection';

export function ContactReviewsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormError('Please enter your name and message before submitting.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please provide a valid email address.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const whatsappContactText = [
    `Hello Hotel Okada,`,
    name ? `Name: ${name}` : '',
    email ? `Email: ${email}` : '',
    phone ? `Phone: ${phone}` : '',
    message ? `Message: ${message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <div>
      {/* Header */}
      <section className="bg-[#F3F1EC] border-b border-[#E6E2D8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
            Location, Reservations &amp; Feedback
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#181715]">
            Contact &amp; Guest Reviews
          </h1>
          <p className="text-base sm:text-lg text-[#5C574E] leading-relaxed max-w-3xl">
            Reach Hotel Okada directly in República, São Paulo for reservations, arrival guidance, or read guest
            experiences and rating summaries below.
          </p>
        </div>
      </section>

      {/* Contact Information, Map & Contact Form */}
      <section className="py-16 lg:py-24 border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Contact Details + Google Map */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-[#E6E2D8] p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#8C6D3F]">Hotel Details</p>
                  <h2 className="font-serif text-3xl font-semibold text-[#181715]">{HOTEL_INFO.name}</h2>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181715]">Address</p>
                      <p className="text-[#5C574E] mt-0.5">{HOTEL_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181715]">Phone</p>
                      <a
                        href={HOTEL_INFO.phoneHref}
                        className="text-[#181715] hover:text-[#8C6D3F] underline underline-offset-4 mt-0.5 inline-block tabular-nums"
                      >
                        {HOTEL_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppBookingLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Contact</span>
                  </a>

                  <a
                    href={HOTEL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#181715] text-[#181715] hover:bg-[#181715] hover:text-[#FAF9F6] transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="flex-1 min-h-[300px] bg-[#EFECE4] border border-[#E6E2D8] flex flex-col overflow-hidden">
                <div className="px-4 py-3 bg-[#F3F1EC] border-b border-[#E6E2D8] flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-[#181715]">
                    Google Maps · R. Rego Freitas, República, São Paulo
                  </span>
                  <a
                    href={HOTEL_INFO.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#8C6D3F] hover:text-[#181715] whitespace-nowrap"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <iframe
                  title="Hotel Okada Location on Google Maps"
                  src={HOTEL_INFO.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full flex-1 min-h-[260px] border-0"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6 bg-white border border-[#E6E2D8] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-2 pb-6 border-b border-[#EFECE4]">
                <p className="text-xs font-medium text-[#8C6D3F]">Direct Inquiry</p>
                <h2 className="font-serif text-3xl font-semibold text-[#181715]">Send a Message</h2>
                <p className="text-sm text-[#5C574E] leading-relaxed">
                  Inquire about room availability, group bookings, or arrival requests. For the fastest response, send
                  your message straight to our WhatsApp desk.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 space-y-5 flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-3 text-[#15803D]">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#181715]">Message Ready, {name}</h3>
                      <p className="text-sm text-[#5C574E] mt-1 leading-relaxed">
                        Your message has been prepared. Click below to send it directly to Hotel Okada via WhatsApp or
                        call our front desk at {HOTEL_INFO.phoneDisplay}.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={buildWhatsAppBookingLink(whatsappContactText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-5 py-3 text-sm font-medium border border-[#D8D2C5] text-[#181715] hover:bg-[#F3F1EC] transition-colors cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="pt-6 space-y-5 flex-1 flex flex-col justify-between" noValidate>
                  <div className="space-y-4">
                    {formError && (
                      <div
                        className="bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] px-4 py-3 text-sm"
                        role="alert"
                      >
                        {formError}
                      </div>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-[#FAF9F6] border border-[#D8D2C5] px-4 py-3 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full bg-[#FAF9F6] border border-[#D8D2C5] px-4 py-3 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+55 11 ..."
                          className="w-full bg-[#FAF9F6] border border-[#D8D2C5] px-4 py-3 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-[#5C574E] mb-1.5">
                        Your Message or Booking Question *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share preferred check-in dates, number of guests, or questions for our front desk..."
                        className="w-full bg-[#FAF9F6] border border-[#D8D2C5] px-4 py-3 text-sm text-[#181715] focus:outline-none focus:border-[#8C6D3F]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#181715] hover:bg-[#2F2C27] text-[#FAF9F6] px-6 py-3.5 text-sm font-medium transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                    <a
                      href={buildWhatsAppBookingLink(whatsappContactText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white px-6 py-3.5 text-sm font-medium transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials Section */}
      <section id="reviews" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ReviewsSection />
        </div>
      </section>
    </div>
  );
}
