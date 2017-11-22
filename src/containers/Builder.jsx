import React, { Component } from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'
import cardReducer from '../reducers/cardReducer';
import deckReducer from '../reducers/deckReducer';
import { fetchCards } from '../actions'

// Import Components
import Table from '../components/Table'
import Filter from '../components/Filter'
import DeckInfo from '../components/DeckInfo'

// Import images
import mw_background_1 from '../styles/images/mw_background_1.jpg'

// BEGIN STYING
// _________________________________________________________

const H1 = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
`
class Builder extends Component {
  constructor(){
    super()
    this.state = {
      allCards: null,
      filteredCards: null,
      currentDeck: {
        deckName: '',
        mage: '',
        cards: []
      }
    }
  }

  componentWillMount(){
    this.props.fetchCards()

  }

  componentDidUpdate(){
    if (this.state.allCards == null) {
      this.setState({ allCards: this.props.cards })
      this.setState({ filteredCards: this.props.cards })
    }
    if (this.state.currentDeck.deckName === '' && this.props.currentDeck !== 0) {
      console.log('set state!');
      this.setState({ currentDeck: this.props.currentDeck })
    }

  }

  clickme = () => {
    console.log('all cards', this.state.allCards);
    console.log('filtered Cards', this.state.filteredCards);
    console.log('current deck', this.state.currentDeck);
  }

// Filter Functions:
  searchData = (e) => {
    let newCards = this.state.allCards.filter((card) => {
      return card.cardName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    })
    this.setState({ filteredCards: newCards })
  }
// Table Functions:
  renderTable() {
    if (this.state.allCards !== null) {
      return <Table cards={this.state.filteredCards}/>
    }
    return <H1>Loading...</H1>
  }
// Deck info Functions:
handleDeckNameChange = e => {
  const newDeckName = () => {
    return {...this.state.currentDeck, deckName: e.target.value}
  }
  this.setState({ currentDeck: newDeckName() })
}

  handleMageChange = e => {
    const newMage = () => {
      return {...this.state.currentDeck, mage: e.target.value}
    }
    this.setState({ currentDeck: newMage() })
  }

  render() {
    return (
      <div className='container'>
        <button onClick={this.clickme}>View State</button>
        <Filter searchData={this.searchData}/>
        {this.renderTable()}
        <DeckInfo
          handleDeckNameChange={this.handleDeckNameChange}
          handleMageChange={this.handleMageChange}
          deckName={this.state.currentDeck.deckName}
          mage={this.state.currentDeck.mage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cardList,
    currentDeck: state.decks.currentDeck
  }
}
export default connect(mapStateToProps, { fetchCards })(Builder)
