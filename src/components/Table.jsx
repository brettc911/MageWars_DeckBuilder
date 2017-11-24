import React, { Component } from 'react';
import styled from 'styled-components'

const Center = styled.td`
  text-align: center;
  text-transform: capitalize;

`

class Table extends Component {


  renderRow() {
    let row = this.props.cards.map((card, i) => {
      return (
        <tr key={i}>
          <td><button onClick={this.props.addCard} id={card._id}>+</button> {card.cardName}</td>
          <td>{card.primaryType}</td>
          <Center>{card.manaCost}</Center>
          <Center>{card.action}</Center>
          <td>{card.schools.map((type, idea) => {
            return (` ${type.name}: ${type.level}`)
          })}</td>

        </tr>
      )
    })
    return row
  }

  render() {
    return (
      <table className='primary-table'>
        <tbody>
          <tr>
            <th>Card Name</th>
            <th>Primary Type</th>
            <th>Mana Cost</th>
            <th>Action</th>
            <th>School</th>
          </tr>
          {this.renderRow()}
        </tbody>
      </table>
    )
  }



}

export default Table;
