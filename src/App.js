import React from 'react';
import './App.css';
import PokeList from './components/PokeList';


const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    types: ['poison', 'grass'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'ivysaur',
    types: ['poison', 'grass'],
    evolution: 'bulbasaur',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 3,
    name: 'venusaur',
    types: ['poison', 'grass'],
    evolution: 'ivysaur',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 4,
    name: 'charmander',
    types: ['fire'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 5,
    name: 'charmeleon',
    types: ['fire'],
    evolution: 'charmander',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    id: 6,
    name: 'charizard',
    types: ['flying', 'fire'],
    evolution: 'charmeleon',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    id: 7,
    name: 'squirtle',
    types: ['water'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 8,
    name: 'wartortle',
    types: ['water'],
    evolution: 'squirtle',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    id: 9,
    name: 'blastoise',
    types: ['water'],
    evolution: 'wartortle',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
  {
    id: 10,
    name: 'caterpie',
    types: ['bug'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pokemons= pokemons;
    this.pagePoke= '';
    this.state = {
      pokemons: pokemons
    }  
  }


  render() {
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de Pokemons</h1>
        <PokeList pokemons={this.state.pokemons}/>      
      </div>
    );
  }

}


export default App;

/* Como sugerencia general, comprueba continuamente tu aplicación en Chrome y el terminal dónde arrancas la app con npm start. Si algo falla, hay que arreglarlo antes de continuar.
  
  Termina de añadir los elementos finales de la tarjeta de cada Pokemon: un div o article que la englobe (mira el error que tienes en consola) y una imagen para mostrar el Pokemon
  
  Termina de añadir los elementos finales de la tarjeta de cada Pokemon: los tipos tienen que ser una lista, no pueden ser h3 sueltos, recuerda que son elementos relacionados. Un OL o UL es lo suyo.

  Utiliza el nombre del Pokemon para el Alt de la imagen
  
  Usa el id de cada pokemon para el key de react cuando mapeas y creas un listado de componentes
  
  Añade estilos (un archivo sass o css por componente)
  
  Usa propTypes para comprobar el tipo de dato de las props
  
  Revisa los metadatos en index.html (lang, title...)
  
  Limpia e indenta el código
  
  Publica en Github Pages
  
  Elimina archivos sin usar y sus referencias */

