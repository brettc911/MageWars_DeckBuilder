import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: grey;
  height: 300px;
`


class DeckInfo extends Component {

  renderDeckInfo(){
    return (
        <Container>
          <h1>Deck Info</h1>
          <label>Deck Name</label>
          <input onChange={this.props.handleDeckNameChange} value={this.props.deckName}/>
          <label>Mage</label>
          <input onChange={this.props.handleMageChange} value={this.props.mage} />
        </Container>
    )
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps) {
      this.renderDeckInfo()
    }
  }

  render() {
    return (
      <div>
        {this.renderDeckInfo()}
      </div>
    )
  }



}

export default DeckInfo;
