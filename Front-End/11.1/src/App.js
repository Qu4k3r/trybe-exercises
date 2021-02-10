import { createElement, Component } from 'react';
import './App.css';

const task = (value) => {
  return (
    createElement('li', { className: 'list-item', key: value }, value)
  );
}

const tasks = ['Comer', 'Dormir', 'Repetir'];

class App extends Component {
  render() {
    return (
      createElement('ul', { className: 'my-list' }, tasks.map(item => task(item)))
    );
  }
}

export default App;
