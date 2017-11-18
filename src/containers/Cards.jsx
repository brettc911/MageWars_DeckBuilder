import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux:
import cardReducer from '../reducers/cardReducer';
import { fetchCards } from '../actions'

// BEGIN STYING
// _________________________________________________________


class Cards extends Component {

  constructor(){
    super()
    this.state = {
      allCards: null,
      deck: [],
    }
  }

  componentWillMount(){
    this.props.fetchCards()
  }

  render() {
    return (
      <div>
        DeckBuilder
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps, { fetchCards })(Cards)
