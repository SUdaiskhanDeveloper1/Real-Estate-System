import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
  Text,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSearch from "@/components/home/HeroSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyCategories from "@/components/home/PropertyCategories";
import PopularLocations from "@/components/home/PopularLocations";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { agents } from "@/data/agents";

export default function HomePage() {
  const agent = agents[0];
  return (
    <>
      <Header />
      <main>
        <HeroSearch />
        <FeaturedProperties />
        <PropertyCategories />
        <Container maxW="7xl" py={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              // ["Verified agents", "500+"],
              // ["Listings tracked", "2,500+"],
              // ["Average rating", "4.9/5"],
            ].map(([l, v]) => (
              <Stat
                key={l}
                bg="white"
                p={8}
                borderRadius="24px"
                border="1px solid"
                borderColor="brand.softGrey"
              >
                <StatLabel>{l}</StatLabel>
                <StatNumber>{v}</StatNumber>
              </Stat>
            ))}
          </SimpleGrid>
        </Container>
        <PopularLocations />
        <Container maxW="7xl" py={12}>
          <Box
            bg="white"
            border="1px solid"
            borderColor="brand.softGrey"
            borderRadius="28px"
            p={8}
          >
            <HStack align="center" spacing={5}>
              <Avatar size="xl" src={agent.photo} name={agent.name} />
              <Box>
                <Text color="brand.gold" fontWeight="900">
                  Agent spotlight
                </Text>
                <Heading>{agent.name}</Heading>
                <Text color="brand.textMuted">{agent.bio}</Text>
              </Box>
            </HStack>
          </Box>
        </Container>
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
