import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const ViewOrderModal = ({ isOpen, onClose, order }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Invoice No</FormLabel>
            <Input value={order.invoice_no} isReadOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Customer</FormLabel>
            <Select value={order.customer_id} isReadOnly>
              <option value="11908">Customer 1</option>
              <option value="11909">Customer 2</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={order.invoice_date} isReadOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>SKU ID</FormLabel>
            <Input value={order.sku_id} isReadOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input type="number" value={order.price} isReadOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input type="number" value={order.quantity} isReadOnly />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewOrderModal;
