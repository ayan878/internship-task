import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  useCreateSaleOrder,
  fetchHighestSaleOrderId,
} from "../hooks/useCreateSaleOrder";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProductSelect from "./ProductSelect";

const SaleOrderForm = ({ isOpen, onClose, initialValues }) => {
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: initialValues || {
      customerName: "",
      customer_id: "",
      invoice_no: "",
      invoice_date: new Date(),
      paid: false,
      products: [],
    },
  });

  const selectedProducts = watch("products");

  const { create, update } = useCreateSaleOrder();
  const [highestId, setHighestId] = useState(null);

  useEffect(() => {
    if (!initialValues && isOpen) {
      fetchHighestSaleOrderId().then(setHighestId);
    }
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, isOpen, reset]);

  const onSubmit = (data) => {
    if (initialValues) {
      const updatedData = { ...initialValues, ...data };
      update.mutate(updatedData, {
        onSuccess: () => {
          reset();
          onClose();
        },
        onError: (error) => {
          console.error("Error updating sale order:", error);
        },
      });
    } else {
      const newData = { ...data, id: highestId + 1 };
      create.mutate(newData, {
        onSuccess: () => {
          reset();
          onClose();
        },
        onError: (error) => {
          console.error("Error creating sale order:", error);
        },
      });
    }
  };

  console.log("Selected Products:", selectedProducts); // Debugging line

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {initialValues ? "Edit Sale Order" : "Create Sale Order"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer Name</FormLabel>
              <Controller
                name="customerName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Customer ID</FormLabel>
              <Controller
                name="customer_id"
                control={control}
                render={({ field }) => <Input type="number" {...field} />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice No</FormLabel>
              <Controller
                name="invoice_no"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                name="invoice_date"
                control={control}
                render={({ field }) => (
                  <DatePicker {...field} selected={field.value} />
                )}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="paid">Paid</FormLabel>
              <Controller
                name="paid"
                control={control}
                render={({ field }) => <Checkbox {...field} id="paid" />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Products</FormLabel>
              <Controller
                name="products"
                control={control}
                render={({ field }) => (
                  <ProductSelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </FormControl>

            {Array.isArray(selectedProducts) &&
              selectedProducts.map((product) => (
                <div key={product.value} style={{ marginTop: "20px" }}>
                  <h3>{product.label}</h3>
                  {product.skus.map((sku) => (
                    <div key={sku.id}>
                      <p>Selling Price: {sku.selling_price}</p>
                      <p>Max Retail Price: {sku.max_retail_price}</p>
                      <p>Amount: {sku.amount}</p>
                      <p>Unit: {sku.unit}</p>
                      <p>Quantity in Inventory: {sku.quantity_in_inventory}</p>
                    </div>
                  ))}
                </div>
              ))}

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3}>
                {initialValues ? "Update" : "Create"}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
