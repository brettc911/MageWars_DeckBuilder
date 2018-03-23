import React, { Component } from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'
import cardReducer from '../reducers/cardReducer';
import deckReducer from '../reducers/deckReducer';
import { fetchCards } from '../actions'
import { autoSave } from '../actions'

// Import Components
import Table from '../components/Table'
import Filter from '../components/Filter'
import DeckInfo from '../components/DeckInfo'

// Import images

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
      sorted: false,
      currentDeck: {
        _id: '',
        deckName: '',
        mage: '',
        cards: []
      }
    }
  }

  componentDidMount(){
    this.props.fetchCards()
  }

  componentDidUpdate(){
    if (this.state.allCards === null) {
      this.setState({ allCards: this.props.cards })
      this.setState({ filteredCards: this.props.cards })
    }
    if (this.state.currentDeck.deckName === '' && this.props.currentDeck !== 0) {
      this.setState({ currentDeck: this.props.currentDeck })
    }
  }

  clickme = e => {
    console.log(this.state)
  }


  handleFiltering = e => {
    let selectPrimaryType = cards => {
      let value = document.querySelector('#selectPrimaryType').value
      if (!value) return cards
      let newCards = cards.filter((card) => {
        return card.primaryType === value
      })
      return newCards
    }
    let searchName = cards => {
      let value = document.querySelector('#searchName').value
      if (!value) return cards
      let newCards = cards.filter((card) => {
         return card.cardName.toLowerCase().indexOf(value.toLowerCase()) !== -1
       })
      return newCards
     }
    let searchDetails = cards => {
      let value = document.querySelector('#searchDetails').value
      if (!value) return cards
      let newCards = cards.filter((card) => {
        return card.details.toLowerCase().indexOf(value.toLowerCase()) !== -1
      })
      return newCards
    }
    let filterResults = searchDetails(searchName(selectPrimaryType(this.state.allCards)))
    this.setState({ filteredCards: filterResults })
  }


// Table Functions:
  renderTable() {
    if (this.state.allCards !== null) {
      return (
        <Table
          cards={this.state.filteredCards}
          addCard={this.addCard}
          sortTable={this.sortTable}
        />
      )
    }
    return <H1>Loading...</H1>
  }

  sortTable = column => {
    let cards = this.state.filteredCards
    let sortedTable = []
    if (this.state.sorted === column) {
      sortedTable = cards.reverse()
    } else {
      column === 'manaCost' ? sortedTable = cards.sort((a,b) => {return parseFloat(a.manaCost) - parseFloat(b.manaCost)}) : null
      column === 'cardName' ? sortedTable = cards.sort((a,b) => {return a.cardName.localeCompare(b.cardName)}) : null
      column === 'primaryType' ? sortedTable = cards.sort((a,b) => {return a.primaryType.localeCompare(b.primaryType)}) : null
      column === 'action' ? sortedTable = cards.sort((a,b) => {return a.action.localeCompare(b.action)}) : null
      column === 'action' ? sortedTable = cards.sort((a,b) => {return a.action.localeCompare(b.action)}) : null
      column === 'school' ? sortedTable = cards.sort((a,b) => {return a.schools[0].name.localeCompare(b.schools[0].name)}) : null
      column === 'level' ? sortedTable = cards.sort((a,b) => {return a.schools[0].level.localeCompare(b.schools[0].level)}) : null
    }
    this.setState({ sorted: column })
    this.setState({ filteredCards: sortedTable })
  }

  addCard = e => {
    let targetCard = null

    this.props.cards.forEach(card => {
      if (card._id === e.target.id) {
        targetCard = card
        if (!targetCard.number) targetCard.number = 1
        console.log('card: ', targetCard);
      }
    })

    if (this.state.currentDeck.cards.length === 0) {
      const newDeck = () => {
        return {...this.state.currentDeck, cards: [targetCard]}
      }
      this.setState({ currentDeck: newDeck() })
    }
    else {
      let newCards = []

      let exCard = this.state.currentDeck.cards.filter(card => card._id === targetCard._id)
      if (exCard.length > 0) {
        exCard[0].number ++
        newCards.push(exCard[0])
      }

      this.state.currentDeck.cards.forEach(card => {
        if (card._id !== targetCard._id && newCards.length === 0) newCards.push(targetCard)
        if (card._id !== targetCard._id) newCards.push(card)
      })

      newCards = newCards.sort((a,b) => {return (a.cardName > b.cardName) ? 1 : ((b.cardName > a.cardName) ? -1 : 0);} );
      const newDeck = () => {
        return {...this.state.currentDeck, cards: newCards}
      }
      this.setState({ currentDeck: newDeck()})
    }
  }

  removeCard = e => {
    let newCards = []

    if (this.state.currentDeck.cards.length > 1){
      newCards = this.state.currentDeck.cards.filter(card => e.target.id !== card._id)
      let targetCard = this.state.currentDeck.cards.filter(card => e.target.id === card._id)
      targetCard[0].number --
      newCards.push(targetCard[0])

    } else {
      this.state.currentDeck.cards[0].number --
      newCards.push(this.state.currentDeck.cards[0])
    }

    newCards = newCards.sort((a,b) => {return (a.cardName > b.cardName) ? 1 : ((b.cardName > a.cardName) ? -1 : 0);} );
    newCards = newCards.filter(card => card.number > 0)
    const newDeck = () => {
      return {...this.state.currentDeck, cards: newCards}
    }
    this.setState({ currentDeck: newDeck()})
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

handleSaveDeck = e => {
  let deck = this.state.currentDeck
  console.log(deck);
  let id = this.props.currentDeck._id
  this.props.autoSave(deck, id)
}

  render() {
    return (
      <div className='container'>
        <button onClick={this.clickme}>View State</button>
        <Filter
          searchName={this.handleFiltering}
          searchDetails={this.handleFiltering}
          selectPrimaryType={this.handleFiltering}
        />
        <div className="side_by_side">
          {
            this.state.allCards ?
            <Table
            cards={this.state.filteredCards}
            addCard={this.addCard}
            sortTable={this.sortTable}
            /> :
            <H1>Loading...</H1>
          }
          <DeckInfo
            deckNameChange={this.handleDeckNameChange}
            mageChange={this.handleMageChange}
            deckName={this.state.currentDeck.deckName}
            mage={this.state.currentDeck.mage}
            cards={this.state.currentDeck.cards}
            removeCard={this.removeCard}
            saveDeck={this.handleSaveDeck}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cardList,
    currentDeck: state.decks.currentDeck
  }
}
export default connect(mapStateToProps, { fetchCards, autoSave })(Builder)
