import { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import ViewOrderModal from "./ViewOrderModal";

const CompletedOrders = () => {
  const [orders, setOrders] = useState([]); // This should be fetched from your API or state management
  const [viewOrder, setViewOrder] = useState(null);

  const openViewModal = (order) => {
    setViewOrder(order);
  };

  const closeViewModal = () => {
    setViewOrder(null);
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Icon as={FiMoreVertical} mr={2} />
                  <Text>{order.customer}</Text>
                  <Text ml={2} color="gray.500">
                    ({order.customerId})
                  </Text>
                </Box>
              </Td>
              <Td>{order.price}</Td>
              <Td>{order.lastModified}</Td>
              <Td>
                <IconButton
                  icon={<FiMoreVertical />}
                  aria-label="View"
                  variant="ghost"
                  onClick={() => openViewModal(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {viewOrder && (
        <ViewOrderModal
          isOpen={true}
          onClose={closeViewModal}
          order={viewOrder}
        />
      )}
    </Box>
  );
};

export default CompletedOrders;
