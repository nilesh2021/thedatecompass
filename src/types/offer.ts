export interface Offer {
  id: number;
  name: string;
  slug: string;
  category: string;

  countries: string[];

  description: string;

  image: string;

  href: string;

  badge: string;

  rating: number;

  featured: boolean;

  accent: string;
}