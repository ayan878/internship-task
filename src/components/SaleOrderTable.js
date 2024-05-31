import { IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSaleOrders } from "../hooks/useSaleOrders";
import { EditIcon } from "@chakra-ui/icons";

const SaleOrderTable = ({ status, onEdit }) => {
  const { data, isLoading, error } = useSaleOrders(status);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter completed orders that are paid
  const completedPaidOrders = data?.filter(
    (order) => status === "completed" && order.paid
  );

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Customer</Th>
          <Th>Invoice No</Th>
          <Th>Invoice Date</Th>
          <Th>{status === "active" ? <>Active</> : <>Status</>}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {status === "active"
          ? data?.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customerName}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => onEdit(order)}
                  />
                </Td>
              </Tr>
            ))
          : completedPaidOrders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customerName}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>Yes</Td>
              </Tr>
            ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrderTable;
