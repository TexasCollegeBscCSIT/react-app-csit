import React, { Fragment } from "react";
import Header from "../components/navbar/Header";
import Login from "../pages/Login";

export default function GuestLayout({ children }) {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <Header></Header>
      <div className="bg-black/75 h-screen w-screen">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
}
