import Picture from "./components/Picture";
import "./Graella.css";

function Graella() {
  const pics = [
    "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm52KQjdBLjN4vrOPuRDxN54BjYDGon7A1a6MTX56b9IRr_HmMdfo2oI8VHXGb_RqHJ0&usqp=CAU",
    "https://i.pinimg.com/736x/33/fd/83/33fd837ce2f6f69e7f86ca1ee2703a8f.jpg",
  ];

  return (
    <div className="graella">
      {pics.map((pic, i) => {
        return <Picture key={i} src={pic} />;
      })}
    </div>
  );
}

export default Graella;
