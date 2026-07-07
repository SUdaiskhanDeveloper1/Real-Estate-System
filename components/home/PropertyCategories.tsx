'use client';
import { Box, Container, SimpleGrid, Text, Heading } from '@chakra-ui/react';
import { Building, Home, Hotel, Landmark, Store, Warehouse } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const cats = [['Apartments',Building],['Family homes',Home],['Villas',Hotel],['Penthouses',Landmark],['Commercial',Store],['New builds',Warehouse]];
export default function PropertyCategories() { return <Container maxW="7xl" py={10}><SectionHeading eyebrow="Categories" title="Search by property type" /><SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={5}>{cats.map(([label, Icon]: any) => <Box key={label} bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey" textAlign="center"><Box color="brand.blue" display="inline-block"><Icon size={32} /></Box><Heading size="sm" mt={3}>{label}</Heading><Text color="brand.textMuted" fontSize="sm">Explore listings</Text></Box>)}</SimpleGrid></Container>; }
