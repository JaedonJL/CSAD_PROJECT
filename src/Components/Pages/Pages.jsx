import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ClothesGenerationPage from "../Tabs/ClothingGenerationPage";
import ShopPage from "../Tabs/ShopPage";
import AccountPage from "../Tabs/AccountPage";
import HomePage from "../Tabs/HomePage";
import Regsiter from "./Regsiter";
import Reset from "./Reset";
import FriendProfile from "./FriendProfile";
import Profile from "./Profile";




const Pages = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Regsiter />} />
    <Route path="/reset" element={<Reset />} />
    <Route path="/fprofile/:id" element={<FriendProfile />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/clothes" element={<ClothesGenerationPage />} />
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/account" element={<AccountPage />} />
</Routes>

    </div>
  );
};

export default Pages;
