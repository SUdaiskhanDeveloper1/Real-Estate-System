'use client';
import { Avatar, Badge, Box, Button, Card, CardBody, HStack, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import { Agent } from '@/types/agent';

export default function AgentCard({ agent }: { agent: Agent }) {
  return <Card bg="white"><CardBody><Stack spacing={4}><HStack align="start"><Avatar size="xl" src={agent.photo} name={agent.name} /><Box flex={1}><HStack><Heading size="md">{agent.name}</Heading><Badge colorScheme="green">Verified</Badge></HStack><Text color="brand.textMuted">{agent.role}</Text><Text fontWeight="700">{agent.agency}</Text><HStack color="brand.textMuted"><MapPin size={16} /><Text>{agent.location}</Text></HStack></Box></HStack><SimpleGrid columns={3} spacing={3} textAlign="center"><Box><Text fontWeight="900">{agent.rating}</Text><HStack justify="center" color="brand.gold"><Star size={14} fill="#D4AF37" /></HStack></Box><Box><Text fontWeight="900">{agent.activeListings}</Text><Text fontSize="sm" color="brand.textMuted">Listings</Text></Box><Box><Text fontWeight="900">{agent.propertiesSold}</Text><Text fontSize="sm" color="brand.textMuted">Sales</Text></Box></SimpleGrid><HStack><Button flex={1} variant="outlineBrand">Contact</Button><Button as={Link} href={`/agents/${agent.id}`} flex={1} variant="primary">View profile</Button></HStack></Stack></CardBody></Card>;
}
