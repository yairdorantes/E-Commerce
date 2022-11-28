import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import ProductView from "../components/ProductView";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products/:section" element={<ProductList />}></Route>
      <Route path="/:section/:id" element={<ProductView />}></Route>
    </Routes>
  );
};

export default Routers;
