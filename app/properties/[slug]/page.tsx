import { notFound } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyGallery from "@/components/properties/PropertyGallery";
import PropertyStats from "@/components/properties/PropertyStats";
import PropertyFeatures from "@/components/properties/PropertyFeatures";
import MapPlaceholder from "@/components/properties/MapPlaceholder";
import MortgageCalculator from "@/components/properties/MortgageCalculator";
import SimilarProperties from "@/components/properties/SimilarProperties";
import AgentContactCard from "@/components/agents/AgentContactCard";
import { properties } from "@/data/properties";
import { agents } from "@/data/agents";
import { formatPrice } from "@/lib/utils";
import { Heart, Share2, MapPin } from "lucide-react";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.title} | EstatePro` : "Property | EstatePro",
    description: p?.description,
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) notFound();
  const agent = agents.find((a) => a.id === property.agentId)!;
  return (
    <>
      <Header />
      <main>
        <Container maxW="7xl" py={8}>
          <PropertyGallery images={property.images} title={property.title} />
          <Grid
            templateColumns={{ base: "1fr", lg: "minmax(0,1fr) 380px" }}
            gap={8}
            mt={8}
            alignItems="start"
          >
            <Stack spacing={8}>
              <Box>
                <HStack mb={3}>
                  <Badge colorScheme="blue" borderRadius="full" px={3}>
                    {property.status}
                  </Badge>
                  <Badge variant="gold">{property.type}</Badge>
                </HStack>
                <Heading size="2xl">{property.title}</Heading>
                <HStack color="brand.textMuted" mt={2}>
                  <MapPin size={18} />
                  <Text>{property.location}</Text>
                </HStack>
                <HStack justify="space-between" mt={5} wrap="wrap">
                  <Heading color="brand.blue">
                    {formatPrice(property.price, property.status)}
                  </Heading>
                  <HStack>
                    <Button
                      leftIcon={<Heart size={18} />}
                      variant="outlineBrand"
                    >
                      Save
                    </Button>
                    <Button
                      leftIcon={<Share2 size={18} />}
                      variant="outlineBrand"
                    >
                      Share
                    </Button>
                  </HStack>
                </HStack>
              </Box>
              <PropertyStats property={property} />
              <Box>
                <Heading size="lg" mb={3}>
                  Overview
                </Heading>
                <Text color="brand.textMuted">{property.description}</Text>
              </Box>
              <Box>
                <Heading size="lg" mb={4}>
                  Features and amenities
                </Heading>
                <PropertyFeatures amenities={property.amenities} />
              </Box>
              <Box
                bg="white"
                p={6}
                borderRadius="24px"
                border="1px solid"
                borderColor="brand.softGrey"
              >
                <Heading size="lg" mb={3}>
                  Floor plan
                </Heading>
                <Box
                  h="260px"
                  border="2px dashed"
                  borderColor="brand.softGrey"
                  borderRadius="20px"
                  display="grid"
                  placeItems="center"
                >
                  <Text color="brand.textMuted">Floor plan placeholder</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="lg" mb={4}>
                  Location
                </Heading>
                {/* <MapPlaceholder /> */}
              </Box>
              <MortgageCalculator />
              <Box
                bg="white"
                p={6}
                borderRadius="24px"
                border="1px solid"
                borderColor="brand.softGrey"
              >
                <Heading size="lg" mb={4}>
                  Nearby places
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  {["School 0.4 mi", "Station 0.7 mi", "Park 0.2 mi"].map(
                    (x) => (
                      <Box
                        key={x}
                        p={4}
                        bg="brand.background"
                        borderRadius="16px"
                      >
                        {x}
                      </Box>
                    ),
                  )}
                </SimpleGrid>
              </Box>
              <Divider />
              <Box>
                <Heading size="lg" mb={5}>
                  Similar properties
                </Heading>
                <SimilarProperties currentId={property.id} />
              </Box>
            </Stack>
            <AgentContactCard agent={agent} />
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
