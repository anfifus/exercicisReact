import { useState } from "react";
import "./Picture.css";

function Picture({ src }) {
  const [full, setFull] = useState(false);
  const resize = () => {
    setFull((previous) => !previous);
  };

  return (
    <img
      src={src}
      alt={src}
      className={full ? "fullSize" : "normalSize"}
      onClick={resize}
    />
  );
}

export default Picture;
