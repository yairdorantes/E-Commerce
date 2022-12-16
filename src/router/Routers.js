import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "../components/FavoritesPage";
import Home from "../components/Home";
import Login from "../components/Login";
import ProductList from "../components/ProductList";
import ProductView from "../components/ProductView";
import ShoppingCart from "../components/ShoppingCart";
import SignUp from "../components/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products/:section/:id" element={<ProductList />}></Route>
      <Route path="/:section/:id" element={<ProductView />}></Route>
      <Route path="/cart/" element={<ShoppingCart />}></Route>
      <Route path="/signup/" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/favorites" element={<FavoritesPage />}></Route>
    </Routes>
  );
};

export default Routers;
