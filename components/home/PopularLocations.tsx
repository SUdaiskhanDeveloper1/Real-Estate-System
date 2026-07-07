'use client';
import { Box, Container, SimpleGrid, Text, Heading } from '@chakra-ui/react';
import { locations } from '@/data/locations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PopularLocations() { return <Container maxW="7xl" py={10}><SectionHeading eyebrow="Locations" title="Popular property markets" /><SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>{locations.map((l, i) => <Box key={l} minH="150px" p={6} borderRadius="24px" color="white" bg="brand.navy" position="relative" overflow="hidden"><Heading size="md">{l}</Heading><Text color="whiteAlpha.800">{120 + i * 34} listings</Text><Box position="absolute" inset="auto -30px -30px auto" w="110px" h="110px" borderRadius="full" bg="whiteAlpha.200" /></Box>)}</SimpleGrid></Container>; }
