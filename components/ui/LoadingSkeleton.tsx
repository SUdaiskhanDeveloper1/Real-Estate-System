'use client';
import { Skeleton, Stack } from '@chakra-ui/react';

export default function LoadingSkeleton() {
  return <Stack><Skeleton height="220px" borderRadius="24px" /><Skeleton height="24px" /><Skeleton height="24px" w="70%" /></Stack>;
}
