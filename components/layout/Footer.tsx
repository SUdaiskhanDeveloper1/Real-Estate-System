"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <Box as="footer" bg="brand.navy" color="white" mt={20}>
      <Container maxW="7xl" py={12}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }} gap={8}>
          <Stack>
            <HStack>
              <Building2 />
              <Heading size="md">EstatePro</Heading>
            </HStack>
            <Text color="whiteAlpha.700" maxW="360px">
              A premium frontend-only property SaaS concept for buyers, renters,
              agents and agencies.
            </Text>
          </Stack>
          <Stack>
            <Heading size="sm">Platform</Heading>
            <Text as={Link} href="/properties">
              Properties
            </Text>
            <Text as={Link} href="/agents">
              Agents
            </Text>
            <Text as={Link} href="/saved">
              Saved homes
            </Text>
          </Stack>
          <Stack>
            <Heading size="sm">Agent tools</Heading>
            <Text as={Link} href="/dashboard">
              Dashboard
            </Text>
            <Text as={Link} href="/leads">
              Leads
            </Text>
            <Text as={Link} href="/add-property">
              Add property
            </Text>
          </Stack>
          <Stack>
            <Heading size="sm">Contact</Heading>

            <Link
              href="mailto:sudais8075@gmail.com"
              color="whiteAlpha.700"
              // _hover={{
              //   color: "white",
              //   textDecoration: "underline",
              // }}
            >
              sudais8075@gmail.com
            </Link>

            <Text color="whiteAlpha.700">Frontend Developer</Text>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
