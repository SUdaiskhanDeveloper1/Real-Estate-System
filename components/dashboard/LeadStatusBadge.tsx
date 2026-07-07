'use client';
import { Badge } from '@chakra-ui/react';
import { LeadStatus } from '@/types/lead';

const map: Record<LeadStatus, string> = { New: 'blue', Contacted: 'purple', 'Viewing Scheduled': 'green', Negotiating: 'orange', Closed: 'teal', Lost: 'red' };
export default function LeadStatusBadge({ status }: { status: LeadStatus }) { return <Badge colorScheme={map[status]} borderRadius="full" px={3} py={1}>{status}</Badge>; }
