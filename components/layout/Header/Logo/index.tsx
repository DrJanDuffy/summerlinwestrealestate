'use client';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  sticky?: boolean;
}

export default function Logo({
  className = 'flex items-center',
  width = 150,
  height = 68,
  sticky = false,
}: LogoProps) {
  // Add a timestamp to force re-render and avoid caching issues
  const timestamp = Date.now();
  
  return (
    <Link href="/" className={className}>
      <div 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-lg flex items-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          minWidth: `${width}px`,
          minHeight: `${height}px`
        }}
        key={`logo-${timestamp}`}
      >
        <div className="flex flex-col justify-center w-full">
          <span className="text-sm font-bold leading-tight text-center">Summerlin West</span>
          <span className="text-xs leading-tight text-center">Real Estate</span>
          <span className="text-xs text-blue-200 leading-tight text-center">Dr. Jan Duffy, REALTOR®</span>
        </div>
      </div>
    </Link>
  );
}
