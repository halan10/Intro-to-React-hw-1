import "./App.css";
import { Sourse } from "./components/Sourse";
import { Galerry } from "./components/Gallery";
import { GALLERY_ITEMS } from "./Gallery_items";
import { Rating } from "./components/Rating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DA VINCI — THE RENAISSANCE MAN</h1>
        <hr />
        <h2>The Inventor. The Scientist. The Artist.</h2>
      </header>
      <Sourse />
      {GALLERY_ITEMS.map((i, k) => (
        <Galerry key={i.k} {...i} />
      ))}
      <Rating />
    </div>
  );
}

export default App;
