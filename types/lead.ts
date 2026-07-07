export type LeadStatus = 'New' | 'Contacted' | 'Viewing Scheduled' | 'Negotiating' | 'Closed' | 'Lost';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyTitle: string;
  status: LeadStatus;
  source: string;
  date: string;
  message: string;
}
