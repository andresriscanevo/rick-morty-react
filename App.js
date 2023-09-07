import { useState } from "react";
import "./App.css";
import imagerick from "./img/rick.jpg";
import { Characters } from "./component/Characters";
function App() {
  const [characters, setCharacters] = useState(null);
  const readperson = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={imagerick}></img> */}
        <h1 className="title"> Personajes de Rick And Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagerick} alt="Rick & Morty" className="img-home"></img>
            <button onClick={readperson} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
