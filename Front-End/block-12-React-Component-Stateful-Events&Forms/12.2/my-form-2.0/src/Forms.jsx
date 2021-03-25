import React, { Component } from 'react';
import states from './data';

class Forms extends Component {
  render() {
    const { propEvent, stateObj: { name, email, cpf, address, city, resume, position, description } } = this.props;
    return(
      <form className='forms col'>
        <fieldset className='col'>
          <label>Nome:
            <input required type="text" maxLength='40' name="name" value={ name } onChange={ propEvent }/>
          </label>
          <label>Email:
            <input required type="text" maxLength='50' name="email" value={ email } onChange={ propEvent } />
          </label>
          <label>CPF:
            <input required type="number" maxLength='11' name="cpf" value={ cpf } onChange={ propEvent }/>
          </label>
          <label>Endereço:
            <input required type="text" maxLength='200' name="address" value={ address } onChange={ propEvent }/>
          </label>
          <label>Cidade:
            <input required type="text" maxLength='28' name="city" value={ city } onChange={ propEvent }/>
          </label>
          <label>Estado:
            <select required name="region" onChange={ propEvent }>
              { states.map(eachState => <option key={ eachState.nome } value={ eachState.sigla }>{ eachState.nome }</option>) }
            </select>
          </label>
          <label>Casa
            <input required type="radio" name="home" value='house' onChange={ propEvent }/>
          </label>
          <label>Apartamento
            <input type="radio" name="home" value='apartment' onChange={ propEvent }/>
          </label>
        </fieldset>
        <fieldset className='col'>
          <label>Resumo do currículo: </label>
          <textarea required name="resume" maxLength='1000' cols="30" rows="10" value={ resume } onChange={ propEvent }></textarea>
          <label>Cargo: </label>
          <textarea required name="position" maxLength="40" cols="30" rows="2" value={ position } onChange={ propEvent }></textarea>
          <label>Descrição do cargo: </label>
          <textarea required name="description" maxLength="500" cols="30" rows="10" value={ description } onChange={ propEvent }></textarea>
        </fieldset>
      </form>
    )
  }
}

export default Forms;
