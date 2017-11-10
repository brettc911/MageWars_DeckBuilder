import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux:
import cardReducer from '../reducers/cardReducer';
import { fetchCards } from '../actions'

// Import Components
import Table from '../components/Table'

// BEGIN STYING
// __________________________________________________________
const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  input{
    border: 1px solid #A70014;
    height: 20px;
    margin-left: 5px;
    width: 230px;
  }
`
const H1 = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
`

class Cards extends Component {
  constructor(){
    super()
    this.state = {
      cards: null
    }
  }

  componentWillMount(){
    this.props.fetchCards()
  }

  componentDidUpdate(){
    if (this.state.cards == null) {
      this.setState({ cards: this.props.cards })
    }
  }

  clickme = () => {
    console.log(this.state.cards);
  }

  renderTable = () => {
    if (this.state.cards !== null) {
      return <Table cards={this.state.cards}/>
    }
    return <H1>Loading...</H1>
  }


  render() {
    return (
      <div className='container'>
        <button onClick={this.clickme}>View State</button>
        <Search>
          <h1>Search:</h1>
          <input/>
        </Search>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps, { fetchCards })(Cards)
