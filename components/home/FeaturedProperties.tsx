'use client';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FeaturedProperties() {
  return <Container maxW="7xl" py={16}><SectionHeading eyebrow="Featured" title="Handpicked premium properties" text="Explore curated listings with trusted agents, strong locations and standout presentation." /><SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>{properties.filter((p) => p.featured).map((p) => <PropertyCard key={p.id} property={p} />)}</SimpleGrid></Container>;
}
