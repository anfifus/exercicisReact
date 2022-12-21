import { useState } from "react";
import "./Titol.css";

function Titol({ titol, subtitol, id }) {
  const [visibility, setVisibility] = useState("hidden");
  console.log("visibility >>", visibility);

  const design = {
    h2: {
      visibility: `${visibility}`,
    },
  };

  const handlerVisibility = (e) => {
    setVisibility(() => changeVisibility(e));
  };

  function changeVisibility(e) {
    console.log("id >>", id);
    console.log("e >>", Number(e.target.id));
    return visibility === "hidden" && e.target.id === id.toString()
      ? "visible"
      : visibility === "visible" && Number(e.target.id) === id.toString()
      ? "hidden"
      : "hidden";
  }
  return (
    <div>
      <h1 key={id.toString()} id={id} onClick={(e) => handlerVisibility(e)}>
        {titol}
      </h1>
      <h2 style={design.h2}>{subtitol}</h2>
    </div>
  );
}

export default Titol;
