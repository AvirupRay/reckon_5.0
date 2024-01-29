import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Supplier from "./Components/Supplier/Supplier.jsx";
import Home from "./Components/HomePage/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./Apps/store.js";
import Login from "./Components/Login/Login.jsx";
import About from "./Components/About/About.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Collector from "./Components/Collector/Collector.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "supplr",
        element: <Supplier />,
      },
      {
        path: "collector",
        element: <Collector />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
