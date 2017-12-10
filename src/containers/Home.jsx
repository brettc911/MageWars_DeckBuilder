import React, { Component } from 'react';
import styled from 'styled-components'

// Import images
import background1 from '../styles/images/background1.jpg'
import logo from '../styles/images/logo.svg'

// BEGIN STYING
// _________________________________________________________
const Background = styled.div`
  font-family: 'Dosis', sans-serif;
  background-image: url(${background1});
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 80px 0 20px 0;
    width: 110px;
  }
  a {
    color: #fff;
    font-size: 12px;
    margin: 7px 0;
    cursor: pointer;
    &:hover {
      color: #67FF83;
    }
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 230px;
  margin-bottom: 30px;
  label {
    font-size: 16px;
    color: #67FF83;
  }
  input {
    font-size: 16px;
    margin: 5px 0 30px 0;
    background: none;
    border: solid 2px #67FF83;
    height: 35px;
    width: 94%;
    color: white;
    padding-left: 10px;
  }
  button {
    margin: 0 auto;
    padding: 8px 15px;
    background: none;
    outline: none;
    border: solid 2px #67FF83;
    font-size: 16px;
    color: #67FF83;
    &:hover {
      background: #67FF83;
      color: #303030;
      cursor: pointer;
    }
  }

`
const Magestack = styled.h1`
  font-size: 32px;
  color: #67FF83;
  letter-spacing: 10px;
  padding-left: 10px;
  margin-bottom: 45px;
  font-family: 'Cinzel', serif;
`

class Home extends Component {

  render() {
    return (
      <Background>
        <img src={logo} alt="" />
        <Magestack>Mage Stack</Magestack>
        <Form class="" action="index.html" method="post">
          <label>Username</label>
          <input />
          <label>Password</label>
          <input type="password" />
          <button>Login</button>
        </Form>
        <a>Need an account? Create one!</a>
        <a>Forgot Username or Password?</a>
      </Background>
    );
  }
}

export default Home;
