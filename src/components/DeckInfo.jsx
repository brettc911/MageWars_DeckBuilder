import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: grey;
  height: 300px;
`


class DeckInfo extends Component {

  render() {
    return (
      <div>
        <Container>
          <h1>Deck Info</h1>
        </Container>
      </div>
    )
  }



}

export default DeckInfo;
