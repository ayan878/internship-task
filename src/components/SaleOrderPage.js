import React from "react";
import { useSaleOrders } from "../hooks/useSaleOrders";



const SaleOrderPage = () => {

const {saleOrders,isLoading,error}=useSaleOrders()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Sale Orders</h1>
      <h2>Active Sales</h2>
      <ul>
        {saleOrders
          ?.filter((order) => !order.completed)
          .map((order) => (
            <li key={order.id}>
              {order.customer} - {order.product} - {order.quantity}
            </li>
          ))}
      </ul>
      <h2>Completed Sales</h2>
      <ul>
        {saleOrders
          ?.filter((order) => order.completed)
          .map((order) => (
            <li key={order.id}>
              {order.customer} - {order.product} - {order.quantity}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SaleOrderPage;
