'use client';
import { Badge, BadgeProps } from '@chakra-ui/react';

export default function CustomBadge(props: BadgeProps) {
  return <Badge px={3} py={1} borderRadius="full" fontWeight="800" {...props} />;
}
