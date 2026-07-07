'use client';
import { Box, Container, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { CalendarCheck, Heart, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [['Search smarter', 'Use filters to discover matching homes.', Search], ['Save favourites', 'Shortlist properties and compare later.', Heart], ['Contact agents', 'Send enquiries and schedule viewings.', CalendarCheck]];
export default function HowItWorks() { return <Container maxW="7xl" py={16}><SectionHeading eyebrow="Process" title="How EstatePro works" /><SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>{steps.map(([t, d, Icon]: any) => <Box key={t} bg="white" p={8} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Box color="brand.blue"><Icon size={34} /></Box><Heading size="md" mt={4}>{t}</Heading><Text color="brand.textMuted" mt={2}>{d}</Text></Box>)}</SimpleGrid></Container>; }
