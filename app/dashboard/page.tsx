"use client";
import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LeadsTable from "@/components/dashboard/LeadsTable";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties } from "@/data/properties";
import {
  CalendarCheck,
  Eye,
  Heart,
  Home,
  LucideIcon,
  Percent,
  Users,
} from "lucide-react";

type DashboardStat = {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export default function DashboardPage() {
  const stats: DashboardStat[] = [
    { label: "Total Listings", value: "42", change: "+8% this month", icon: Home },
    { label: "New Leads", value: "26", change: "+14% this week", icon: Users },
    { label: "Property Views", value: "18.4k", change: "+22% this month", icon: Eye },
    { label: "Scheduled Viewings", value: "12", change: "+5 this week", icon: CalendarCheck },
    { label: "Saved by Users", value: "1.2k", change: "+18%", icon: Heart },
    { label: "Conversion Rate", value: "6.8%", change: "+1.1%", icon: Percent },
  ];
  return (
    <Box display="flex" bg="brand.background">
      <DashboardSidebar />
      <Box flex={1} minW={0}>
        <DashboardNavbar />
        <Box as="main" p={{ base: 4, md: 8 }}>
          <Stack spacing={8}>
            <Box>
              <Heading>Agent Dashboard</Heading>
              <Text color="brand.textMuted">
                Frontend-only overview of listings, leads and property
                performance.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                />
              ))}
            </SimpleGrid>
            <Grid templateColumns={{ base: "1fr", xl: "2fr 1fr" }} gap={6}>
              <ChartCard
                title="Views over time"
                description="Mock listing views chart placeholder"
              />
              <ChartCard
                title="Leads by source"
                description="Website, saved homes and campaign sources"
              />
            </Grid>
            <Grid templateColumns={{ base: "1fr", xl: "2fr 1fr" }} gap={6}>
              <Box>
                <Heading size="lg" mb={4}>
                  Recent leads
                </Heading>
                <LeadsTable />
              </Box>
              <RecentActivity />
            </Grid>
            <Box>
              <Heading size="lg" mb={4}>
                Active listings
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
                {properties.slice(0, 3).map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
