// src/hooks/useSaleOrders.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSaleOrders = async () => {
  const response = await axios.get("http://localhost:5000/saleOrders");
  return response.data;
};

export const useSaleOrders = () => {
  return useQuery({
    queryKey: ["saleOrders"],
    queryFn: fetchSaleOrders,
  });
};
