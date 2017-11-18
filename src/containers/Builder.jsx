import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux:
import cardReducer from '../reducers/cardReducer';
import { fetchCards } from '../actions'

// Import Components
import Table from '../components/Table'

// Import images
import mw_background_1 from '../styles/images/mw_background_1.jpg'

// BEGIN STYING
// _________________________________________________________
const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: url(${mw_background_1});
  background-position: center;
  opacity: 0.25;
  filter: blur(6px);
`

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  input{
    padding: 0 10px;
    font-size: 16px;
    height: 30px;
    margin-left: 5px;
    width: 230px;
    border: 1px solid #A70014;
    &:focus{
      outline: none;
    }
  }
`
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

  renderTable() {
    if (this.state.allCards !== null) {
      return <Table cards={this.state.filteredCards}/>
    }
    return <H1>Loading...</H1>
  }

  searchData = (e) => {
    let newCards = this.state.allCards.filter((card) => {
      return card.cardName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    })
    this.setState({ filteredCards: newCards })
  }


  render() {
    return (
      <div className='container'>
        <Div></Div>
        <button onClick={this.clickme}>View State</button>
        <Search>
          <h1>Search:</h1>
          <input onChange={this.searchData} placeholder='Search card name'/>
        </Search>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps, { fetchCards })(Builder)
