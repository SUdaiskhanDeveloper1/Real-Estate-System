'use client';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { Property } from '@/types/property';
import PropertyCard from './PropertyCard';
import EmptyState from '@/components/ui/EmptyState';

export default function PropertyGrid({ properties, savedIds, onToggleSave, view }: { properties: Property[]; savedIds: string[]; onToggleSave: (id: string) => void; view: 'grid' | 'list' }) {
  if (!properties.length) return <EmptyState title="No matching properties" text="Try clearing filters or widening your search criteria." buttonText="Clear filters" href="/properties" />;
  if (view === 'list') return <Stack spacing={5}>{properties.map((property) => <PropertyCard key={property.id} property={property} saved={savedIds.includes(property.id)} onToggleSave={onToggleSave} view="list" />)}</Stack>;
  return <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing={6}>{properties.map((property) => <PropertyCard key={property.id} property={property} saved={savedIds.includes(property.id)} onToggleSave={onToggleSave} />)}</SimpleGrid>;
}
