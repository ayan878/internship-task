import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import SaleOrderTable from "../components/SaleOrderTable";
import SaleOrderForm from "../components/SaleOrderForm";
import Header from "../components/Header";
import { useState } from "react";
import { useActiveOrders } from "../hooks/useActiveOrders";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const { data: activeOrders, isLoading, error } = useActiveOrders();

  return (
    <div>
      <Header />
      <Button onClick={() => setIsModalOpen(true)}>+ Sale Order</Button>
      <SaleOrderForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditOrder(null);
        }}
        initialValues={editOrder}
      />

      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading active orders</p>
            ) : (
              <SaleOrderTable
                status="active"
                orders={activeOrders}
                onEdit={(order) => {
                  setEditOrder(order);
                  setIsModalOpen(true);
                }}
              />
            )}
          </TabPanel>
          <TabPanel>
            <SaleOrderTable status="completed" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;
