import { Component } from 'react';

class Pokemons extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return(
      <section className='pokemon'>
        <div id='info'>
          <div id='name'>{ name }</div>
          <div id='type'>{ type }</div>
          <div id='weight'>{ `${ value } ${ measurementUnit }` }</div>
        </div>
        <div id='image'>
          <img src={ image }></img>
        </div>
      </section>
    )
  }
}

export default Pokemons;
