import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Forms from './Forms';

const emptyState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  region: '',
  home: '',
  resume: '',
  position: '',
  description: '',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = emptyState;
  }

  changeValues = (event) => {
    const { name, value } = event.target;
    return this.setState({ [name]: value })
  }

  submitValues = (currentState=this.state) => {
    const keysArray = Object.keys(currentState);
    const result = <>
      { keysArray.map((objKey, index) => <p key={index}>{ `${objKey} : ${currentState[objKey]}` }</p>) }
    </>
    ReactDOM.render(result, document.querySelector('#result'))
  }

  clearValues = () => {
    this.setState(emptyState)
    this.submitValues(emptyState);
  }

  render() {
    return (
      <main className="App">
        <Forms propEvent={ this.changeValues } stateObj={ this.state }/>
        <div className="row">
          <button type="submit" onClick={ () => this.submitValues(this.state) }>Submit</button>
          <button type="reset" onClick={ this.clearValues }>Clear</button>
        </div>
        <div id="result"></div>
        {/* Aqui será retornado o forms preenchido ao clique do botão */}
      </main>
    );
  }
}

export default App;
