import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const App = () => {
  const [count, setCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];

  // ✅ useMemo: total recalculated only when selectedProducts changes
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return selectedProducts.reduce((sum, p) => sum + p.price, 0);
  }, [selectedProducts]);

  // ✅ useCallback: stable function reference
  const handleSelectProduct = useCallback((product) => {
    setSelectedProducts((prev) => [...prev, product]);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <p>Total Price of Selected: ${totalPrice}</p>
      <p>Selected Count: {count}</p>

      <ProductList products={products} onSelect={handleSelectProduct} />
    </div>
  );
};

export default App;