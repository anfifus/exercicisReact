import "./Comptador.css";
import { useState } from "react";

function Comptador() {
  let valueNum = 0;
  const [valor, setValue] = useState(0);
  function changeValue(value) {
    console.log("Valor a devolver >>", valor);
    return value === "+5" && valor < 6
      ? valor + 5
      : value === "+1" && valor !== 10
      ? valor + 1
      : valor !== 0 && value === "-1"
      ? valor - 1
      : valor;
    /*   if(valor >= 6 && value === "+5" || valor === 10 && value === "+1"){
      alert("The value limit is 10");
    }
    else{
      if(valor === 0 && value === "-1"){
        alert("the value minium limit is 0");
      }
      else{console.log("Valor a devolver >>",valor); */
    //return value === "+5" ? valor + 5 : value === "+1" ? valor + 1 : valor - 1;

    /* } 
    }*/
  }

  console.log("Value num>>", valueNum);
  const handlerClick = (value) => {
    setValue(() => changeValue(value));
  };
  return (
    <div className="graella">
      <input
        id="number"
        type="number"
        placeholder="Display"
        readOnly
        value={valor}
      />
      <input type="button" value="+1" onClick={() => handlerClick("+1")} />
      <input type="button" value="-1" onClick={() => handlerClick("-1")} />
      <input type="button" value="+5" onClick={() => handlerClick("+5")} />
    </div>
  );
}

export default Comptador;
