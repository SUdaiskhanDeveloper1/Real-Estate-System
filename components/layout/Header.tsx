'use client';
import { Box, Button, Container, Flex, HStack, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { Building2, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const links = [['Properties','/properties'],['Agents','/agents'],['Saved','/saved'],['Dashboard','/dashboard']];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="header" position="sticky" top={0} zIndex={40} bg="rgba(255,255,255,.88)" backdropFilter="blur(16px)" borderBottom="1px solid" borderColor="brand.softGrey">
      <Container maxW="7xl" py={4}>
        <Flex align="center" justify="space-between">
          <HStack as={Link} href="/" spacing={2} aria-label="EstatePro home"><Box color="brand.blue"><Building2 /></Box><Text fontWeight="900" fontSize="xl">EstatePro</Text></HStack>
          <HStack display={{ base: 'none', md: 'flex' }} spacing={1}>{links.map(([l,h]) => <Button as={Link} href={h} key={h} variant="ghost">{l}</Button>)}</HStack>
          <HStack display={{ base: 'none', md: 'flex' }}><Button as={Link} href="/add-property" variant="primary">List Your Property</Button></HStack>
          <IconButton display={{ base: 'inline-flex', md: 'none' }} aria-label="Open menu" icon={<Menu />} onClick={onOpen} />
        </Flex>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
