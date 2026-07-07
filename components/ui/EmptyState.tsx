'use client';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { SearchX } from 'lucide-react';

export default function EmptyState({ title, text, buttonText, href = '/properties' }: { title: string; text: string; buttonText?: string; href?: string }) {
  return (
    <VStack bg="white" border="1px solid" borderColor="brand.softGrey" borderRadius="24px" py={14} px={6} spacing={4} textAlign="center">
      <Box color="brand.blue"><SearchX size={44} /></Box>
      <Heading size="lg">{title}</Heading>
      <Text color="brand.textMuted" maxW="480px">{text}</Text>
      {buttonText && <Button as={Link} href={href} variant="primary">{buttonText}</Button>}
    </VStack>
  );
}
