'use client';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

export default function ModalWrapper({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl"><ModalOverlay /><ModalContent borderRadius="24px"><ModalHeader>{title}</ModalHeader><ModalCloseButton /><ModalBody pb={6}>{children}</ModalBody></ModalContent></Modal>;
}
