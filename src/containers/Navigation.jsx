import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'
// Import Router
import { Link } from 'react-router-dom';

// BEGIN STYING
// __________________________________________________________

const Header = styled.div`
  height: 100px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    display: flex;
    flex-direction: row;
  }
  a{
    color: #fff;
    padding: 50px;
  }
`


class Navigation extends Component {

  render() {
    return (
      <div>
        <Header>
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

export default Navigation;
