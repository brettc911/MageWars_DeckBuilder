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
          <td>{card.cardName}</td>
          <td>{card.primaryType}</td>
          <Center>{card.manaCost}</Center>
          <Center>{card.action}</Center>

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
          </tr>
          {this.renderRow()}
        </tbody>
      </table>
    )
  }



}

export default Table;
