import "./Graella.css";
import { useState } from "react";

function Graella() {
  let valueNum = 0;
  const [valor, setValue] = useState(0);
  function changeValue(value) {
    return value === "+5" ? valor + 5 : value === "+1" ? valor + 1 : valor - 1;
  }
  function controlValue(value) {
    if (value > 10 && value < 0) alert("The value is not between 10 and 0");
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

export default Graella;
