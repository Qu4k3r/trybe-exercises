import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logUserIn } from './actions';

class Login extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <label htmlFor="userLogin">
          Login:
          <input type="email"/>
        </label>
        <label htmlFor="userLogin">
          Senha:
          <input type="password"/>
        </label>
        <Link onClick={() => loggedIn()} to="/clients">
          <button type="button">Entrar</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loggedIn: () => dispatch(logUserIn()),
});

export default connect(null, mapDispatchToProps)(Login);
