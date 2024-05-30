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
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";

const EditOrderModal = ({ isOpen, onClose, order, setOrders }) => {
  const { handleSubmit, register, control } = useForm({
    defaultValues: order,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (values) => {
    // Mimic API call
    setOrders((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? { ...values, lastModified: new Date().toLocaleString() }
          : o
      )
    );
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
              <FormLabel>Customer ID</FormLabel>
              <Input {...register("customer_id")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register("invoice_no")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" {...register("invoice_date")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Paid</FormLabel>
              <Checkbox {...register("paid")} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Items</FormLabel>
              {fields.map((item, index) => (
                <Box key={item.id} mb={4}>
                  <FormLabel>SKU ID</FormLabel>
                  <Input {...register(`items[${index}].sku_id`)} />
                  <FormLabel>Price</FormLabel>
                  <Input type="number" {...register(`items[${index}].price`)} />
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    type="number"
                    {...register(`items[${index}].quantity`)}
                  />
                  <Button mt={2} onClick={() => remove(index)}>
                    Remove Item
                  </Button>
                </Box>
              ))}
              <Button
                mt={2}
                onClick={() => append({ sku_id: "", price: "", quantity: "" })}
              >
                Add Item
              </Button>
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

export default EditOrderModal;
