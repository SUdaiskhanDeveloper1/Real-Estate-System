'use client';
import { Avatar, Badge, Box, Button, Container, Grid, HStack, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Stack, Text } from '@chakra-ui/react';
import { Agent } from '@/types/agent';
import { Mail, Phone, ShieldCheck, Star } from 'lucide-react';

export default function AgentProfileHeader({ agent }: { agent: Agent }) {
  const stats = [['Active listings', agent.activeListings], ['Properties sold', agent.propertiesSold], ['Years experience', agent.yearsExperience], ['Client rating', agent.rating]];
  return <Box bg="brand.navy" color="white" py={14}><Container maxW="7xl"><Grid templateColumns={{ base: '1fr', md: 'auto 1fr' }} gap={8} alignItems="center"><Avatar size="2xl" src={agent.photo} name={agent.name} border="4px solid white" /><Stack><HStack><Heading size="xl">{agent.name}</Heading><Badge colorScheme="green"><HStack><ShieldCheck size={14} /><Text>Verified</Text></HStack></Badge></HStack><Text color="whiteAlpha.800">{agent.role} at {agent.agency}</Text><HStack color="brand.gold"><Star size={18} fill="#D4AF37" /><Text fontWeight="800">{agent.rating} from {agent.reviews} reviews</Text></HStack><HStack wrap="wrap"><Button leftIcon={<Phone size={16} />} variant="gold">Call agent</Button><Button leftIcon={<Mail size={16} />} variant="outline" colorScheme="whiteAlpha">Email agent</Button></HStack></Stack></Grid><SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mt={10}>{stats.map(([label, value]) => <Stat key={label} bg="whiteAlpha.100" p={5} borderRadius="20px"><StatLabel color="whiteAlpha.800">{label}</StatLabel><StatNumber>{value}</StatNumber></Stat>)}</SimpleGrid></Container></Box>;
}
