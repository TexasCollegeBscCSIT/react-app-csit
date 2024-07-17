import React, { Fragment } from "react";
import Header from "../components/navbar/Header";
import Login from "../components/page/Login";

export default function GuestLayout() {
  return (
    <Fragment>
      <Header></Header>
      <Login></Login>
    </Fragment>
  );
}
