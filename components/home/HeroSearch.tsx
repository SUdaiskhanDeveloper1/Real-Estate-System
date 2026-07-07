"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const MotionBox = motion(Box);

export default function HeroSearch() {
  return (
    <Box bg="brand.navy" color="white" overflow="hidden">
      <Container maxW="7xl" py={{ base: 14, md: 24 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr .95fr" }}
          gap={12}
          alignItems="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Badge
              bg="whiteAlpha.200"
              color="brand.gold"
              borderRadius="full"
              px={3}
              py={1}
            >
              Premium property search
            </Badge>
            <Heading
              mt={5}
              size={{ base: "2xl", md: "4xl" }}
              letterSpacing="0.01em"
              lineHeight="1.02"
            >
              Find Your Perfect Property With Confidence
            </Heading>
            <Text mt={5} fontSize="xl" color="whiteAlpha.800" maxW="640px">
              Explore premium homes, apartments, and investment properties with
              a smarter real estate search experience.
            </Text>
            <Stack
              mt={8}
              bg="white"
              p={4}
              borderRadius="24px"
              color="brand.textDark"
              boxShadow="2xl"
            >
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
                <Input placeholder="Location" />
                <Select placeholder="Property type">
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </Select>
                <Select placeholder="Price range">
                  <option>£0 - £500k</option>
                  <option>£500k - £1m</option>
                  <option>£1m+</option>
                </Select>
                <Select placeholder="Bedrooms">
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </Select>
              </SimpleGrid>
              <Button
                as={Link}
                href="/properties"
                leftIcon={<Search size={18} />}
                variant="primary"
                size="lg"
              >
                Search properties
              </Button>
            </Stack>
            <HStack mt={6} wrap="wrap">
              <Button as={Link} href="/properties" variant="gold">
                Explore Properties
              </Button>
              <Button
                as={Link}
                href="/add-property"
                variant="outline"
                colorScheme="whiteAlpha"
              >
                List Your Property
              </Button>
            </HStack>
          </MotionBox>
          <Box position="relative">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury modern property"
              borderRadius="32px"
              h={{ base: "360px", md: "560px" }}
              objectFit="cover"
              w="full"
            />
            <SimpleGrid
              columns={1}
              spacing={3}
              position="absolute"
              left={{ base: 4, md: -8 }}
              bottom={8}
            >
              {[
                // "2,500+ Properties",
                // "500+ Verified Agents",
                // "4.9 Average Rating",
              ].map((s) => (
                <Box
                  key={s}
                  bg="white"
                  color="brand.navy"
                  p={4}
                  borderRadius="18px"
                  boxShadow="xl"
                  fontWeight="900"
                >
                  {s}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
