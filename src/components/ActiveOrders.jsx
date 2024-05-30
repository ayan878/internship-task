import { useState } from "react";
import {
  Button,
  Box,
  IconButton,
  Td,
  Tr,
  Tbody,
  Th,
  Thead,
  Table,
} from "@chakra-ui/react";
import CreateOrderModal from "./CreateOrderModal";
import EditOrderModal from "./EditOrderModal";
import { FiMoreVertical } from "react-icons/fi";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer_id: 11908,
      items: [{ sku_id: 220, price: 12, quantity: 12 }],
      paid: false,
      invoice_no: "Invoice - 1212121",
      invoice_date: "2024-05-07",
      lastModified: "24/5/2024 (11:07 PM)",
    },
    {
      id: 2,
      customer_id: 11908,
      items: [{ sku_id: 220, price: 12, quantity: 12 }],
      paid: false,
      invoice_no: "Invoice - 1212122",
      invoice_date: "2024-05-07",
      lastModified: "24/5/2024 (11:30 PM)",
    },
  ]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  const openEditModal = (order) => {
    setEditOrder(order);
  };

  const closeEditModal = () => {
    setEditOrder(null);
  };

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Button>Active Sale Orders</Button>
        <Button>Completed Sale Orders</Button>
      </Box>
      <Box mb={4}>
        <Button onClick={() => setCreateModalOpen(true)}>+ Sale Order</Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer ID</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer_id}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{order.invoice_date}</Td>
              <Td>{order.lastModified}</Td>
              <Td>
                <IconButton
                  icon={<FiMoreVertical />}
                  aria-label="Edit/View"
                  variant="ghost"
                  onClick={() => openEditModal(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <CreateOrderModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        setOrders={setOrders}
      />
      {editOrder && (
        <EditOrderModal
          isOpen={true}
          onClose={closeEditModal}
          order={editOrder}
          setOrders={setOrders}
        />
      )}
    </Box>
  );
};

export default ActiveOrders;
