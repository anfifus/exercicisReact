import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Acordio from "./exercicis/Acordio/Acordio";
import Comptador from "./exercicis/Comptador/Comptador";
import Formulari from "./exercicis/Formulari/Formulari";
import Graella from "./exercicis/Graella/Graella";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/exercicis/Acordio/Acordio",
    element: <Acordio/>,
  },
  {
    path: "/exercicis/Comptador/Comptador",
    element: <Comptador/>,
  },
  {
    path: "/exercicis/Formulari/Formulari",
    element: <Formulari/>,
  },
  {
    path: "/exercicis/Graella/Graella",
    element: <Graella/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
