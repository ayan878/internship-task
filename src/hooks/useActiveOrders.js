import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchActiveOrders = async () => {
  const response = await axios.get(
    "http://localhost:5000/saleOrders?paid=false"
  );
  return response.data;
};

export const useActiveOrders = () => {
  return useQuery({
    queryKey: "activeOrders",
    queryFn: fetchActiveOrders,
  });
};
