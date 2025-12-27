import React from "react";

const ProductList = ({ products, onSelect }) => {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => onSelect(product)}>Select</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;