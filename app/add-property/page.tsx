import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AddPropertyForm from '@/components/dashboard/AddPropertyForm';

export default function AddPropertyPage() {
  return <><Header /><main><Box bg="brand.navy" color="white" py={14}><Container maxW="7xl"><Heading size="2xl">Add a new property</Heading><Text color="whiteAlpha.800" mt={3}>A multi-step frontend-only listing workflow with preview and success state.</Text></Container></Box><Container maxW="5xl" py={10}><AddPropertyForm /></Container></main><Footer /></>;
}
