'use client';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from '@chakra-ui/react';
import Link from 'next/link';

const links = [['Home','/'],['Properties','/properties'],['Agents','/agents'],['Saved','/saved'],['Dashboard','/dashboard']];

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>EstatePro</DrawerHeader>
        <DrawerBody>
          <Stack spacing={3}>
            {links.map(([label, href]) => <Button key={href} as={Link} href={href} justifyContent="start" variant="ghost" onClick={onClose}>{label}</Button>)}
            <Button as={Link} href="/add-property" variant="primary" onClick={onClose}>List Your Property</Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
