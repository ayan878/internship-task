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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const CreateOrderModal = ({ isOpen, onClose, setOrders }) => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (values) => {
    // Mimic API call
    setOrders((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...values,
        lastModified: new Date().toLocaleString(),
      },
    ]);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register("invoice_no")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Customer</FormLabel>
              <Input {...register("customer")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register("price")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Customer ID</FormLabel>
              <Input type="number" {...register("customerId")} />
            </FormControl>
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

export default CreateOrderModal;
