import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Error from "./pages/error/Error.tsx";

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <Error></Error>,
//   },
//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/register",
//     element: <>Register Content</>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={routes}></RouterProvider>
//   </React.StrictMode>
// );
