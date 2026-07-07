'use client';
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';

export default function ChartCard({ title, description }: { title: string; description: string }) {
  return <Box bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><Heading size="md" mb={1}>{title}</Heading><Text color="brand.textMuted" mb={6}>{description}</Text><HStack align="end" h="180px" spacing={3}>{[38,72,54,95,68,120,100,148,132,170].map((h, i) => <Box key={i} flex={1} h={`${h}px`} bg={i % 3 === 0 ? 'brand.gold' : 'brand.blue'} opacity={i % 2 ? .75 : 1} borderTopRadius="12px" />)}</HStack></Box>;
}
