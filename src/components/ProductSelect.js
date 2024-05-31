import React from "react";
import Select from "react-select";
import { useProducts } from "../hooks/useProducts";

const ProductSelect = ({ value, onChange }) => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const options = data?.map((product) => ({
    value: product.id,
    label: product.name,
    skus: product.sku,
  }));

  return <Select isMulti options={options} value={value} onChange={onChange} />;
};

export default ProductSelect;
