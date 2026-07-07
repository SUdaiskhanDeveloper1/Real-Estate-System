'use client';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const items = ['Olivia requested a viewing', 'Riverside Penthouse reached 420 saves', 'New build townhouse updated', 'Commercial suite enquiry closed'];
export default function RecentActivity() { return <Box bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Heading size="md" mb={4}>Recent activity</Heading><Stack>{items.map((item) => <Text key={item} color="brand.textMuted">• {item}</Text>)}</Stack></Box>; }
