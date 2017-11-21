import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux:
import cardReducer from '../reducers/cardReducer';
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
  }

  clickme = () => {
    console.log('all cards', this.state.allCards);
    console.log('filtered Cards', this.state.filteredCards);
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

  render() {
    return (
      <div className='container'>
        <button onClick={this.clickme}>View State</button>
        <Filter searchData={this.searchData}/>
        {this.renderTable()}
        <DeckInfo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps, { fetchCards })(Builder)
