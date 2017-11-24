import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: grey;
  height: 300px;
`


class DeckInfo extends Component {

  renderCards(){
    let cards = []
    cards = this.props.cards.map(card => {
      return(
        <div>
          <h1>Name:</h1>
          <h2>{card.cardName}</h2>
        </div>
      )
    })
    return cards
  }

  renderDeckInfo(){
    return (
        <Container>
          <h1>Deck Info</h1>
          <label>Deck Name</label>
          <input onChange={this.props.handleDeckNameChange} value={this.props.deckName}/>
          <label>Mage</label>
          <input onChange={this.props.handleMageChange} value={this.props.mage} />
          <label>Cards</label>
          {this.renderCards()}
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
