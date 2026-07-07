'use client';
import { Box, Container, SimpleGrid, Text, Heading, Avatar, HStack } from '@chakra-ui/react';
import SectionHeading from '@/components/ui/SectionHeading';

const reviews = ['The clean search experience made finding our next home simple.', 'EstatePro feels polished, professional and easy to trust.', 'The agent dashboard concept is ideal for modern property teams.'];
export default function Testimonials() { return <Container maxW="7xl" py={10}><SectionHeading eyebrow="Testimonials" title="Trusted by buyers and agents" /><SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>{reviews.map((r, i) => <Box key={r} bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Text color="brand.textMuted">“{r}”</Text><HStack mt={5}><Avatar name={`Client ${i}`} /><Box><Heading size="sm">Verified Client</Heading><Text fontSize="sm" color="brand.textMuted">EstatePro user</Text></Box></HStack></Box>)}</SimpleGrid></Container>; }
