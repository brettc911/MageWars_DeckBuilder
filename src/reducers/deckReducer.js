import { FETCH_DECKS } from '../actions/types'
import { CREATE_DECK } from '../actions/types'
import { AUTO_SAVE } from '../actions/types'


const INITIAL_STATE = {

  deckList: [],
  currentDeck: 0,

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_DECKS:
      return {...state, deckList: action.payload}

    case CREATE_DECK:
      return {...state, currentDeck: action.payload}

    case AUTO_SAVE:
      return {...state, currentDeck: action.payload}

    default:
      return state;
  }
}
