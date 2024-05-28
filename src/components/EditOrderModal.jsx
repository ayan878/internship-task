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
import { useForm } from "react-hook-form";

const EditOrderModal = ({ isOpen, onClose, order, setOrders }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: order,
  });

  const onSubmit = (values) => {
    // Mimic API call
    setOrders((prev) => prev.map((o) => (o.id === order.id ? values : o)));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register("invoice_no")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Customer</FormLabel>
              <Select {...register("customer_id")}>
                {/* Add customer options */}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input type="date" {...register("invoice_date")} />
            </FormControl>
            {/* Add other fields as necessary */}
            <Button mt={4} colorScheme="teal" type="submit">
              Save
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditOrderModal;
