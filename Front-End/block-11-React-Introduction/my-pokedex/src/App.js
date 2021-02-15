import { Component, createElement } from 'react';

import './App.css';
import pokemonData from './data';
import Footer from './footer';
import Header from './header';
import Pokemons from './pokemons';

class App extends Component {
  render() {
    const pokemonsList = createElement('main', { className:'myPokedex' }, 
    pokemonData.map((eachPokemon, index) => <Pokemons pokemon={ eachPokemon } key={ index }/>))
    return (
      <>
        <Header />
        { pokemonsList }
        <Footer />
      </>
    );
  }
}

export default App;
