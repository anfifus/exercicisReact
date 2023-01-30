import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <ul>
      <li>
        <Link to="./exercicis/Acordio/Acordio">Acordio</Link>
      </li>
      <li>
        <Link to="./exercicis/Comptador/Comptador">Comptador</Link>
      </li>
      <li>
        <Link to="./exercicis/Formulari/Formulari">Formulari</Link>
      </li>
      <li>
        <Link to="./exercicis/Graella/Graella">Graella</Link>
      </li>
      <li>
        <Link to="./exercicis/Counter/Form">Form</Link>
      </li>
      <li>
        <Link to="./exercicis/Efectes/Efectes">Efectes</Link>
      </li>
      <li>
        <Link to="./exercicis/TeoriaComponents/WindowA">WindowA</Link>
      </li>
      <li>
        <Link to="./exercicis/WindowB/WindowB">WindowB</Link>
      </li>
      <li>
        <Link to="./exercicis/PingB/PingB">PingB</Link>
      </li>
    </ul>
  );
}

export default Home;
