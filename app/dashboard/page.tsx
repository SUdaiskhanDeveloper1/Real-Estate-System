import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LeadsTable from "@/components/dashboard/LeadsTable";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties } from "@/data/properties";
import { CalendarCheck, Eye, Heart, Home, Percent, Users } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    ["Total Listings", "42", "+8% this month", Home],
    ["New Leads", "26", "+14% this week", Users],
    ["Property Views", "18.4k", "+22% this month", Eye],
    ["Scheduled Viewings", "12", "+5 this week", CalendarCheck],
    ["Saved by Users", "1.2k", "+18%", Heart],
    ["Conversion Rate", "6.8%", "+1.1%", Percent],
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
              {stats.map(([l, v, c, Icon]: any) => (
                <StatCard key={l} label={l} value={v} change={c} icon={Icon} />
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
