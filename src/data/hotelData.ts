import heroHotelImg from '../assets/images/hero_hotel_okada_1794554842052.jpg';
import aboutLoungeImg from '../assets/images/about_hotel_lounge_1794554841970.jpg';
import roomDeluxeImg from '../assets/images/room_deluxe_suite_1794554842243.jpg';
import roomExecutiveImg from '../assets/images/room_executive_king_1794554844077.jpg';
import roomFamilyImg from '../assets/images/room_family_residence_1794554843103.jpg';
import offerDiningImg from '../assets/images/offer_romantic_dining_1794554843979.jpg';
import facilityWifiImg from '../assets/images/facility_wifi_workspace_1794555213825.jpg';
import facilityHousekeepingImg from '../assets/images/facility_daily_housekeeping_1794555214117.jpg';
import facilitySecureImg from '../assets/images/facility_secure_access_1794555214167.jpg';

export interface RoomCategory {
  id: string;
  name: string;
  category: 'standard' | 'executive' | 'suite' | 'family';
  shortDescription: string;
  fullDescription: string;
  priceLabel: string;
  isPricePlaceholder: boolean;
  occupancy: string;
  maxGuests: number;
  bedConfig: string;
  areaLabel: string;
  checkInOut: string;
  facilities: string[];
  image: string;
  imageAlt: string;
  featuredOnHome?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: 'wifi' | 'bed' | 'sparkles' | 'clock' | 'shield' | 'mapPin';
  image: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  category: 'leisure' | 'extended' | 'business' | 'seasonal';
  summary: string;
  description: string;
  priceNote: string;
  includedFacilities: string[];
  bookingConditions: string;
  image: string;
  imageAlt: string;
  featuredOnHome?: boolean;
}

export interface GuestReview {
  id: string;
  guestName: string;
  stayContext: string;
  rating: number;
  dateLabel: string;
  comment: string;
  sourceLabel: string;
  isPlaceholder: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'interior' | 'reception' | 'facilities';
  categoryLabel: string;
  caption: string;
  image: string;
  objectPosition?: string;
}

export const HOTEL_INFO = {
  name: 'Hotel Okada',
  phoneDisplay: '+55 11 5461-9665',
  phoneHref: 'tel:+551154619665',
  whatsappUrl: 'https://wa.me/551154619665',
  address: 'R. Rego Freitas, S/N - República, São Paulo - SP, 01220-010, Brazil',
  shortAddress: 'República, São Paulo - SP, Brazil',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=R.+Rego+Freitas,+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01220-010,+Brazil',
  googleMapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Rego+Freitas,+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01220-010,+Brazil',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=R.+Rego+Freitas,+Republica,+Sao+Paulo+-+SP,+01220-010,+Brazil&t=&z=16&ie=UTF8&iwloc=&output=embed',
  checkInTime: '14:00 (Editable policy placeholder)',
  checkOutTime: '12:00 (Editable policy placeholder)',
  emailPlaceholder: 'reservations@hotelokada.com.br (Editable placeholder)',
};

export const IMAGES = {
  hero: heroHotelImg,
  lounge: aboutLoungeImg,
  deluxeSuite: roomDeluxeImg,
  executiveKing: roomExecutiveImg,
  familyResidence: roomFamilyImg,
  offerDining: offerDiningImg,
  facilityWifi: facilityWifiImg,
  facilityHousekeeping: facilityHousekeepingImg,
  facilitySecure: facilitySecureImg,
};

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'deluxe-king-suite',
    name: 'Deluxe King Suite',
    category: 'suite',
    shortDescription:
      'Sunlit corner accommodation with warm timber detailing, sheer linen drapery, and views over central São Paulo.',
    fullDescription:
      'Designed for tranquil rest above the rhythm of República, the Deluxe King Suite combines crisp bedding, indirect architectural cove lighting, and a quiet seating corner ideal for evening unwinding.',
    priceLabel: 'Rate on Inquiry · Editable Placeholder (BRL / night)',
    isPricePlaceholder: true,
    occupancy: 'Up to 2 Guests',
    maxGuests: 2,
    bedConfig: '1 King Bed',
    areaLabel: 'Room size: Editable placeholder',
    checkInOut: 'Check-in 14:00 · Check-out 12:00 (Editable)',
    facilities: ['Complimentary Wi-Fi', 'Climate Control', 'Daily Housekeeping', 'En-Suite Shower', 'Blackout Curtains'],
    image: IMAGES.deluxeSuite,
    imageAlt: 'Deluxe King Suite at Hotel Okada overlooking the São Paulo skyline',
    featuredOnHome: true,
  },
  {
    id: 'executive-business-king',
    name: 'Executive Business King',
    category: 'executive',
    shortDescription:
      'Tailored for solo executives and extended city stays with a dedicated walnut work desk and lounge seating.',
    fullDescription:
      'Balanced for productive mornings and calm evenings in São Paulo, featuring an ergonomic timber workstation, high-speed wireless connectivity, and warm architectural sconce lighting.',
    priceLabel: 'Rate on Inquiry · Editable Placeholder (BRL / night)',
    isPricePlaceholder: true,
    occupancy: '1–2 Guests',
    maxGuests: 2,
    bedConfig: '1 King Bed',
    areaLabel: 'Room size: Editable placeholder',
    checkInOut: 'Check-in 14:00 · Check-out 12:00 (Editable)',
    facilities: ['Complimentary Wi-Fi', 'Dedicated Work Desk', 'Climate Control', 'Daily Housekeeping', 'In-Room Safe'],
    image: IMAGES.executiveKing,
    imageAlt: 'Executive Business King room with bespoke walnut desk and lounge chair',
    featuredOnHome: true,
  },
  {
    id: 'family-residence-suite',
    name: 'Family Residence Suite',
    category: 'family',
    shortDescription:
      'Generously proportioned twin-queen sanctuary with a connected sitting alcove for families and small groups.',
    fullDescription:
      'Thoughtfully laid out for traveling families or companions visiting São Paulo together, offering two comfortable queen beds, a bright living alcove, and convenient access to República transit.',
    priceLabel: 'Rate on Inquiry · Editable Placeholder (BRL / night)',
    isPricePlaceholder: true,
    occupancy: 'Up to 4 Guests',
    maxGuests: 4,
    bedConfig: '2 Queen Beds',
    areaLabel: 'Room size: Editable placeholder',
    checkInOut: 'Check-in 14:00 · Check-out 12:00 (Editable)',
    facilities: ['Complimentary Wi-Fi', 'Seating Alcove', 'Climate Control', 'Daily Housekeeping', '24h Reception Support'],
    image: IMAGES.familyResidence,
    imageAlt: 'Family Residence Suite with two queen beds and sunlit sitting area',
    featuredOnHome: true,
  },
  {
    id: 'standard-urban-room',
    name: 'Standard Urban Room',
    category: 'standard',
    shortDescription:
      'Clean, quiet comfort for short downtown visits in República with essential hospitality amenities.',
    fullDescription:
      'An understated urban retreat steps from São Paulo’s historic theaters, metro connections, and dining streets, offering dependable rest, daily housekeeping, and attentive reception care.',
    priceLabel: 'Rate on Inquiry · Editable Placeholder (BRL / night)',
    isPricePlaceholder: true,
    occupancy: '1–2 Guests',
    maxGuests: 2,
    bedConfig: '1 Queen Bed',
    areaLabel: 'Room size: Editable placeholder',
    checkInOut: 'Check-in 14:00 · Check-out 12:00 (Editable)',
    facilities: ['Complimentary Wi-Fi', 'Climate Control', 'Daily Housekeeping', 'Private Bathroom'],
    image: IMAGES.lounge,
    imageAlt: 'Calm architectural interior at Hotel Okada',
    featuredOnHome: false,
  },
];

export const HOTEL_FACILITIES: FacilityItem[] = [
  {
    id: 'wifi',
    title: 'Complimentary Wi-Fi',
    description: 'Reliable wireless internet access across guest rooms and reception lounge areas.',
    iconName: 'wifi',
    image: IMAGES.facilityWifi,
    imageAlt: 'Walnut hotel work desk with laptop and daylight for complimentary Wi-Fi access',
  },
  {
    id: 'accommodation',
    title: 'Comfortable Accommodation',
    description: 'Quiet, climate-controlled guest rooms furnished for restful overnight and multi-day stays.',
    iconName: 'bed',
    image: IMAGES.deluxeSuite,
    imageAlt: 'Quiet climate-controlled king room with crisp cotton bedding',
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    description: 'Attentive room preparation and linen service maintained throughout your stay.',
    iconName: 'sparkles',
    image: IMAGES.facilityHousekeeping,
    imageAlt: 'Freshly folded white cotton towels and guest amenities prepared by housekeeping',
  },
  {
    id: 'reception',
    title: '24-Hour Front Desk Reception',
    description: 'Round-the-clock guest assistance for smooth arrivals, check-out support, and local directions.',
    iconName: 'clock',
    image: IMAGES.lounge,
    imageAlt: 'Hotel Okada travertine reception desk and lounge area',
    objectPosition: 'object-right',
  },
  {
    id: 'security',
    title: 'Secure Guest Access',
    description: 'Controlled hotel entry and reception oversight in central República.',
    iconName: 'shield',
    image: IMAGES.facilitySecure,
    imageAlt: 'Timber guestroom door with electronic keycard access in warm hotel corridor',
  },
  {
    id: 'location',
    title: 'Central República Access',
    description: 'Direct proximity to R. Rego Freitas, metro stations, cultural venues, and business corridors.',
    iconName: 'mapPin',
    image: IMAGES.hero,
    imageAlt: 'Hotel Okada illuminated exterior entrance in central São Paulo',
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'weekend-getaway',
    title: 'Weekend Getaway',
    category: 'leisure',
    summary: 'Unwind in central São Paulo from Friday to Sunday with flexible direct-inquiry options.',
    description:
      'Designed for couples and urban travelers exploring São Paulo’s cultural center, dining halls, and architecture over the weekend.',
    priceNote: 'Rate & availability upon direct inquiry · Editable placeholder',
    includedFacilities: ['Comfortable Accommodation', 'Complimentary Wi-Fi', 'Daily Housekeeping', '24h Reception'],
    bookingConditions: 'Valid for Friday–Sunday stays. Subject to room availability via direct WhatsApp or phone confirmation.',
    image: IMAGES.deluxeSuite,
    imageAlt: 'Weekend Getaway accommodation overlooking São Paulo',
    featuredOnHome: true,
  },
  {
    id: 'extended-stay',
    title: 'Extended Stay Package',
    category: 'extended',
    summary: 'Tailored multi-night arrangements for guests spending a week or longer in São Paulo.',
    description:
      'Ideal for consultants, visiting academics, and long-stay guests seeking consistent housekeeping and quiet work-friendly rooms in República.',
    priceNote: 'Custom multi-night rate upon inquiry · Editable placeholder',
    includedFacilities: ['Dedicated Work Desk (Executive rooms)', 'Complimentary Wi-Fi', 'Daily Housekeeping', '24h Reception'],
    bookingConditions: 'Applies to consecutive multi-night bookings. Terms confirmed directly with Hotel Okada reservations.',
    image: IMAGES.executiveKing,
    imageAlt: 'Extended Stay Package executive room with workspace',
    featuredOnHome: true,
  },
  {
    id: 'romantic-stay',
    title: 'Romantic Stay Package',
    category: 'leisure',
    summary: 'An intimate city retreat crafted for anniversaries, celebrations, and quiet evenings.',
    description:
      'Celebrate a special occasion in the heart of São Paulo with tranquil suite comfort and personalized arrangement requests coordinated with our front desk.',
    priceNote: 'Package rate upon inquiry · Editable placeholder',
    includedFacilities: ['Deluxe Room Accommodation', 'Complimentary Wi-Fi', 'Daily Housekeeping', 'Concierge Coordination'],
    bookingConditions: 'Advance inquiry recommended via WhatsApp (+55 11 5461-9665) to confirm suite availability and preferences.',
    image: IMAGES.offerDining,
    imageAlt: 'Romantic Stay Package evening ambiance',
    featuredOnHome: true,
  },
  {
    id: 'family-stay',
    title: 'Family Stay Package',
    category: 'leisure',
    summary: 'Spacious twin-queen accommodation for families visiting São Paulo together.',
    description:
      'Keep everyone comfortably accommodated under one roof with easy transit connections across the city and supportive 24-hour reception care.',
    priceNote: 'Family rate upon inquiry · Editable placeholder',
    includedFacilities: ['Twin-Queen Accommodation', 'Complimentary Wi-Fi', 'Daily Housekeeping', '24h Front Desk'],
    bookingConditions: 'Occupancy limits apply per room category. Confirm guest count and dates directly prior to arrival.',
    image: IMAGES.familyResidence,
    imageAlt: 'Family Stay Package spacious suite',
    featuredOnHome: true,
  },
  {
    id: 'business-stay',
    title: 'Business Stay Package',
    category: 'business',
    summary: 'Streamlined downtown stays built around reliability, connectivity, and swift check-in.',
    description:
      'Positioned in República for direct access to São Paulo commercial districts, offering quiet rooms, dependable Wi-Fi, and 24-hour reception.',
    priceNote: 'Corporate inquiry rate · Editable placeholder',
    includedFacilities: ['Executive Workspace', 'Complimentary Wi-Fi', '24h Reception', 'Daily Housekeeping'],
    bookingConditions: 'Flexible arrival coordination available upon advance notice with front desk.',
    image: IMAGES.executiveKing,
    imageAlt: 'Business Stay Package workstation and bedroom',
    featuredOnHome: false,
  },
  {
    id: 'seasonal-special',
    title: 'Seasonal Special Offers',
    category: 'seasonal',
    summary: 'Curated seasonal stays aligned with São Paulo events, exhibitions, and holidays.',
    description:
      'Contact our reservations desk directly for current seasonal availability during major cultural festivals, trade fairs, and holiday weekends.',
    priceNote: 'Seasonal quote on request · Editable placeholder',
    includedFacilities: ['Comfortable Accommodation', 'Complimentary Wi-Fi', 'Daily Housekeeping', 'Local Guidance'],
    bookingConditions: 'Rates and minimum stay policies vary by seasonal calendar. Verified directly upon inquiry.',
    image: IMAGES.hero,
    imageAlt: 'Hotel Okada facade at twilight for seasonal stays',
    featuredOnHome: false,
  },
];

export const RATING_BREAKDOWN_PLACEHOLDER = [
  { stars: 5, label: '5 Stars', percentagePlaceholder: 0, note: 'Editable' },
  { stars: 4, label: '4 Stars', percentagePlaceholder: 0, note: 'Editable' },
  { stars: 3, label: '3 Stars', percentagePlaceholder: 0, note: 'Editable' },
  { stars: 2, label: '2 Stars', percentagePlaceholder: 0, note: 'Editable' },
  { stars: 1, label: '1 Star', percentagePlaceholder: 0, note: 'Editable' },
];

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'placeholder-review-1',
    guestName: 'Guest Feedback Slot 01 (Editable Placeholder)',
    stayContext: 'Business Stay · República, São Paulo',
    rating: 5,
    dateLabel: 'Editable Date Placeholder',
    comment:
      'Replace this editable placeholder with a verified guest review from your Google Business Profile or reservation log highlighting room comfort and front desk service.',
    sourceLabel: 'Editable Review Placeholder',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-review-2',
    guestName: 'Guest Feedback Slot 02 (Editable Placeholder)',
    stayContext: 'Weekend Stay · São Paulo',
    rating: 5,
    dateLabel: 'Editable Date Placeholder',
    comment:
      'Replace this editable placeholder with authentic guest commentary about Hotel Okada’s convenient location on R. Rego Freitas and peaceful overnight rest.',
    sourceLabel: 'Editable Review Placeholder',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-review-3',
    guestName: 'Guest Feedback Slot 03 (Editable Placeholder)',
    stayContext: 'Family Visit · São Paulo',
    rating: 5,
    dateLabel: 'Editable Date Placeholder',
    comment:
      'Replace this editable placeholder with genuine feedback from a verified stay regarding housekeeping standards, Wi-Fi reliability, and reception hospitality.',
    sourceLabel: 'Editable Review Placeholder',
    isPlaceholder: true,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-exterior',
    title: 'Hotel Entrance & Twilight Facade',
    category: 'exterior',
    categoryLabel: 'Exterior',
    caption: 'Warm architectural limestone and timber arrival framing the entrance in São Paulo.',
    image: IMAGES.hero,
  },
  {
    id: 'gal-reception',
    title: 'Reception & Guest Lounge',
    category: 'reception',
    categoryLabel: 'Reception',
    caption: 'Calm seating lounge and reception desk welcoming arrivals day and night.',
    image: IMAGES.lounge,
    objectPosition: 'object-right',
  },
  {
    id: 'gal-deluxe',
    title: 'Deluxe King Suite',
    category: 'rooms',
    categoryLabel: 'Rooms',
    caption: 'Panoramic city framing paired with warm timber paneling and crisp linens.',
    image: IMAGES.deluxeSuite,
  },
  {
    id: 'gal-executive',
    title: 'Executive Business King',
    category: 'rooms',
    categoryLabel: 'Rooms',
    caption: 'Thoughtful work desk and curved lounge seating designed for quiet focus.',
    image: IMAGES.executiveKing,
  },
  {
    id: 'gal-family',
    title: 'Family Residence Suite',
    category: 'interior',
    categoryLabel: 'Interior Design',
    caption: 'Spacious twin-queen layout with natural daylight and limestone finishes.',
    image: IMAGES.familyResidence,
  },
  {
    id: 'gal-terrace',
    title: 'Evening Hospitality & Terrace Moments',
    category: 'facilities',
    categoryLabel: 'Facilities',
    caption: 'Curated hospitality details for weekend and romantic stay inquiries.',
    image: IMAGES.offerDining,
  },
];

export function buildWhatsAppBookingLink(customMessage?: string): string {
  const defaultMsg =
    'Hello Hotel Okada, I would like to inquire about room availability and rates.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `${HOTEL_INFO.whatsappUrl}?text=${text}`;
}
