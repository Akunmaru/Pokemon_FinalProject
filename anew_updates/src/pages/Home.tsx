import Background from '../assets/images/Landscape.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h1 className='p-5 bg-red-500 text-white'>Public Pokedex</h1>
      </div>
    </div>
  )
}

export default Home
