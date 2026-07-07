"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertySearchBar from "@/components/properties/PropertySearchBar";
import MapPlaceholder from "@/components/properties/MapPlaceholder";
import DrawerWrapper from "@/components/ui/DrawerWrapper";
import { properties } from "@/data/properties";
import { defaultFilters, filterProperties } from "@/lib/filters";
import { Grid2X2, List, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

export default function PropertiesPage() {
  const [filters, setFilters] = useState(defaultFilters);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const result = useMemo(
    () => filterProperties(properties, filters),
    [filters],
  );
  const toggleSave = (id: string) =>
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id],
    );
  const clear = () => setFilters(defaultFilters);
  const activeFilters = Object.entries(filters).filter(
    ([k, v]) => k !== "sort" && (Array.isArray(v) ? v.length : v),
  );
  return (
    <>
      <Header />
      <Box as="main" py={10}>
        <Container maxW="8xl">
          <Stack spacing={6}>
            <Box>
              <Heading size="2xl">Explore properties</Heading>
              <Text color="brand.textMuted">
                Search, filter and save premium properties with frontend-only
                interactions.
              </Text>
            </Box>
            <PropertySearchBar filters={filters} setFilters={setFilters} />
            <HStack justify="space-between" wrap="wrap">
              <HStack>
                <Button
                  display={{ base: "inline-flex", lg: "none" }}
                  leftIcon={<SlidersHorizontal size={18} />}
                  onClick={onOpen}
                >
                  Filters
                </Button>
                <Text fontWeight="800">{result.length} properties found</Text>
              </HStack>
              <HStack>
                {activeFilters.map(([key, val]) => (
                  <Badge key={key} borderRadius="full" px={3} py={1}>
                    {key}: {Array.isArray(val) ? val.join(", ") : val}
                  </Badge>
                ))}
                {activeFilters.length > 0 && (
                  <Button size="sm" variant="ghost" onClick={clear}>
                    Clear
                  </Button>
                )}
                <IconButton
                  aria-label="Grid view"
                  icon={<Grid2X2 />}
                  onClick={() => setView("grid")}
                  colorScheme={view === "grid" ? "blue" : "gray"}
                />
                <IconButton
                  aria-label="List view"
                  icon={<List />}
                  onClick={() => setView("list")}
                  colorScheme={view === "list" ? "blue" : "gray"}
                />
              </HStack>
            </HStack>
            <Grid
              templateColumns={{ base: "1fr", lg: "280px minmax(0,1fr) 360px" }}
              gap={6}
              alignItems="start"
            >
              <Box
                display={{ base: "none", lg: "block" }}
                position="sticky"
                top="100px"
              >
                <PropertyFilters
                  filters={filters}
                  setFilters={setFilters}
                  onClear={clear}
                />
              </Box>
              <PropertyGrid
                properties={result}
                savedIds={savedIds}
                onToggleSave={toggleSave}
                view={view}
              />
              <Box
                display={{ base: "none", xl: "block" }}
                position="sticky"
                top="100px"
              >
                {/* <MapPlaceholder /> */}
              </Box>
            </Grid>
            <Box display={{ base: "block", xl: "none" }}>
              {/* <MapPlaceholder /> */}
            </Box>
          </Stack>
        </Container>
      </Box>
      <DrawerWrapper isOpen={isOpen} onClose={onClose} title="Filters">
        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
          onClear={clear}
        />
      </DrawerWrapper>
      <Footer />
    </>
  );
}
