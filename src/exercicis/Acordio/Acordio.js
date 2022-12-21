import "./Acordio.css";
import Titol from "./Components/Titol";

const titols = [
  { titol: "Titol 1", subtitol: "Subtitol 1" },
  { titol: "Titol 2", subtitol: "Subtitol 2" },
  { titol: "Titol 3", subtitol: "Subtitol 3" },
  { titol: "Titol 4", subtitol: "Subtitol 4" },
  { titol: "Titol 5", subtitol: "Subtitol 5" },
];

function Acordio() {
  return titols.map((titol, contador) => {
    return (
      <Titol
        key={contador.toString()}
        titol={titol.titol}
        subtitol={titol.subtitol}
        id={contador}
      />
    );
  });
}
export default Acordio;
