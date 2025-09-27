'use client';
import Image from 'next/image';

interface MarketInsightImageProps {
  title: string;
  category: string;
  className?: string;
}

export default function MarketInsightImage({ title, category, className = '' }: MarketInsightImageProps) {
  // Generate a placeholder image URL based on the title and category
  const getImageUrl = (title: string, category: string) => {
    const baseUrl = 'https://images.unsplash.com/photo';
    const categoryMap: Record<string, string> = {
      'Selling Tips': '1600x900/?real-estate,house,selling',
      'Market Analysis': '1600x900/?charts,data,analytics',
      'Affordability': '1600x900/?money,calculator,finance',
      'New Construction': '1600x900/?construction,building,home',
      'Buying Tips': '1600x900/?home,keys,house',
      'Market News': '1600x900/?news,newspaper,market'
    };
    
    const imageQuery = categoryMap[category] || '1600x900/?real-estate,house';
    return `${baseUrl}-${imageQuery}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={getImageUrl(title, category)}
        alt={`${category}: ${title}`}
        width={400}
        height={225}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>
      </div>
    </div>
  );
}
