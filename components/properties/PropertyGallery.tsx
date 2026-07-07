'use client';
import { Button, Grid, Image, useDisclosure, Box } from '@chakra-ui/react';
import ModalWrapper from '@/components/ui/ModalWrapper';

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4} position="relative">
        <Image src={images[0]} alt={title} h={{ base: '320px', md: '520px' }} w="full" objectFit="cover" borderRadius="28px" />
        <Grid gap={4}>{images.slice(1, 3).map((img, i) => <Image key={img} src={img} alt={`${title} interior ${i + 1}`} h={{ base: '190px', md: '252px' }} w="full" objectFit="cover" borderRadius="24px" />)}</Grid>
        <Button position="absolute" right={5} bottom={5} onClick={onOpen} variant="gold">View all photos</Button>
      </Grid>
      <ModalWrapper isOpen={isOpen} onClose={onClose} title="Gallery preview"><Box>Gallery modal placeholder. Connect a full carousel or lightbox later.</Box></ModalWrapper>
    </>
  );
}
