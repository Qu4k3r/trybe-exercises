import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    const { anyClients, loggedIn,  registeredClients } = this.props;
    const noClients = <div>Não há clientes cadastrados</div>
    const clientsList = <ul>
      { registeredClients.map(({ name }) => <li>{name}</li>) }
    </ul>
    const clientNotLoggedIn = <div>Login não efetuado</div>
    if(!loggedIn) return clientNotLoggedIn;
    return anyClients ? clientsList : noClients;
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.clientReducer.loggedIn,
  registeredClients: state.clientReducer.registeredClients,
  anyClients: state.clientReducer.anyClients,
});

export default connect(mapStateToProps, null)(Clients);


// aqui tera a lista de clientes cadastrados ou a mensagem "nao ha clientes cadastrados"
// deve conter a mensagem "login nao efetuado" em caso de entrar na pagina pela url (fazer props pra tratar isso)
