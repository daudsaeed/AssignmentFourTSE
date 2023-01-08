import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./routes/auth/Login";
import Packages from "./routes/packages/packages";
import Services from "./routes/services/Services";
import ProductsRoute from "./routes/products/product";
import Subscriptions from "./routes/subscriptions/subscriptions";
import VerticalNavigation from "./routes/vertical-navigation/VerticalNavigation";

import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<VerticalNavigation />}>
        <Route index element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/products/*" element={<ProductsRoute />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Route>
    </Routes>
  );
}

export default App;
