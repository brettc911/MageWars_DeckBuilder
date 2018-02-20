import React, { Component } from 'react';
import styled from 'styled-components'

const Search = styled.div`
  padding: 20px 20px;
  background: grey;
`


class Filter extends Component {

  render() {
    return (
      <div>
        <Search>
          <h1>Search:</h1>
          <input className="filter" id='searchName' onChange={this.props.searchName} placeholder='Search card name' /> <br></br>
          <input className="filter" id='searchDetails' onChange={this.props.searchDetails} placeholder='Search details' />
          <select className="filter" id='selectPrimaryType' onChange={this.props.selectPrimaryType}>
            <option value=''>All</option>
            <option value='Attack'>Attack</option>
            <option value='Creature'>Creature</option>
            <option value='Conjuration'>Conjuration</option>
            <option value='Enchantment'>Enchantment</option>
            <option value='Equipment'>Equipment</option>
            <option value='Incantation'>Incantation</option>
          </select>
        </Search>
      </div>
    )
  }



}

export default Filter;
