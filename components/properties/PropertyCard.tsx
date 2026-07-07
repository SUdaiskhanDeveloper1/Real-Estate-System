'use client';
import { Avatar, Badge, Box, Button, Card, CardBody, HStack, IconButton, Image, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Bath, BedDouble, Heart, MapPin, Ruler } from 'lucide-react';
import { Property } from '@/types/property';
import { agents } from '@/data/agents';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function PropertyCard({ property, saved, onToggleSave, view = 'grid' }: { property: Property; saved?: boolean; onToggleSave?: (id: string) => void; view?: 'grid' | 'list' }) {
  const agent = agents.find((a) => a.id === property.agentId);
  const isList = view === 'list';
  return (
    <MotionCard initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35 }} bg="white" overflow="hidden" direction={isList ? { base: 'column', md: 'row' } : 'column'}>
      <Box position="relative" flex={isList ? '0 0 320px' : 'auto'}>
        <Image src={property.images[0]} alt={property.title} h={isList ? { base: '230px', md: '100%' } : '230px'} w="full" objectFit="cover" />
        <Badge position="absolute" top={4} left={4} colorScheme={property.status === 'For Sale' ? 'blue' : property.status === 'For Rent' ? 'green' : 'yellow'} borderRadius="full" px={3}>{property.status}</Badge>
        <IconButton aria-label={saved ? 'Remove property from saved' : 'Save property'} icon={<Heart fill={saved ? '#D4AF37' : 'none'} />} position="absolute" top={4} right={4} borderRadius="full" onClick={() => onToggleSave?.(property.id)} />
      </Box>
      <CardBody>
        <Stack spacing={4} h="full">
          <HStack justify="space-between"><Text fontWeight="900" fontSize="2xl" color="brand.blue">{formatPrice(property.price, property.status)}</Text><Badge variant="gold">{property.type}</Badge></HStack>
          <VStack align="start" spacing={1}><Text fontWeight="900" fontSize="lg">{property.title}</Text><HStack color="brand.textMuted"><MapPin size={16} /><Text>{property.location}</Text></HStack></VStack>
          <HStack color="brand.textMuted" spacing={5} wrap="wrap"><HStack><BedDouble size={17} /><Text>{property.bedrooms} Beds</Text></HStack><HStack><Bath size={17} /><Text>{property.bathrooms} Baths</Text></HStack><HStack><Ruler size={17} /><Text>{property.area} sq ft</Text></HStack></HStack>
          <HStack justify="space-between" pt={2}><HStack><Avatar size="sm" name={agent?.name} src={agent?.photo} /><Text fontSize="sm" fontWeight="700">{agent?.name}</Text></HStack><Button as={Link} href={`/properties/${property.slug}`} variant="primary" size="sm">View details</Button></HStack>
        </Stack>
      </CardBody>
    </MotionCard>
  );
}
