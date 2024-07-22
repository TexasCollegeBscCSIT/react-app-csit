import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import GuestLayout from "../layouts/GuestLayout";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <GuestLayout>
      <Routes>
        <Route path="/" index={true} element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </GuestLayout>
  );
}
