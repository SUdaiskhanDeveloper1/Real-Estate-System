import { Property } from '@/types/property';

export interface PropertyFilterState {
  location: string;
  type: string;
  status: string;
  bedrooms: string;
  bathrooms: string;
  maxPrice: string;
  amenities: string[];
  sort: string;
}

export const defaultFilters: PropertyFilterState = { location: '', type: '', status: '', bedrooms: '', bathrooms: '', maxPrice: '', amenities: [], sort: 'featured' };

export function filterProperties(properties: Property[], filters: PropertyFilterState) {
  let result = properties.filter((property) => {
    const matchesLocation = !filters.location || `${property.location} ${property.city}`.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = !filters.type || property.type === filters.type;
    const matchesStatus = !filters.status || property.status === filters.status;
    const matchesBeds = !filters.bedrooms || property.bedrooms >= Number(filters.bedrooms);
    const matchesBaths = !filters.bathrooms || property.bathrooms >= Number(filters.bathrooms);
    const matchesPrice = !filters.maxPrice || property.price <= Number(filters.maxPrice);
    const matchesAmenities = filters.amenities.length === 0 || filters.amenities.every((a) => property.amenities.includes(a));
    return matchesLocation && matchesType && matchesStatus && matchesBeds && matchesBaths && matchesPrice && matchesAmenities;
  });

  if (filters.sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
  if (filters.sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
  if (filters.sort === 'newest') result = [...result].sort((a, b) => b.yearBuilt - a.yearBuilt);
  if (filters.sort === 'featured') result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
  return result;
}
