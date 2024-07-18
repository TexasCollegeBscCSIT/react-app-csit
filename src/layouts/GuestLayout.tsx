import React, { Fragment } from "react";
import Header from "../components/navbar/Header";
import Login from "../pages/Login";

export default function GuestLayout({ children }) {
  return (
    <Fragment>
      <Header></Header>
      {children}
    </Fragment>
  );
}
