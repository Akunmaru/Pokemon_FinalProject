import { useState, useEffect } from "react";
import "/Users/akunmaru/Documents/temple/Module_8/Final Project/anew_update/anew_updates/src/app.css"

// type resultProps = {
//   ability: string;
//   name: string;
// };

function FirstPokemon() {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/scorbunny/', {
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


export default FirstPokemon