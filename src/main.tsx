import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import Home from "./Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs.tsx";
import ContactUs from "./ContactUs.tsx";
import More from "./More.tsx";
import { HelmetProvider } from "react-helmet-async";
import Galery from "./Galery.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/more",
    element: <More />,
  },
  {
    path: "/galery",
    element: <Galery />,
  },
]);

// const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
