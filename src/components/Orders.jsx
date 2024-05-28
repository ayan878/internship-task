import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ActiveOrders from "./ActiveOrders";
import CompletedOrders from "./CompletedOrders";


const Orders = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Orders;
