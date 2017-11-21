import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = styled.button`
  padding: 20px 20px;
  background: green;
  color: white;
  cursor: pointer;
`


class BuilderGateway extends Component {

  render() {
    return (
      <div>
        <Link to='/builder/edit'><Button>Create new Deck!</Button></Link>
      </div>
    )
  }



}

export default BuilderGateway;
