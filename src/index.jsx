import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Acordio from "./exercicis/Acordio/Acordio";
import Comptador from "./exercicis/Comptador/Comptador";
import Formulari from "./exercicis/Formulari/Formulari";
import Graella from "./exercicis/Graella/Graella";
import FormCounter from "./exercicis/Counter/Form";
import Efectes from "./exercicis/Efectes/Efectes";
import reportWebVitals from "./reportWebVitals";
import WindowA from "./exercicis/TeoriaComponents/WindowA";
import WindowB from "./exercicis/WindowB/WindowB";
import PingB from "./exercicis/PingB/PingB";
import FrontEnd from "./exercicis/FrontEnd/FrontEnd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercicis/Acordio/Acordio",
    element: <Acordio />,
  },
  {
    path: "/exercicis/Comptador/Comptador",
    element: <Comptador />,
  },
  {
    path: "/exercicis/Formulari/Formulari",
    element: <Formulari />,
  },
  {
    path: "/exercicis/Graella/Graella",
    element: <Graella />,
  },
  {
    path: "/exercicis/Counter/Form",
    element: <FormCounter />,
  },
  {
    path: "/exercicis/Efectes/Efectes",
    element: <Efectes />,
  },
  {
    path: "/exercicis/TeoriaComponents/WindowA",
    element: <WindowA />,
  },
  {
    path: "/exercicis/WindowB/WindowB",
    element: <WindowB />,
  },
  {
    path: "/exercicis/PingB/PingB",
    element: <PingB />,
  },
  {
    path: "/exercicis/FrontEnd/FrontEnd",
    element: <FrontEnd />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
