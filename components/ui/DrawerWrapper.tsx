'use client';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';

export default function DrawerWrapper({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return <Drawer isOpen={isOpen} placement="right" onClose={onClose}><DrawerOverlay /><DrawerContent><DrawerCloseButton /><DrawerHeader>{title}</DrawerHeader><DrawerBody>{children}</DrawerBody></DrawerContent></Drawer>;
}
