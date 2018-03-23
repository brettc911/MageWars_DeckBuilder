import React, { Component } from 'react';
import styled from 'styled-components'

const Center = styled.td`
  text-align: center;
  text-transform: capitalize;
`
const Level = styled.span`
  border: solid 1px black;
  border-radius: 10px;
  padding: 2px;
  margin: 0 1px;
`

class TableRow extends Component {

  render() {
    let card = this.props.card
    return (
      <tr>
        <td><button onClick={this.props.addCard} id={card._id}>+</button> {card.cardName}</td>
        <td>{card.primaryType}</td>
        <Center>{card.manaCost}</Center>
        <Center>{card.action}</Center>
        <td>
          {card.schools.map((type) => {
            return (`${type.name} `)
          })}
        </td>
        <Center>
          {card.schools.map((type, y) => {
            return <Level key={y}>{type.level}</Level>
          })}
        </Center>
      </tr>
    )
  }
}

export default TableRow;
