import Background from '../assets/images/handful.jpg'
import "/Users/akunmaru/Documents/temple/Module_8/Final Project/anew_update/anew_updates/src/static/StarterPage.css"

function About() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h1 className='bg-white bg-opacity-50 h1 text-blue-700 text-center'> About This Application! This application is FAN MADE!!! And has utilized the public API titled "PokeAPI"! The "Starters" page will keep up with Pokemon's latest game's starters! 
          However will not always be up-to-date depending on when the PokeAPI updates their Data! 
          <a  className='h1 text-red-700 text-center' href="https://pokeapi.co/docs/v2"> (Link to their documentation)</a>
        </h1>
      </div>
    </div>
  )
}

export default About