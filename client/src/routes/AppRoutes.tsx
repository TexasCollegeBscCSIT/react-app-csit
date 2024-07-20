import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index={true} element={<App></App>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}
