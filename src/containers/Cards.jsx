import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux Actions:

// BEGIN STYING
// __________________________________________________________
const Search = styled.div`
  display: flex;
  flex-direction: row;
`


class Cards extends Component {


  renderCards() {
    let cards = [];
    if(this.props.cards.length) {
      cards = this.props.cards.map((card, i) => {

        return (
          <tr key={i}>
            <td>{card.cardName}</td>
            <td>{card.primaryType}</td>
            <td>{card.manaCost}</td>
          </tr>
        )
      })
    return cards;
    }
  }

  render() {
    return (
      <div className='container'>
        <Search>
          <h1>Search:</h1>
          <input/>
        </Search>
        <table className='primary-table'>
          <tbody>
            <tr>
              <th>Card Name</th>
              <th>Primary Type</th>
              <th>Mana Cost</th>
            </tr>
            {this.renderCards()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps)(Cards)
