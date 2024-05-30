import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const CreateOrderForm = ({ customers, products, onSubmit }) => {
  const { handleSubmit, control, register } = useForm();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
  };

  const submitForm = (data) => {
    const orderData = {
      ...data,
      items: selectedProducts.map((product) => ({
        sku_id: product.value,
        price: product.price,
        quantity: product.quantity || 0,
      })),
    };
    onSubmit(orderData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FormControl>
        <FormLabel>Invoice No</FormLabel>
        <Input {...register("invoice_no")} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Customer</FormLabel>
        <Select {...register("customer_id")}>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Date</FormLabel>
        <Input type="date" {...register("invoice_date")} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Products</FormLabel>
        <Controller
          name="products"
          control={control}
          render={({ field }) => (
            <ReactSelect
              {...field}
              isMulti
              options={products.map((product) => ({
                value: product.id,
                label: product.name,
                price: product.price,
              }))}
              onChange={handleProductChange}
            />
          )}
        />
      </FormControl>

      {selectedProducts.map((product, index) => (
        <Box key={product.value} mt={4}>
          <FormLabel>{product.label}</FormLabel>
          <FormControl mt={2}>
            <Input
              type="number"
              placeholder="Enter Quantity"
              onChange={(e) => {
                const updatedProducts = [...selectedProducts];
                updatedProducts[index].quantity = e.target.value;
                setSelectedProducts(updatedProducts);
              }}
            />
          </FormControl>
        </Box>
      ))}

      <Button mt={4} colorScheme="teal" type="submit">
        Save
      </Button>
    </form>
  );
};

export default CreateOrderForm;
