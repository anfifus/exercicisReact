 import { useState } from "react";
 import "./Titol.css";

function Titol({titol, subtitol , id  }) {
   const [visibility, setVisibility] = useState("invisibility");
 
/*   const design = {
    h2: {
      visibility: `${visibility}`,
    },
  }; */

   const handlerVisibility = (e) => {
    setVisibility((isVisible) => changeVisibility(isVisible,e));
  }; 

/*   function changeVisibility() {
     console.log("id >>", id);
     console.log("e >>", e);
     console.log("Result condition",e.target.id === id.toString());
     return visibility === "hidden"  && e.target.id === id.toString() 
      ? "visible"
      : visibility === "visible"  && e.target.id === id.toString() 
      ? "hidden"
      : "hidden";
  } */
      function changeVisibility(isVisible,e) {
      console.log("id >>", id);
      console.log("e.target.id >>", e.target.id);
      console.log("e >>", isVisible);
      console.log("Result condition",e.target.id === id.toString());
     return isVisible === "invisibility" && Number(e.target.id) === id 
      ? "visibility" 
      : isVisible === "visibility" && e.target.id === id ? "invisibility"
      : "invisibility";
  }  
  return (
    <div>
      <h1 id={id}
        onClick={handlerVisibility}>
        {titol}
      </h1>
      <h2 /* style={design.h2} */  className= {visibility} >{subtitol}</h2>
    </div>
  );
}

export default Titol;
