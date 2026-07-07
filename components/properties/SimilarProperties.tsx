'use client';
import { SimpleGrid } from '@chakra-ui/react';
import { properties } from '@/data/properties';
import PropertyCard from './PropertyCard';

export default function SimilarProperties({ currentId }: { currentId: string }) {
  return <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>{properties.filter((p) => p.id !== currentId).slice(0, 3).map((property) => <PropertyCard key={property.id} property={property} saved={false} />)}</SimpleGrid>;
}
