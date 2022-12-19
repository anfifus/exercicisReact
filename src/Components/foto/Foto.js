import "./Foto.css";
import { useState } from "react";


function Foto({foto, turn}) {
  
  const [height,setHeight] = useState(200);
  const [width,setWidth] = useState(200);
function changeHeight(){
  return height === 200 ? height +  900 : height -900;
}
function changeWidth(){
  return width === 200 ? width + 900 : width -900;
}

   const sizeHandler = () =>{
    setHeight(changeHeight());
    setWidth(changeWidth());
   }
  return (
    <img
      className="fotoDesign"
      id={turn} 
      src={foto}
      alt={foto}
      width={width}
      height={height}
      onClick={sizeHandler}
    />
  );
}
export default Foto;
