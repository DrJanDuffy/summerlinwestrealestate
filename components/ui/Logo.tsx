'use client';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = 'flex items-center',
  width = 150,
  height = 68,
}: LogoProps) {
  return (
    <Link href="/" className={className}>
      <div 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg flex items-center"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="flex flex-col">
          <span className="text-sm font-bold">Summerlin West</span>
          <span className="text-xs">Real Estate</span>
          <span className="text-xs text-blue-200">Dr. Jan Duffy, REALTOR®</span>
        </div>
      </div>
    </Link>
  );
}