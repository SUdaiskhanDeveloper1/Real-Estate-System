'use client';
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function CTASection() { return <Container maxW="7xl" py={14}><Box bg="brand.blue" color="white" borderRadius="32px" p={{ base: 8, md: 14 }} textAlign="center" boxShadow="0 30px 80px rgba(30,64,175,.3)"><Heading size="2xl">Ready to find your next property?</Heading><Text mt={3} color="whiteAlpha.800">Browse premium listings or list your property with a trusted agent workflow.</Text><Stack mt={6} direction={{ base: 'column', md: 'row' }} justify="center"><Button as={Link} href="/properties" variant="gold">Browse Properties</Button><Button as={Link} href="/add-property" variant="outline" colorScheme="whiteAlpha">List a Property</Button></Stack></Box></Container>; }
