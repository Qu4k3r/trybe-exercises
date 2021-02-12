import { createElement, Component } from 'react';

class Header extends Component {
  render() {
    return(
      createElement('header', { className: 'header' },
        createElement('h1', null, 'My Pokedex'))
    );
  }
}

export default Header;
