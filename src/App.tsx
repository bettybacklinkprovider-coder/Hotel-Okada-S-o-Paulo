import {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {BookingModal} from './components/BookingModal';
import {FloatingWhatsApp} from './components/FloatingWhatsApp';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {ContactReviewsPage} from './pages/ContactReviewsPage';
import {HomePage} from './pages/HomePage';
import {OffersPage} from './pages/OffersPage';
import {RoomsPage} from './pages/RoomsPage';

const PAGE_META: Record<string, {title: string; description: string}> = {
  '/': {
    title: 'Hotel Okada — Boutique Hospitality in República, São Paulo',
    description:
      'Welcome to Hotel Okada at R. Rego Freitas, S/N - República, São Paulo. Explore rooms, amenities, special stay packages, guest reviews, and WhatsApp booking.',
  },
  '/rooms': {
    title: 'Rooms & Accommodation | Hotel Okada — São Paulo',
    description:
      'Browse room categories, occupancy details, check-in policies, photo gallery, and direct WhatsApp reservations at Hotel Okada in São Paulo.',
  },
  '/offers': {
    title: 'Special Offers & Packages | Hotel Okada — São Paulo',
    description:
      'Discover Weekend Getaway, Extended Stay, Romantic Stay, Family Stay, Business, and Seasonal packages at Hotel Okada.',
  },
  '/contact': {
    title: 'Contact & Guest Reviews | Hotel Okada — São Paulo',
    description:
      'Contact Hotel Okada (+55 11 5461-9665), view directions to R. Rego Freitas in República, São Paulo, and read guest reviews.',
  },
};

function RouteEffects() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }

    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }, 60);
        return;
      }
    }

    window.scrollTo({top: 0, behavior: 'auto'});
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubject, setBookingSubject] = useState<string | undefined>(undefined);

  const handleOpenBooking = (subject?: string) => {
    setBookingSubject(subject);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#181715]">
      <RouteEffects />
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/rooms" element={<RoomsPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/offers" element={<OffersPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<ContactReviewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={bookingOpen}
        initialSubject={bookingSubject}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
