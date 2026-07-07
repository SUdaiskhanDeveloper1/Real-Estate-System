'use client';
import { SimpleGrid, HStack, Text } from '@chakra-ui/react';
import { CheckCircle2 } from 'lucide-react';

export default function PropertyFeatures({ amenities }: { amenities: string[] }) {
  return <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>{amenities.map((item) => <HStack key={item} bg="white" border="1px solid" borderColor="brand.softGrey" p={4} borderRadius="16px"><CheckCircle2 color="#10B981" /><Text fontWeight="700">{item}</Text></HStack>)}</SimpleGrid>;
}
