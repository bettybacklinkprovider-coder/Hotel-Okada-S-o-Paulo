import {Link} from 'react-router-dom';
import {ExternalLink, QrCode, Star, User} from 'lucide-react';
import {QRCodeSVG} from 'qrcode.react';
import {GUEST_REVIEWS, HOTEL_INFO, RATING_BREAKDOWN_PLACEHOLDER} from '../data/hotelData';

interface ReviewsSectionProps {
  compact?: boolean;
}

export function ReviewsSection({compact = false}: ReviewsSectionProps) {
  const reviewDestinationPlaceholder = HOTEL_INFO.googleMapsSearchUrl;

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">
            Guest Feedback &amp; Ratings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181715]">
            What Our Guests Say
          </h2>
          <p className="text-base text-[#5C574E] leading-relaxed">
            Discover what our guests love about their experience at Hotel Okada.
          </p>
        </div>

        {compact && (
          <Link
            to="/contact#reviews"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium border border-[#181715] text-[#181715] hover:bg-[#181715] hover:text-[#FAF9F6] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            See All Reviews
          </Link>
        )}
      </div>

      {/* Ratings Overview + Platform Cards + QR Code */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Overall Rating & 5-to-1 Breakdown Card */}
        <div className="lg:col-span-5 bg-[#F3F1EC] border border-[#E6E2D8] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-[#E2DDD2]">
              <div>
                <p className="text-xs font-medium text-[#5C574E]">Overall Guest Rating</p>
                <div className="flex items-baseline gap-2.5 mt-2">
                  <span className="font-serif text-5xl font-semibold text-[#181715] tabular-nums">--</span>
                  <span className="text-sm text-[#5C574E] tabular-nums">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 mt-2" aria-label="Five star rating scale">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-[#8C6D3F] fill-[#8C6D3F]/20" strokeWidth={1.75} />
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#5C574E]">Total Reviews</p>
                <p className="font-medium text-sm text-[#181715] mt-1 tabular-nums">Editable Placeholder</p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              {RATING_BREAKDOWN_PLACEHOLDER.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-14 text-[#5C574E] tabular-nums shrink-0">{row.label}</span>
                  <div className="flex-1 h-2 bg-[#E6E2D8] overflow-hidden">
                    <div
                      className="h-full bg-[#8C6D3F]"
                      style={{width: `${row.percentagePlaceholder}%`}}
                    />
                  </div>
                  <span className="w-16 text-right text-[#5C574E] tabular-nums shrink-0">{row.note}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#6E675C] pt-6 leading-relaxed">
            Editable placeholder: Connect your live Google Business Profile or Trustpilot feed to populate verified
            scores and total review counts automatically.
          </p>
        </div>

        {/* Google Reviews & Trustpilot Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-white border border-[#E6E2D8] p-6 flex flex-col justify-between transition-colors hover:border-[#CFC8B9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#181715]">Google Reviews</span>
                <span className="text-xs text-[#6E675C]">Editable Link</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#8C6D3F] fill-[#8C6D3F]/20" strokeWidth={1.75} />
                ))}
              </div>
              <p className="text-sm text-[#5C574E] leading-relaxed">
                Read authentic guest impressions on Google Maps or share feedback after your stay in República.
              </p>
            </div>
            <div className="pt-5">
              <a
                href={HOTEL_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#181715] hover:text-[#8C6D3F] transition-colors"
              >
                <span>See Reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex-1 bg-white border border-[#E6E2D8] p-6 flex flex-col justify-between transition-colors hover:border-[#CFC8B9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#181715]">Trustpilot</span>
                <span className="text-xs text-[#6E675C]">Editable Placeholder</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#15803D] fill-[#15803D]/15" strokeWidth={1.75} />
                ))}
              </div>
              <p className="text-sm text-[#5C574E] leading-relaxed">
                Link your verified Trustpilot business profile URL here to display live traveler ratings.
              </p>
            </div>
            <div className="pt-5">
              <Link
                to="/contact#reviews"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#181715] hover:text-[#8C6D3F] transition-colors"
              >
                <span>See Reviews &amp; Configure Link</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Review Us QR Code Card */}
        <div className="lg:col-span-3 bg-[#181715] text-[#FAF9F6] p-6 sm:p-7 flex flex-col items-center justify-between text-center">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D5B582]">
              <QrCode className="w-4 h-4" />
              <span>Review Us</span>
            </div>
            <h3 className="font-serif text-2xl font-medium">Share Your Stay</h3>
          </div>

          <div className="bg-white p-3.5 my-5">
            <QRCodeSVG
              value={reviewDestinationPlaceholder}
              size={128}
              bgColor="#FFFFFF"
              fgColor="#181715"
              level="M"
              title="QR code linking to Hotel Okada review page placeholder"
            />
          </div>

          <div className="space-y-3 w-full">
            <p className="text-xs text-[#B8B2A6] leading-relaxed">
              Scan to open Hotel Okada on Google Maps (editable review link placeholder).
            </p>
            <a
              href={reviewDestinationPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 text-xs font-medium bg-[#8C6D3F] hover:bg-[#9E7C49] text-white transition-colors"
            >
              See Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Individual Customer Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GUEST_REVIEWS.map((review) => (
          <article
            key={review.id}
            className="bg-white border border-[#E6E2D8] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#CFC8B9]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? 'text-[#8C6D3F] fill-[#8C6D3F]' : 'text-[#D8D2C5]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#6E675C]">{review.sourceLabel}</span>
              </div>

              <p className="text-sm text-[#35322C] leading-relaxed">&ldquo;{review.comment}&rdquo;</p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EFECE4] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F3F1EC] border border-[#E6E2D8] flex items-center justify-center text-[#6E675C] shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#181715] truncate">{review.guestName}</p>
                <p className="text-xs text-[#6E675C] truncate">
                  {review.stayContext} · {review.dateLabel}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
