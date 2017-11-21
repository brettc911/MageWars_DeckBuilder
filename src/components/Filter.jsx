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
          <input onChange={this.props.searchData} placeholder='Search card name'/>
        </Search>
      </div>
    )
  }



}

export default Filter;
