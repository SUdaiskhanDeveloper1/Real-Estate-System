"use client";
import { Box, Circle, Heading, Text, VStack } from "@chakra-ui/react";
import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <Box
      minH="420px"
      borderRadius="24px"
      bg="linear-gradient(135deg,#DBEAFE,#F8FAFC)"
      border="1px solid"
      borderColor="brand.softGrey"
      position="relative"
      overflow="hidden"
    >
      {[18, 38, 65, 78].map((left, i) => (
        <Circle
          key={left}
          size="44px"
          bg="white"
          color="brand.blue"
          position="absolute"
          left={`${left}%`}
          top={`${20 + i * 15}%`}
          boxShadow="xl"
        >
          <MapPin size={20} />
        </Circle>
      ))}
      <VStack h="100%" minH="420px" justify="center" textAlign="center" p={8}>
        <Heading size="md">Interactive Map Placeholder</Heading>
        <Text color="brand.textMuted">
          Map API intentionally excluded. Replace this area later with Google
          Maps, Mapbox or Leaflet.
        </Text>
      </VStack>
    </Box>
  );
}
