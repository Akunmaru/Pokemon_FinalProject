import React from'react';
import { render } from 'react-dom';
import FirstPoke from '../components/ThreeStarters/FirstPoke';
import FirstPokemon from '../components/ThreeStarters/FirstPokemon';
import SecondPoke from '../components/ThreeStarters/SecondPoke';
import SecondPokemon from '../components/ThreeStarters/SecondPokemon';
import ThirdPoke from '../components/ThreeStarters/ThirdPoke';
import ThirdPokemon from '../components/ThreeStarters/ThirdPokemon';
import "/Users/akunmaru/Documents/temple/Module_8/Final Project/anew_update/anew_updates/src/static/StarterPage.css"
import Background from '../assets/images/background.jpg'

function Starters() {
  return(
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='bg-cover'>
      <h1 className='h1'>Sword and Shield Starters!</h1>
      <h2 className='text-center'>These starters update as the PokeAPI data updates!</h2>
      <h2 className='text-center'>Stay tuned for new starter info!</h2>
        <div className='contained'>
          <table>
            <td>
              <div className="item1">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png" alt="scorbunny" />
                <FirstPoke />
                <FirstPokemon />
              </div>
            </td>
            <td>
              <div className="item2">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png" alt="grooky" />
                <SecondPoke />
                <SecondPokemon />
              </div>
            </td>
            <td>
              <div className="item3">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png" alt="grooky" />
                <ThirdPoke />
                <ThirdPokemon />
              </div>
            </td>
          </table>
        </div>
        <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default Starters;