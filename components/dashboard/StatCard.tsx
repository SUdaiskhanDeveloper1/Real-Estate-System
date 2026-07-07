'use client';
import { Box, HStack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function StatCard({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: LucideIcon }) {
  return <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} bg="white" p={6} borderRadius="24px" border="1px solid" borderColor="brand.softGrey"><HStack justify="space-between"><Stat><StatLabel>{label}</StatLabel><StatNumber>{value}</StatNumber><StatHelpText color="brand.emerald">{change}</StatHelpText></Stat><Box p={3} bg="blue.50" color="brand.blue" borderRadius="16px"><Icon /></Box></HStack></MotionBox>;
}
