'use client';
import { Avatar, Box, Button, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { Mail, Phone, Star } from 'lucide-react';
import { Agent } from '@/types/agent';
import LeadCaptureForm from './LeadCaptureForm';

export default function AgentContactCard({ agent }: { agent: Agent }) {
  return <Box bg="white" border="1px solid" borderColor="brand.softGrey" borderRadius="24px" p={6} position={{ lg: 'sticky' }} top="96px"><Stack spacing={4}><HStack><Avatar size="lg" src={agent.photo} name={agent.name} /><Box><Heading size="md">{agent.name}</Heading><Text color="brand.textMuted">{agent.role}</Text><HStack color="brand.gold"><Star size={16} fill="#D4AF37" /><Text fontWeight="800">{agent.rating}</Text></HStack></Box></HStack><HStack><Button leftIcon={<Phone size={16} />} flex={1} variant="outlineBrand">Call</Button><Button leftIcon={<Mail size={16} />} flex={1} variant="outlineBrand">Email</Button></HStack><Button variant="gold">Schedule viewing</Button><LeadCaptureForm compact /></Stack></Box>;
}
