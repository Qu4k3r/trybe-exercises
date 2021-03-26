import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerClient } from './actions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  updateClientInfo = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { dispatchClient } = this.props;
    dispatchClient(this.state);
    this.setState({ name: '', age: '', email: '' })
  }

  render(){
    const { name, age, email } = this.state;
    const newClientForm = <div>
      <form action="newClient">
        <fieldset>
          <legend>New client</legend>
          <label>
            Nome:
            <input name="name" value={ name } onChange={ this.updateClientInfo } type="text"/>
          </label>
          <label>
            Idade:
            <input name="age" value={ age } onChange={ this.updateClientInfo } type="number" min="18"/>
          </label>
          <label>
            Email:
            <input name="email" value={ email } onChange={ this.updateClientInfo } type="email"/>
          </label>
        </fieldset>
      </form>
      <button type="button" onClick={() => {
        this.handleClick()
      }}>Registrar</button>
      <Link to="/login">Fazer login</Link>
    </div>
    return newClientForm;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchClient: (client) => dispatch(registerClient(client)) 
});

export default connect(null, mapDispatchToProps)(Register);

// pagina para o admin cadastrar novos clientes
// devera conter o forms para cadastro
// deve conter a mensagem "login nao efetuado" em caso de entrar na pagina pela url (fazer props pra tratar isso)