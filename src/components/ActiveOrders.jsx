import { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import CreateOrderModal from "./CreateOrderModal";
import EditOrderModal from "./EditOrderModal";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  const openEditModal = (order) => {
    setEditOrder(order);
  };

  const closeEditModal = () => {
    setEditOrder(null);
  };

  return (
    <Box>
      <Button onClick={() => setCreateModalOpen(true)}>+ Sale Order</Button>
      <CreateOrderModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        setOrders={setOrders}
      />
      {orders.map((order) => (
        <Box key={order.id} mt={4}>
          <span>{order.invoice_no}</span>
          <Button onClick={() => openEditModal(order)}>Edit</Button>
        </Box>
      ))}
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
