'use client';
import { SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { Bath, BedDouble, Car, Home, Ruler, Calendar } from 'lucide-react';
import { Property } from '@/types/property';

export default function PropertyStats({ property }: { property: Property }) {
  const stats = [['Bedrooms', property.bedrooms, BedDouble], ['Bathrooms', property.bathrooms, Bath], ['Area', `${property.area} sqft`, Ruler], ['Garage', property.garage, Car], ['Type', property.type, Home], ['Built', property.yearBuilt, Calendar]];
  return <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4}>{stats.map(([label, value, Icon]: any) => <Stat key={label} bg="white" p={5} borderRadius="20px" border="1px solid" borderColor="brand.softGrey"><Icon size={20} /><StatLabel mt={3}>{label}</StatLabel><StatNumber fontSize="lg">{value}</StatNumber></Stat>)}</SimpleGrid>;
}
