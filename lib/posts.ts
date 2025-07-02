export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'summerlin-market-update-2024',
    title: 'Summerlin Market Update 2024',
    excerpt: 'Get the latest insights and trends for the Summerlin real estate market in 2024.',
    date: '2024-05-01',
    image: 'https://placehold.co/800x320?text=Market+Update',
  },
  {
    slug: 'best-communities-in-summerlin',
    title: 'Best Communities in Summerlin',
    excerpt: 'Explore the top neighborhoods and communities in Summerlin for families and professionals.',
    date: '2024-04-15',
    image: 'https://placehold.co/800x320?text=Communities',
  },
  {
    slug: 'summerlin-home-buying-tips',
    title: 'Summerlin Home Buying Tips',
    excerpt: 'Essential tips for buying a home in Summerlin West, from local experts.',
    date: '2024-03-20',
    image: 'https://placehold.co/800x320?text=Home+Buying+Tips',
  },
]; 