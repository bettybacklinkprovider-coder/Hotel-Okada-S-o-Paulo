import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {GALLERY_PHOTOS, GalleryPhoto} from '../data/hotelData';
import {HotelImage} from './HotelImage';

const GALLERY_FILTERS: Array<{key: 'all' | GalleryPhoto['category']; label: string}> = [
  {key: 'all', label: 'All Photographs'},
  {key: 'exterior', label: 'Exterior'},
  {key: 'rooms', label: 'Rooms'},
  {key: 'reception', label: 'Reception'},
  {key: 'interior', label: 'Interior Design'},
  {key: 'facilities', label: 'Facilities'},
];

export function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryPhoto['category']>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredPhotos.length));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length,
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium tracking-wider uppercase text-[#8C6D3F]">Photo Gallery</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#181715]">
            Architecture, Suites &amp; Reception
          </h2>
          <p className="text-sm sm:text-base text-[#5C574E] leading-relaxed">
            Explore Hotel Okada’s exterior entrance, reception lounge, guest rooms, and interior detailing. Click any
            photograph to inspect it in full screen.
          </p>
        </div>

        {/* Interactive Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F3F1EC] p-1 border border-[#E6E2D8]">
          {GALLERY_FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => {
                setActiveFilter(filter.key);
                setLightboxIndex(null);
              }}
              className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-[#181715] text-[#FAF9F6]'
                  : 'text-[#5C574E] hover:text-[#181715]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group text-left bg-white border border-[#E6E2D8] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3F]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EFECE4]">
              <HotelImage
                src={photo.image}
                alt={photo.title}
                fallbackTitle={photo.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                  photo.objectPosition || 'object-center'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 bg-[#181715]/90 text-white px-3.5 py-2 text-xs font-medium">
                  <Expand className="w-3.5 h-3.5" />
                  <span>View Larger</span>
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5 space-y-1">
              <p className="text-xs text-[#8C6D3F] font-medium">{photo.categoryLabel}</p>
              <h3 className="font-serif text-xl font-semibold text-[#181715]">{photo.title}</h3>
              <p className="text-xs text-[#5C574E] leading-relaxed">{photo.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 w-11 h-11 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredPhotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)
                }
                aria-label="Previous photo"
                className="absolute left-3 sm:left-6 w-11 h-11 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
                aria-label="Next photo"
                className="absolute right-3 sm:right-6 w-11 h-11 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full space-y-4">
            <div className="relative bg-[#181715] aspect-[16/10] max-h-[75vh] mx-auto overflow-hidden">
              <HotelImage
                src={activePhoto.image}
                alt={activePhoto.title}
                fallbackTitle={activePhoto.title}
                loading="eager"
                className={`w-full h-full object-contain ${activePhoto.objectPosition || 'object-center'}`}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white px-1">
              <div>
                <p className="text-xs text-[#D5B582]">{activePhoto.categoryLabel}</p>
                <h3 className="font-serif text-2xl font-medium">{activePhoto.title}</h3>
                <p className="text-sm text-[#D6D0C4] mt-0.5">{activePhoto.caption}</p>
              </div>
              <p className="text-xs text-[#B8B2A6] tabular-nums shrink-0">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
