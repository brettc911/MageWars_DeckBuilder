import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux Actions:

// BEGIN STYING
// __________________________________________________________
const Td = styled.td`
  padding: 0 20px;
`
const Tr = styled.tr`
  padding: 0 20px;
`


class Cards extends Component {


  renderCards() {
    let cards = [];
    if(this.props.cards.length) {
      cards = this.props.cards.map((card, i) => {

        return (
          <tr key={i}>
            <Td>{card.cardName}</Td>
            <Td>{card.primaryType}</Td>
            <Td>{card.manaCost}</Td>
          </tr>
        )
      })
    return cards;
    }
  }

  render() {
    return (
      <div>
        <button>Filter</button>
        <table>
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
