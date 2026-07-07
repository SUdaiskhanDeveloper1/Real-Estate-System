'use client';
import { Button, ButtonProps } from '@chakra-ui/react';

export default function CustomButton(props: ButtonProps) {
  return <Button variant="primary" size="lg" {...props} />;
}
