'use client';
import { Badge, Heading, Text, VStack } from '@chakra-ui/react';

export default function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <VStack align={{ base: 'start', md: 'center' }} textAlign={{ base: 'left', md: 'center' }} spacing={3} mb={10}>
      {eyebrow && <Badge variant="gold" borderRadius="full" px={3} py={1}>{eyebrow}</Badge>}
      <Heading size={{ base: 'xl', md: '2xl' }} letterSpacing="-0.04em">{title}</Heading>
      {text && <Text color="brand.textMuted" maxW="680px">{text}</Text>}
    </VStack>
  );
}
