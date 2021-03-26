import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <h1>CLIQUE <Link to="/login">AQUI</Link> PARA FAZER LOGIN</h1>
    );
  }
}

export default Home;
