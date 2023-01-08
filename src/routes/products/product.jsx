import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../../components/product/product.component";
import Products from "../../components/products/products.component";

const ProductsRoute = () => {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":productId" element={<Product />} />
    </Routes>
  );
};

export default ProductsRoute;
