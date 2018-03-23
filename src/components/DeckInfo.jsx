import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: grey;
  height: 300px;
`


class DeckInfo extends Component {

  renderCards(){
    let cards = []
    cards = this.props.cards.map((card,i) => {
      return(
        <div key={i}>
          <button onClick={this.props.removeCard} id={card._id}>-</button>
          <h2>{card.cardName} {card.number}</h2>
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
          <input onChange={this.props.deckNameChange} value={this.props.deckName}/>
          <label>Mage</label>
          <input onChange={this.props.mageChange} value={this.props.mage} />
          <label>Cards</label>
          {this.renderCards()}
          <button onClick={this.props.saveDeck}>Save Deck</button>
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
