'use client';
import { Box, Button, Stack, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { BarChart3, Building2, ClipboardList, Home, PlusCircle } from 'lucide-react';

const items = [
  ['Overview','/dashboard',BarChart3], ['Leads','/leads',ClipboardList], ['Listings','/properties',Home], ['Add Property','/add-property',PlusCircle]
];

export default function DashboardSidebar({ compact = false, forceVisible = false }: { compact?: boolean; forceVisible?: boolean }) {
  return (
    <Box bg="brand.navy" color="white" minH="100vh" p={5} w={compact ? '86px' : '260px'} display={forceVisible ? 'block' : { base: 'none', lg: 'block' }} position="sticky" top={0}>
      <HStack mb={8}><Building2 /><Text display={compact ? 'none' : 'block'} fontWeight="900" fontSize="xl">EstatePro</Text></HStack>
      <Stack spacing={2}>{items.map(([label, href, Icon]: any) => <Button as={Link} href={href} key={href} variant="ghost" justifyContent={compact ? 'center' : 'start'} color="white" leftIcon={<Icon size={18} />} _hover={{ bg: 'whiteAlpha.200' }}>{compact ? '' : label}</Button>)}</Stack>
    </Box>
  );
}
