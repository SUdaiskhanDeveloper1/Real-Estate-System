'use client';
import { Button, FormControl, FormLabel, Input, Stack, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function LeadCaptureForm({ compact = false }: { compact?: boolean }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Your enquiry has been sent successfully. The agent will contact you soon.', status: 'success', duration: 3500, isClosable: true });
    }, 500);
  };
  return (
    <Stack as="form" onSubmit={submit} spacing={compact ? 3 : 4}>
      <FormControl isRequired><FormLabel>Full name</FormLabel><Input placeholder="Your name" /></FormControl>
      <FormControl isRequired><FormLabel>Email address</FormLabel><Input type="email" placeholder="you@email.com" /></FormControl>
      <FormControl><FormLabel>Phone number</FormLabel><Input placeholder="Phone number" /></FormControl>
      <FormControl><FormLabel>Preferred date</FormLabel><Input type="date" /></FormControl>
      <FormControl><FormLabel>Message</FormLabel><Textarea placeholder="I am interested in this property..." /></FormControl>
      <Button type="submit" variant="primary" isLoading={loading}>Submit enquiry</Button>
    </Stack>
  );
}
