import "./Acordio.css";
import Titol from "./Components/Titol";
import { useState } from "react";
 
const titols = [
  { titol: "Titol 1", subtitol: "Subtitol 1" },
  { titol: "Titol 2", subtitol: "Subtitol 2" },
  { titol: "Titol 3", subtitol: "Subtitol 3" },
  { titol: "Titol 4", subtitol: "Subtitol 4" },
  { titol: "Titol 5", subtitol: "Subtitol 5" },
];

function Acordio() {
/*   const [visibility, setVisibility] = useState("invisibility");
 */
/*   const handlerVisibility = (e,id) => {
    setVisibility((isVisible) => changeVisibility(isVisible,e,id));
  }; */

  /* function changeVisibility(isVisible,e,id) {
    console.log("id >>", id);
    console.log("e.target.id >>", e.target.id);
    console.log("e >>", isVisible);
    console.log("Result condition",e.target.id === id.toString());
   return isVisible === "invisibility" && Number(e.target.id) === id 
    ? "visibility" 
    : isVisible === "visibility" && e.target.id === id ? "invisibility"
    : "invisibility";
}  */
/* function changeVisibility(isVisible,e,id) {
  console.log("id >>", id);
  console.log("e.target.id >>", e.target.id);
  console.log("e >>", isVisible);
  console.log("Result condition",e.target.id === id.toString());
 return isVisible === "invisibility" ? "visibility" 
  : "invisibility";
}
 */
  return titols.map((titol, contador) => {
    return (
      <Titol
/*         clickResult={(e) => handlerVisibility(e,contador)}
 */        key={contador}
        titol={titol.titol}
        subtitol={titol.subtitol}
         id={contador}
/*          visibility= {visibility}
 */       />
    );
  });
}
export default Acordio;
