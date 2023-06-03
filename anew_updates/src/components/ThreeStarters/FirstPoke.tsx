import { useState, useEffect } from "react";
import "/Users/akunmaru/Documents/temple/Module_8/Final Project/anew_update/anew_updates/src/app.css"

function FirstPoke() {
  const [result, setResult] = useState<any[]>([]);
  const [ pokeModel ] = useState<string[]>([])
  
  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/scorbunny/', {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.forms);
    };

    api();
  }, []);

  return (
    <div className="App">
        {result && result.map((value) => {
          return (
            <div className="grid-item">
              <div>
                <h1>{value.name}</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
}


export default FirstPoke