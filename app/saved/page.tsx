'use client';
import { Box, Button, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/properties/PropertyCard';
import EmptyState from '@/components/ui/EmptyState';
import { properties } from '@/data/properties';
import { useState } from 'react';

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState<string[]>(['p1', 'p3']);
  const saved = properties.filter((p) => savedIds.includes(p.id));
  return <><Header /><main><Container maxW="7xl" py={12}><Stack spacing={6}><Box><Heading size="2xl">Saved properties</Heading><Text color="brand.textMuted">Your frontend-only favourites list. Saved state resets on refresh.</Text></Box>{saved.length === 0 ? <EmptyState title="No Saved Properties Yet" text="Start exploring properties and save your favourites to compare them later." buttonText="Browse Properties" /> : <><Box bg="white" p={5} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Heading size="md">Compare selected properties</Heading><Text color="brand.textMuted">Comparison UI placeholder for shortlisted homes.</Text><Button mt={4} variant="outlineBrand">Open comparison</Button></Box><SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>{saved.map((property) => <PropertyCard key={property.id} property={property} saved onToggleSave={(id) => setSavedIds((items) => items.filter((x) => x !== id))} />)}</SimpleGrid></>}</Stack></Container></main><Footer /></>;
}
