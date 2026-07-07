'use client';
import { Box, Button, FormControl, FormLabel, Heading, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export default function MortgageCalculator() {
  return <Box bg="white" border="1px solid" borderColor="brand.softGrey" borderRadius="24px" p={6}><Heading size="md" mb={4}>Mortgage Calculator</Heading><SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}><FormControl><FormLabel>Deposit</FormLabel><Input placeholder="£150,000" /></FormControl><FormControl><FormLabel>Interest rate</FormLabel><Input placeholder="4.8%" /></FormControl><FormControl><FormLabel>Term</FormLabel><Input placeholder="25 years" /></FormControl></SimpleGrid><Stack mt={5} direction={{ base: 'column', md: 'row' }} justify="space-between"><Text color="brand.textMuted">Estimated monthly payment placeholder: <b>£3,420/mo</b></Text><Button variant="outlineBrand">Calculate</Button></Stack></Box>;
}
