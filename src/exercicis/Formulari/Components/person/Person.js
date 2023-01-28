import { useState } from "react";
import "./Person.css";

function Person({ namePerson, email, birthdate }) {
  const [exist, setExistence] = useState(false);
  function handler() {
    setExistence((isExisting) =>
      createElement(
        document.getElementById("namePerson").value,
        document.getElementById("birthdate").value,
        isExisting
      )
    );
  }

  return (
    <div>
      <input type="text" id="namePerson" placeholder="Name" />
      <input type="email" id="email" placeholder="email" />{" "}
      <input type="text" id="birthdate" placeholder="birthdate" />
      <input type="submit" value="submit" onClick={handler} />
    </div>
  );

  function createElement(namePerson, birthdate, isExisting) {
    console.log("namePerson >>", namePerson);
    console.log("Birthdate >>", birthdate);
    if (!isExisting) {
      let age = new Date().getFullYear() - birthdate;
      <p>
        Hola {namePerson}. Tens {age} anys
      </p>;
      return true;
    } else return false;
  }
}

export default Person;
