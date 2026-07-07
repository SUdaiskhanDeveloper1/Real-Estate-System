import { notFound } from 'next/navigation';
import { Box, Container, Grid, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AgentProfileHeader from '@/components/agents/AgentProfileHeader';
import LeadCaptureForm from '@/components/agents/LeadCaptureForm';
import PropertyCard from '@/components/properties/PropertyCard';
import { agents } from '@/data/agents';
import { properties } from '@/data/properties';

export function generateStaticParams() { return agents.map((a) => ({ id: a.id })); }

export default function AgentProfilePage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) notFound();
  const listings = properties.filter((p) => p.agentId === agent.id);
  return <><Header /><main><AgentProfileHeader agent={agent} /><Container maxW="7xl" py={12}><Grid templateColumns={{ base: '1fr', lg: '1fr 380px' }} gap={8}><Stack spacing={8}><Box bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Heading size="lg" mb={3}>About {agent.name}</Heading><Text color="brand.textMuted">{agent.bio}</Text></Box><Box><Heading size="lg" mb={5}>Active listings</Heading><SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>{listings.map((p) => <PropertyCard key={p.id} property={p} />)}</SimpleGrid></Box><Box bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Heading size="lg" mb={4}>Reviews</Heading><Text color="brand.textMuted">“Professional, responsive and extremely knowledgeable.”</Text><Text color="brand.textMuted" mt={3}>“Made the entire property search process feel simple.”</Text></Box></Stack><Box bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey" h="fit-content"><Heading size="lg" mb={5}>Contact agent</Heading><LeadCaptureForm /></Box></Grid></Container></main><Footer /></>;
}
