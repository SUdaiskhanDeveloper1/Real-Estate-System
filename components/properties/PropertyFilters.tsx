'use client';
import { Button, Checkbox, CheckboxGroup, Divider, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { PropertyFilterState } from '@/lib/filters';
import { propertyTypes } from '@/data/propertyTypes';

const amenities = ['Garden','Balcony','Gym','Concierge','Secure parking','Smart home','Pet friendly','EV charger'];

export default function PropertyFilters({ filters, setFilters, onClear }: { filters: PropertyFilterState; setFilters: (filters: PropertyFilterState) => void; onClear: () => void }) {
  return (
    <Stack bg="white" border="1px solid" borderColor="brand.softGrey" borderRadius="24px" p={5} spacing={4}>
      <FormControl><FormLabel>Location</FormLabel><Input value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} placeholder="Search city or area" /></FormControl>
      <FormControl><FormLabel>Property type</FormLabel><Select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} placeholder="Any type">{propertyTypes.map((type) => <option key={type}>{type}</option>)}</Select></FormControl>
      <FormControl><FormLabel>Status</FormLabel><Select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })} placeholder="Any status"><option>For Sale</option><option>For Rent</option><option>New Build</option></Select></FormControl>
      <FormControl><FormLabel>Max price</FormLabel><Input type="number" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} placeholder="e.g. 900000" /></FormControl>
      <FormControl><FormLabel>Bedrooms</FormLabel><Select value={filters.bedrooms} onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })} placeholder="Any"><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></Select></FormControl>
      <FormControl><FormLabel>Bathrooms</FormLabel><Select value={filters.bathrooms} onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })} placeholder="Any"><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option></Select></FormControl>
      <Divider />
      <FormControl><FormLabel>Amenities</FormLabel><CheckboxGroup value={filters.amenities} onChange={(v) => setFilters({ ...filters, amenities: v as string[] })}><Stack>{amenities.map((a) => <Checkbox key={a} value={a}>{a}</Checkbox>)}</Stack></CheckboxGroup></FormControl>
      <Button variant="outlineBrand" onClick={onClear}>Clear filters</Button>
    </Stack>
  );
}
