import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WindowB() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth); // Funcio
    window.addEventListener("resize", handleResize); // Component did mount
    return () => {
      // Component did unmoun
      console.log("Eliminando listener en B");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {width}
      <ul>
        <li>
          <Link to="/exercicis/TeoriaComponents/WindowA">WindowA</Link>
        </li>
      </ul>
    </div>
  );
}

export default WindowB;
