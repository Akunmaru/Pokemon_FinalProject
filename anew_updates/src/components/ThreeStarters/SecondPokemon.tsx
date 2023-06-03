import { useState, useEffect } from "react";
import "/Users/akunmaru/Documents/temple/Module_8/Final Project/anew_update/anew_updates/src/app.css"

function SecondPokemon() {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/grookey/', {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.abilities);
    };

    api();
  }, []);

  return (
    <div className="App">
        {result && result.map((value) => {
          return (
            <div>
                <h1>Ability: {value.ability.name}</h1>
            </div>
          );
        })}
    </div>
  );
}


export default SecondPokemon