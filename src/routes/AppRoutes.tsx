import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index={true} element={<App></App>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
    </Routes>
  );
}
