import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Menu, X} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (subject?: string) => void;
}

const NAV_ITEMS = [
  {to: '/', label: 'Home'},
  {to: '/rooms', label: 'Rooms'},
  {to: '/offers', label: 'Special Offers'},
  {to: '/contact', label: 'Contact & Reviews'},
];

export function Navbar({onOpenBooking}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-[1.65rem] font-semibold tracking-tight text-[#181715] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F]"
        >
          Hotel Okada
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({isActive}) =>
                `text-sm font-medium whitespace-nowrap shrink-0 pb-1 border-b transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F] ${
                  isActive
                    ? 'text-[#181715] border-[#8C6D3F]'
                    : 'text-[#5C574E] border-transparent hover:text-[#181715] hover:border-[#CFC8B9]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single primary action + Mobile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F]"
          >
            Book Your Stay
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#181715] border border-[#E6E2D8] hover:bg-[#F3F1EC] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#FAF9F6] border-b border-[#E6E2D8] px-6 py-5 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({isActive}) =>
                  `py-2.5 text-base font-medium border-b border-[#EFECE4] transition-colors ${
                    isActive ? 'text-[#8C6D3F]' : 'text-[#181715] hover:text-[#8C6D3F]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-5 text-sm font-medium bg-[#181715] text-[#FAF9F6] hover:bg-[#2F2C27] transition-colors cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
