"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgentCard from "@/components/agents/AgentCard";
import CTASection from "@/components/home/CTASection";
import { agents } from "@/data/agents";
import { useMemo, useState } from "react";

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [spec, setSpec] = useState("");
  const filtered = useMemo(
    () =>
      agents.filter(
        (a) =>
          (!search || a.name.toLowerCase().includes(search.toLowerCase())) &&
          (!city || a.location === city) &&
          (!spec || a.specialization === spec),
      ),
    [search, city, spec],
  );
  return (
    <>
      <Header />
      <main>
        <Box bg="brand.navy" color="white" py={16}>
          <Container maxW="7xl">
            <Heading size="2xl">Find trusted real estate agents</Heading>
            <Text color="whiteAlpha.800" mt={3}>
              Search verified specialists by city, agency and expertise.
            </Text>
          </Container>
        </Box>
        <Container maxW="7xl" py={10}>
          <Stack
            direction={{ base: "column", md: "row" }}
            mb={8}
            bg="white"
            p={4}
            borderRadius="24px"
            border="1px solid"
            borderColor="brand.softGrey"
            align="center"
          >
            <Input
              placeholder="Search agents"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              w={{ base: "100%", md: "80%" }} // ↓ Reduced width
              _placeholder={{
                fontSize: "13px",
              }}
            />

            <Select
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              w={{ base: "100%", md: "180px" }}
            >
              <option>London</option>
              <option>Manchester</option>
              <option>Birmingham</option>
              <option>Leeds</option>
            </Select>

            <Button variant="primary">Search</Button>
          </Stack>

          <Heading size="lg" mb={5}>
            Top-rated agents
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
            {filtered.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </SimpleGrid>
        </Container>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
