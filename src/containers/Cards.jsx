import React, { Component } from 'react'
import { connect } from 'react-redux'

// Redux Actions:
import { fetchCards } from '../actions'


class Cards extends Component {

  componentWillMount(){
    this.props.fetchCards()
  }

  render() {
    return (
      <div>
        Cards
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cards: state.cards.cardList}
}
export default connect(mapStateToProps, { fetchCards })(Cards)
