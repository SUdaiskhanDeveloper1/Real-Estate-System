import { Box, Container, Heading, Text, HStack, Avatar } from "@chakra-ui/react";
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
