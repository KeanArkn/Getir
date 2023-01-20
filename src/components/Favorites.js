import React, { useEffect, useState } from "react";
import Products from "api/products.json";
import Title from "ui/Title";
import Product from "ui/ProductItem";

function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
