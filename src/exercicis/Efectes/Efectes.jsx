import { useEffect } from "react";
import { useState } from "react";

function Ping() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout((n) => {
      console.log("El valor -->", count);
      setCount((n) => n + 1);
    }, 2000);
  }, []);
  return <h1>I have counted {count} times!</h1>;
}
export default Ping;
