import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const createSaleOrder = async (newOrder) => {
  const response = await axios.post(
    "http://localhost:5000/saleOrders",
    newOrder
  );
  return response.data;
};

const updateSaleOrder = async (updatedOrder) => {
  const response = await axios.put(
    `http://localhost:5000/saleOrders/${updatedOrder.id}`,
    updatedOrder
  );
  return response.data;
};

export const fetchHighestSaleOrderId = async () => {
  const response = await axios.get("http://localhost:5000/saleOrders");
  const saleOrders = response.data;
  const highestId = Math.max(0, ...saleOrders.map((order) => order.id));
  return highestId;
};

export const useCreateSaleOrder = () => {
  const queryClient = useQueryClient();
  return {
    create: useMutation({
      mutationFn: createSaleOrder,
      onSuccess: () => {
        queryClient.invalidateQueries("activeOrders");
      },
    }),
    update: useMutation({
      mutationFn: updateSaleOrder,
      onSuccess: () => {
        queryClient.invalidateQueries("activeOrders");
      },
    }),
  };
};
