"use client";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Bell, Menu, Search } from "lucide-react";
import DrawerWrapper from "@/components/ui/DrawerWrapper";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="white"
      borderBottom="1px solid"
      borderColor="brand.softGrey"
      px={{ base: 4, md: 8 }}
      py={4}
      position="sticky"
      top={0}
      zIndex={20}
    >
      <Flex justify="space-between" align="center" gap={4}>
        <HStack flex={1}>
          <IconButton
            display={{ base: "inline-flex", lg: "none" }}
            aria-label="Open dashboard menu"
            icon={<Menu />}
            onClick={onOpen}
          />
          <HStack
            maxW="460px"
            w="full"
            bg="brand.background"
            borderRadius="16px"
            px={3}
          >
            <Search size={18} />
            <Input
              border="none"
              placeholder="Search dashboard"
              _focus={{ boxShadow: "none" }}
            />
          </HStack>
        </HStack>
        <HStack>
          <IconButton aria-label="Notifications" icon={<Bell />} />
          <Avatar size="sm" name="Sophia Carter" />
          <Text display={{ base: "none", md: "block" }} fontWeight="700">
            Sophia
          </Text>
        </HStack>
      </Flex>
      <DrawerWrapper isOpen={isOpen} onClose={onClose} title="Dashboard">
        <DashboardSidebar forceVisible />
      </DrawerWrapper>
    </Box>
  );
}
