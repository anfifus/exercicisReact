import { useEffect, useState } from "react";

function Counter() {
  let valor = localStorage.getItem("valor");

  if (valor === null || isNaN(valor)) {
    valor = 0;
    console.log("El valor -->", valor);
    localStorage.setItem("valor", valor);
  }

  const [count, setCount] = useState(Number(valor));
  /* const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1); */
  const update = (value) => {
    if (valor !== null || !isNaN(valor)) {
      setCount(count + value);
    }

    console.log("Esta entrant count -->", count);
  };
  useEffect(() => {
    localStorage.setItem("valor", count.toString());
  }, [count]);
  return (
    <div>
      Comptador {Number(count)} <br />
      <button onClick={() => update(+1)}>+</button>
      <button onClick={() => update(-1)}>-</button>
    </div>
  );
}
export default Counter;
