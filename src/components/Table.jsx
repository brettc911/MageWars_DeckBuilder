import React, { Component } from 'react';
import styled from 'styled-components'

import TableRow from './TableRow'

class Table extends Component {

  renderRows() {
    let rows = this.props.cards.map((card, i) => {
      return (
        <TableRow
          key={i}
          addCard={this.props.addCard}
          card={card}
        />
      )
    })
    return rows
  }

  render() {
    return (
      <table className='primary-table'>
        <tbody>
          <tr>
            <th onClick={() => {this.props.sortTable('cardName')}}>Card Name</th>
            <th onClick={() => {this.props.sortTable('primaryType')}}>Primary Type</th>
            <th onClick={() => {this.props.sortTable('manaCost')}}>Mana Cost</th>
            <th onClick={() => {this.props.sortTable('action')}}>Action</th>
            <th onClick={() => {this.props.sortTable('school')}}>School</th>
            <th onClick={() => {this.props.sortTable('level')}}>Level</th>
          </tr>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default Table;
