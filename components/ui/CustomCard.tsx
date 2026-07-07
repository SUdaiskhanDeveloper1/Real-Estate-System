'use client';
import { Card, CardProps } from '@chakra-ui/react';

export default function CustomCard(props: CardProps) {
  return <Card bg="white" borderRadius="24px" border="1px solid" borderColor="brand.softGrey" boxShadow="0 18px 45px rgba(15,23,42,.06)" {...props} />;
}
