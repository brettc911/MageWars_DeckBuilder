import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.svg'

// BEGIN STYING
// __________________________________________________________

const Header = styled.div`
  height: 100px;
  background: #303030;
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ul{
    display: flex;
    flex-direction: row;
  }
  a{
    font-family: 'Dosis', sans-serif;
    color: #979797;
    margin: 0 30px;
    &:hover{
      color: white;
    }
  }
`
const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  height: 29px;
  width: 30px;
`


class Navigation extends Component {

  render() {
    return (
      <div>
        <Header>
          <Logo></Logo>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cards'>Cards</Link></li>
            <li><Link to='/decks'>Decks</Link></li>
            <li><Link to='/builder'>Builder</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </Header>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation
