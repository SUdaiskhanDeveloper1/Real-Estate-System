export type PropertyStatus = 'For Sale' | 'For Rent' | 'New Build';
export type PropertyType = 'Apartment' | 'House' | 'Villa' | 'Townhouse' | 'Penthouse' | 'Studio' | 'Commercial';

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  status: PropertyStatus;
  type: PropertyType;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  yearBuilt: number;
  description: string;
  images: string[];
  amenities: string[];
  agentId: string;
  featured: boolean;
  views: number;
  savedCount: number;
}
