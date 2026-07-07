import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function LeadsPage() {
  return (
    <Box display="flex" bg="brand.background">
      {/* <DashboardSidebar /> */}
      <Box flex={1} minW={0}>
        {/* <DashboardNavbar /> */}
        <Box as="main" p={{ base: 4, md: 8 }}>
          <Stack spacing={6}>
            <Box>
              <Heading>Leads Management</Heading>
              <Text color="brand.textMuted">
                Search, filter and inspect mock property enquiries.
              </Text>
            </Box>
            <LeadsTable />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
