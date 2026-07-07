"use client";
import { Button, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { PropertyFilterState } from "@/lib/filters";

export default function PropertySearchBar({
  filters,
  setFilters,
}: {
  filters: PropertyFilterState;
  setFilters: (filters: PropertyFilterState) => void;
}) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg="white"
      p={1}
      borderRadius="20px"
      border="1px solid"
      borderColor="brand.softGrey"
      spacing={3}
    >
      <Input
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        placeholder="Search by location"
      />
      {/* <Select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price low to high</option>
        <option value="price-high">Price high to low</option>
      </Select> */}
      <Button leftIcon={<Search size={18} />} variant="primary">
        Search
      </Button>
    </Stack>
  );
}
