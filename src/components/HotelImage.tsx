import {useState} from 'react';
import {Building2} from 'lucide-react';

interface HotelImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function HotelImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Hotel Okada',
  loading = 'lazy',
}: HotelImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#EFECE4] via-[#E5DFD3] to-[#D8CFC0] flex flex-col items-center justify-center p-6 text-center text-[#4B463D]"
      >
        <Building2 className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
        <span className="font-serif text-lg font-medium tracking-tight">{fallbackTitle}</span>
        <span className="text-xs text-[#6E675C] mt-1">República · São Paulo</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
