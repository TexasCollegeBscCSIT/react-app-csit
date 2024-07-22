import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import GuestLayout from "../layouts/GuestLayout";

export default function AppRoutes() {
  return (
    <GuestLayout>
      <Routes>
        <Route path="/" index={true} element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </GuestLayout>
  );
}
