import Foto from "./exercicis/Graella/Components/foto/Foto";
import "./App.css";

const fotosURL = [
  "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1345357821.1642523629",
  "https://img.freepik.com/foto-gratis/hermoso-arbol-medio-campo-cubierto-hierba-linea-arboles-fondo_181624-29267.jpg?w=1380&t=st=1670952750~exp=1670953350~hmac=6e891d58325d1b0b2c497f17ab92c2002a966507dfd32e36c670b0d6a34303de",
  "https://img.freepik.com/foto-gratis/solo-arbol-verde-cielo-despejado_181624-46695.jpg?w=1380&t=st=1670952763~exp=1670953363~hmac=5ef43f7587e29b59cbf6050ac0ee81e33de27dcbce0cc5a1480532c0e16b31ab",
  "https://img.freepik.com/foto-gratis/fascinante-paisaje-colinas-que-tocan-cielo-campo_181624-17571.jpg?w=1380&t=st=1670952788~exp=1670953388~hmac=fb807beff082037de5a3d438b14f59177705088199c9dc85dbcdc52619a9dbf4",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="graella">
          {fotosURL.map((fotoURL, count) => {
            return <Foto key={fotoURL} foto={fotoURL} turn={count} />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
