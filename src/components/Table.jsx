import React, { Component } from 'react';
import styled from 'styled-components'

const Center = styled.td`
  text-align: center;
`



class Table extends Component {

  renderRow() {
    let row = this.props.cards.map((card, i) => {
      return (
        <tr key={i}>
          <td>{card.cardName}</td>
          <td>{card.primaryType}</td>
          <Center>{card.manaCost}</Center>
        </tr>
      )
    })
    return row
  }

  // let children = [];
  // if(this.props.children.length) {
  //   children = this.props.children.map((child) => {
  //
  //     return <Child key={child.id} child={child} groupChild={true}/>
  //   })
  // return children;
  // }




  render() {
    return (
      <table className='primary-table'>
        <tbody>
          <tr>
            <th>Card Name</th>
            <th>Primary Type</th>
            <th>Mana Cost</th>
          </tr>
          {this.renderRow()}
        </tbody>
      </table>
    )
  }



}

export default Table;